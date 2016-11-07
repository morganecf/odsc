import pandas as pd

def get_perc_error(predictionfile, out):
  data = pd.read_csv('data_with_topics.csv', encoding="iso-8859-1")
  preds = pd.read_csv(predictionfile)

  data = data[data.likes != '272678timestamp']

  actual = data.likes.map(float)
  predicted = preds['Cross-Validation Prediction']

  actual_norm = actual + 0.0001
  perc_diff = (predicted - actual_norm) / actual_norm

  # last one is nan
  distrib = perc_diff[:14326]

  df = pd.DataFrame()
  df['perc_diff'] = distrib
  df['predicted'] = list(predicted)
  df['actual'] = list(actual)

  df.to_csv(out, index=False)

get_perc_error('predictions/Memes_with_topics_(RMSE)_TensorFlow_Neural_Network_Regressor_(1)_16.0_relevant.csv', 'predictions/tensor_perc_err.csv')
# get_perc_error('predictions/Memes_with_topics_(14k)_ENET_Blender_(51+50+49+47+52+48+46+45)_(87)_64.0_relevant.csv', 'predictions/enet_blender_perc_err.csv')
# get_perc_error('predictions/Memes_with_topics_(14k)_Mean_Response_Regressor_(8)_16.0_relevant.csv', 'predictions/mean_response_perc_err.csv')

# In Jupyter notebook:
# mean_perc_err = pd.read_csv('predictions/mean_response_perc_err.csv')
# mpe_pred.perc_diff.plot.hist(60)

# def get_lift_perc_error():
#   data = pd.read_csv('predictions/glm_blender_lift.csv')
#   perc_diff = (data.Predicted - data.Actual) / data.Actual
#   data['perc_diff'] = list(perc_diff)
#   data.to_csv('predictions/glm_blender_lift_perc_error.csv', index=False)

# get_lift_perc_error()
