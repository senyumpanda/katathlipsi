from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_url_path='/static')
model = None

# ===== [Routing] ======

@app.route("/")
def beranda():
    return render_template('index.html')

@app.route("/tes")
def tes_indikasi():
    return render_template('tes_indikasi.html')

@app.route("/tes-indikasi")
def poin_indikasi():
    return render_template('mulai_tes1.html')

@app.route('/chat-bot')
def chatbot():
    return render_template('chatbot.html')

@app.route('/kelompok')
def kelompok():
    return render_template('group.html')

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)