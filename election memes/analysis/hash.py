import os
import imagehash
import PIL

avg_out = open('imgur_avg_hashes.csv', 'w')
perc_out = open('imgur_perceptual_hashes.csv', 'w')
filenames = list(filter(lambda f: f.startswith('imgur'), os.listdir('./imgur_pics/')))

for filename in filenames:
  img = PIL.Image.open('imgur_pics/' + filename)

  # no need to resize; imagehash does this
  avg_hash = imagehash.average_hash(img)
  perc_hash = imagehash.phash(img)

  avg_out.write(str(avg_hash) + '\n')
  perc_out.write(str(perc_hash) + '\n')

  print(filename, img_hash)

avg_out.close()
perc_out.close()

