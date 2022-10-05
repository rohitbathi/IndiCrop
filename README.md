# IndiCrop<br/>
### About<br/>
IndiCrop is an application which predicts the best crop for Indian soil when provided with the soil conditions. This application was built with the aim to help government organizations in rural areas to help them improve the productivity of farmers in rural areas. This is a web application which makes use of machine learning techniques to predict the best suitable crop which can grow in a given soil.

### Dataset<br/>
The dataset used for this project is the **Crop Recommendation Dataset** provided by ***Atharva Ingle*** on Kaggle. The link is given below:<br/>
https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset<br/>
This dataset was built by augmenting datasets of 
rainfall, climate and fertilizer data available for India. This 
dataset consists of the following data fields: 
- N - ratio of Nitrogen content in soil 
- P - ratio of Phosphorous content in soil 
- K - ratio of Potassium content in soil 
- temperature - temperature in degree Celsius 
- humidity - relative humidity in % 
- pH - pH value of the soil 
- rainfall - rainfall in mm <br/>
The dataset consists of about 2200 entries of crop recorded with the particular soil conditions.

### Building machine learning model
The machine learning algorithm used to build this model is the Random Forest Classifier. We have set the parameters of the Random Forest Classifier model as 100 n estimators with 
maximum tree depth of 3 and minimum sample of leaf as 4 and random state of 0.