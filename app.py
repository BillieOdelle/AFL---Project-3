from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def Home():
    return render_template("index.html")

@app.route('/api/data')
def Data():
    d = {
        'one': 10,
        'two': 20,
        'three': 30,
        'four': 40,
    }
    
    return d;