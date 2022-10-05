import pickle
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

class Item(BaseModel):
    N: int
    P: int
    K: int
    temperature: float
    humidity: float
    ph: float
    rainfall: float

def predict_crop(N,P,K,temperature,humidity,ph,rainfall):
    x = [[N,P,K,temperature,humidity,ph,rainfall]]
    return model.predict(x)

origins = [
    "http://localhost",
    "http://127.0.0.1:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/predict')
async def predict(item: Item):
    [prediction]=predict_crop(item.N,
            item.P,
            item.K,
            item.temperature,
            item.humidity,
            item.ph,
            item.rainfall)
    return {'prediction': prediction}