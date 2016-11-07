import time
import random
import requests
import pandas as pd
from bs4 import BeautifulSoup

def find_link(url):
  request = requests.get(url)
  soup = BeautifulSoup(request.text)
  images = soup.find_all('img')
  return images[0].attrs.get('src')

out = open('imgur_links.txt', 'a')
data = pd.read_csv('imgur_data.csv', encoding='iso-8859-1')

urls = data.link
for i, url in enumerate(urls):
  if url.endswith('.jpg') or url.endswith('.png'):
    print('JPG--->', url, i)
    out.write(url + '\n')
  else:
    link = find_link(url)
    print('LINK--->', link, i)
    out.write(link + '\n')

  if i % 100 == 0:
    time.sleep(random.random() * 5)

out.close()
