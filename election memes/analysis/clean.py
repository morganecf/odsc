from datetime import datetime

lines = open('data_no_bad_lines.csv').read().splitlines()
out = open('data_no_bad_lines_cleaned_seasonality.csv', 'w')

metadata = ['timestamp', 'month', 'hour', 'day', 'weekday', 'id', 'link', 'caption', 'author', 'network', 'likes']
out.write(','.join(metadata) + '\n')

for i, line in enumerate(lines[1:]):
  try:
    fields = line.split(',')
    timestamp_str = fields[0]
    lid = fields[1]
    link = fields[2]
    text = fields[3:-3]
    username = fields[-3]
    network = fields[-2]
    likes = fields[-1]

    try:
      tstamp = datetime.strptime(timestamp_str, '%Y-%m-%d %H:%M:%S')
    except ValueError:
      pass

    weekday = str(tstamp.weekday())
    month = str(tstamp.month)
    hour = str(tstamp.hour)
    day = str(tstamp.day)
    # timestamp = str(tstamp.timestamp())
    timestamp = tstamp.strftime('%m/%d/%Y %H:%M:%S')

    text = ' '.join(str(' '.join(text)).splitlines()).replace('"', '').replace('\n', '').replace('\\n', '')
    cleaned_fields = [timestamp, month, hour, day, weekday, lid, link, text, username, network, likes]
    newline = ','.join(cleaned_fields) + '\n'
    out.write(newline)
  except IndexError:
    print(line)

out.close()