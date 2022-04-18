from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('home.html')

@app.route("/website1")
def azuki():
    return render_template('azuki.html')

app.run(host='0.0.0.0',port=8080)
