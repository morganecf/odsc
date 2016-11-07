''' Gini Norm calculation

Gini could be used with either a binary or continuous response, although it is more commonly used with a binary response.
In this form, it is equivalent to AUC and is only sensitive to the order of predictions, not their magnitudes.

Observations are sorted from "largest prediction" to "smallest prediction".
This is the only step where your predictions come into play, SO ONLY THE ORDER determined by your predictions matters.
Visualize the observations arranged from left to right, with the largest predictions on the left.
We then move from left to right, asking "In the leftmost x percent of the data, how much of the cumulative response have you accumulated?"
The response could be binary (0/1) in which case we're looking at the accumulated proportion of 1's, or could be continuous.

With no model, you can expect to accumulate 10 percent of the response accumulated in 10 percent of the predictions,
so no model (or a "null" model) achieves a straight line. We call the area between your curve and this straight line the Gini coefficient.

There is a maximum achievable area for a "perfect" model since not all of the positive examples occur immediately.
We use the normalized Gini coefficient by dividing the Gini coefficient of your model by the Gini coefficient of the perfect model.
'''

import pandas as pd

def gini_cumulative_distrib(actual, predicted):
    n = len(actual)
    nrange = range(n)
    df = zip(actual, predicted, nrange)

    # Sort predictions from high to low
    df = sorted(df, key=lambda x: (x[1], -x[2]), reverse=True)

    # [1/n, 2/n.....n/n]
    rand = [float(i + 1) / float(n) for i in nrange]

    # Sum of actuals
    totalPos = float(sum(actual))

    # Find cumulative sum at each spot (for actuals)
    cumPosFound = [df[0][0]]
    for i in range(1, n):
        previous = cumPosFound[len(cumPosFound) - 1]
        current = df[i][0]
        cumPosFound.append(previous + current)

    # Percentage of cumsum for actuals - rand[i]
    # i.e., what % coverage of the response do we have as we proceed
    # along predictions if they're sorted from highest to lowest?
    # Only the order of the predictions matters
    return [(float(x) / totalPos) - rand[i] for i, x in enumerate(cumPosFound)]


# Gini coefficient is summation of cumulative distrib
def gini(actual, predicted, out):
    cumsum = gini_cumulative_distrib(actual, predicted)
    pd.Series(cumsum).to_csv(out)
    return sum(cumsum)


# normalized gini coefficient
def gini_norm(actual, predicted):
    gini_predicted = gini(actual, predicted, 'gini/blender_gini_cumsum.csv')
    gini_perfect = gini(actual, actual, 'gini/perfect_gini_cumsum.csv')
    return gini_predicted / gini_perfect



# predictionfile = 'predictions/Memes_with_topics_(14k)_Mean_Response_Regressor_(8)_16.0_relevant.csv'
predictionfile = 'predictions/Memes_with_topics_(14k)_ENET_Blender_(51+50+49+47+52+48+46+45)_(87)_64.0_relevant.csv'

data = pd.read_csv('data_with_topics.csv', encoding="iso-8859-1")
preds = pd.read_csv(predictionfile)

data = data[data.likes != '272678timestamp']
actual = data.likes.map(float)
predicted = preds['Cross-Validation Prediction']

normalized_gini = gini_norm(actual, predicted)

print('Normalized gini:', normalized_gini)

# To plot in jupyter:
# cumsum = pd.read_csv('gini/blender_gini_cumsum.csv', index_col=0)
# cumsum.plot()