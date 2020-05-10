import numpy as np
import  model as ml
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

# Debadree send json as { 'x': [coordinates of x], 'y': [...], 'x1': valueSupplied }
@app.route('/', methods=['POST'])
def home():
    inp = request.get_json()
    print(request.json)
    listX = inp['x']
    listY = inp['y']
    xSupplied = inp['x1']

    getY = ml.prediction(listX, listY, xSupplied)

    return render_template('result.html', result = getY)

@app.route('/index',methods=['GET'])
def index():
    return 'Welcome to the backend'