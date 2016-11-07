import pandas as pd
from datetime import datetime

def clean(text):
  return ' '.join(text.splitlines()).replace('"', '').replace('\n', '').replace('\\n', '')

def pad(date):
  month, day, year = date.split('/')
  if len(month) == 1:
    month = '0' + month
  if len(day) == 1:
    day = '0' + day
  return '/'.join([month, day, year])

trump = pd.read_csv('mdt.csv', encoding="iso-8859-1", index_col=2)
clinton = pd.read_csv('mhc.csv', encoding="iso-8859-1", index_col=2)

# Get topics
trump_topics = pd.read_csv('trump_topics.csv')
clinton_topics = pd.read_csv('clinton_topics.csv')

print(trump_topics.shape)
print(clinton_topics.shape)

for x in range(20):
  topic = 'topic' + str(x)
  trump[topic] = list(trump_topics[topic])
  clinton[topic] = list(clinton_topics[topic])

# Merg
trump.append(clinton)

# Bad line
data = trump[trump.timestamp != 'id']

data['caption'] = data['caption'].map(clean)

# Seasonality features
data['datetime'] = data['timestamp'].map(lambda t: datetime.strptime(pad(t), '%m/%d/%y %H:%M'))
data['month'] = data['datetime'].map(lambda t: t.month)
data['hour'] = data['datetime'].map(lambda t: t.hour)
data['day'] = data['datetime'].map(lambda t: t.day)
data['weekday'] = data['datetime'].map(lambda t: t.weekday())
data['timestamp'] = data['datetime'].map(lambda t: t.strftime('%m/%d/%y %H:%M'))

data.to_csv('data_with_topics.csv', encoding='utf-8')