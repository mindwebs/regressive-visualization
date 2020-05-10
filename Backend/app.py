import numpy as np
import model as ml
from flask import Flask, request, jsonify
app = Flask(__name__)

# Debadree send json as { 'x': [coordinates of x], 'y': [...], 'x1': valueSupplied }
@app.route('/', methods=['POST'])
def home():
    inp = request.get_json()
    print(request.json)
    listX = inp['x']
    listY = inp['y']
    xSupplied = inp['x1']

    getY = ml.calc(listX, listY, xSupplied)

    return jsonify({'result' : getY})

@app.route('/index',methods=['GET'])
def index():
    return 'Welcome to the backend'