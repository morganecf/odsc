import pandas as pd
from gensim import corpora, models
from datetime import datetime
from stop_words import get_stop_words
from nltk.tokenize import RegexpTokenizer

tokenizer = RegexpTokenizer(r'\w+')
stop_words = get_stop_words('en')
num_topics = 10

def add_seasonalities(data):
  data['datetime'] = data['timestamp'].map(lambda t: datetime.strptime(pad(t), '%m/%d/%y %H:%M'))
  data['month'] = data['datetime'].map(lambda t: t.month)
  data['hour'] = data['datetime'].map(lambda t: t.hour)
  data['day'] = data['datetime'].map(lambda t: t.day)
  data['weekday'] = data['datetime'].map(lambda t: t.weekday())
  data['timestamp'] = data['datetime'].map(lambda t: t.strftime('%m/%d/%y %H:%M'))
  return data

def merge_topics(trump_topics, clinton_topics):
  both_topics = []
  for i, t_topics in enumerate(trump_topics):
    topics = t_topics[:]
    topics.extend(clinton_topics[i])
    both_topics.append(topics)
  return both_topics

def save_topics(topics, n, out):
  df = pd.DataFrame(topics)
  columns = dict([(x, 'topic' + str(x)) for x in range(n * 2)])
  new_df = df.rename(index=str, columns=columns)
  new_df.to_csv(out, index=False)

def clean(text):
  return ' '.join(text.splitlines()).replace('"', '').replace('\n', '').replace('\\n', '').lower()

def get_topics(model, corpus):
  topics = []
  for i, bow_doc in enumerate(corpus):
    doc_topics = dict(model[bow_doc])
    topics.append([doc_topics.get(i, 0.0) for i in range(10)])
  return topics


def train_model(train_file, test_file, model_name):
  # Get raw train captions
  raw_train_data = pd.read_csv(train_file, encoding="iso-8859-1", index_col=2)
  train_captions = list(raw_train_data['caption'].map(clean))

  # Get raw test captions
  raw_test_data = pd.read_csv(test_file, encoding="iso-8859-1", index_col=2)
  test_captions = list(raw_test_data['caption'].map(clean))

  print('Vectorizing')

  # Tokenize and remove train stop words
  train = []
  for caption in train_captions:
    tokens = tokenizer.tokenize(caption)
    tokens_clean = list(filter(lambda token: token not in stop_words and len(token) > 1, tokens))
    train.append(tokens_clean)

  # Tokenize and remove test stop words
  test = []
  for caption in test_captions:
    tokens = tokenizer.tokenize(caption)
    tokens_clean = list(filter(lambda token: token not in stop_words and len(token) > 1, tokens))
    test.append(tokens_clean)

  # Gets word counts - dictionary should be based on train data
  dictionary = corpora.Dictionary(train)

  # Bag of words -- list of vectors of tuples -- based on training set
  train_corpus = [dictionary.doc2bow(doc) for doc in train]
  test_corpus = [dictionary.doc2bow(doc) for doc in test]

  print('Starting training...')

  # Train model
  model = models.ldamodel.LdaModel(train_corpus, num_topics=num_topics, id2word=dictionary, passes=40)

  # Print top 10 topics
  topics = model.print_topics(num_topics=num_topics, num_words=10)
  for i, topic in enumerate(topics):
    print("Topic", i)
    ws = topic[1].split(' + ')
    for w in ws:
      prob, word = w.split('*')
      print('\t', word.encode('utf-8'), prob)
    print()

  # Save model
  model.save(model_name)

  train_topics = get_topics(model, train_corpus)
  test_topics = get_topics(model, test_corpus)

  return train_topics, test_topics

print('Assigning Trump topics to Trump/Clinton')
trump_trump_topics, clinton_trump_topics = train_model('mdt.csv', 'mhc.csv', 'trump_topic.model')

print('Assigning Clinton topics to Trump/Clinton')
clinton_clinton_topics, trump_clinton_topics = train_model('mhc.csv', 'mdt.csv', 'hillary_topic.model')

print('Merging and saving')
trump_topics = merge_topics(trump_trump_topics, trump_clinton_topics)
clinton_topics = merge_topics(clinton_clinton_topics, clinton_trump_topics)

save_topics(trump_topics, num_topics, 'trump_topics.csv')
save_topics(clinton_topics, num_topics, 'clinton_topics.csv')


### TODO: Improve tokenizer to include contractions
## remove numbers?
## remove names?
## increase # of iterations