import numpy as np
import model as ml
from flask import Flask, request, jsonify

# Debadree send json as { 'x': [coordinates of x], 'y': [...], 'x1': valueSupplied }
@app.route('/', methods=['POST'])
def home():
    input = request.get_json()

    listX = input['x']
    listY = input['y']
    xSupplied = input['x1']

    getY = ml.calc(listX, listY, x1)

    return jsonify({'result' : getY})
