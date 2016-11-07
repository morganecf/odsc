import time
import random
import requests
from io import open as iopen

links = open('imgur_links.txt').read().splitlines()
for i, link in enumerate(links):
  if link.startswith('//'):
    link = link[2:]
  if not link.startswith('http'):
    link = 'http://' + link

  request = requests.get(link)
  out = 'imgur_pics/imgur' + str(i)

  with iopen(out, 'wb') as f:
    f.write(request.content)

  print(i, link)
  if i % 500 == 0:
    time.sleep(random.random() * 5)