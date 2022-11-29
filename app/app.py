import subprocess
import sys
def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])
    
install("numpy")
install("pandas")
install("joblib")
install("Flask")
install("sklearn")

import numpy as np
import pandas as pd
import joblib
import json
import re
import random
from flask import Flask, render_template, request, jsonify
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from joblib import load


app = Flask(__name__, static_url_path='/static')
model = load("Random_Forest.model")

# ===== [Routing] ======

@app.route("/")
def beranda():
    return render_template('index.html')

@app.route("/tes")
def tes_indikasi():
    return render_template('tes_indikasi.html')

@app.route("/tes-indikasi", methods=['GET','POST'])
def poin_indikasi():
    # Nilai default untuk variabel input
    input_gender = 0
    input_married = 0
    input_education = 0
    input_age = 0
    input_business = 0
    input_job = 0
    input_time_place = 0
    input_time_consume = 0
    input_count_gadget = 0
    input_time_social_media = 0
    input_family = 0
    input_treatment = 0
    input_disruption = 0
    
    if request.method == 'POST':
        
        # Atur nilai input 
        input_gender = int(request.form['gender'])
        input_married = int(request.form['married'])
        input_education = int(request.form['education'])
        input_age = int(request.form['age'])
        input_business = int(request.form['business'])
        input_job = int(request.form['job'])
        input_time_place = int(request.form['time_place'])
        input_time_consume = int(request.form['time_consume'])
        input_count_gadget = int(request.form['count_gadget'])
        input_time_social_media = int(request.form['time_social_media'])
        input_family = int(request.form['family'])
        input_treatment = int(request.form['treatment'])
        input_disruption = int(request.form['disruption'])
        
        # Prediksi fitur 
        df_test = pd.DataFrame(data = {
            "sex": [input_gender],
            "age": [input_age],
            "married": [input_married],
            "education_level": [input_education],
            "incoming_business": [input_business],
            "part_time": [input_job],
            "home":  [input_time_place],
            "study_time": [input_time_consume],
            "number_gadgets": [input_count_gadget],
            "socialmedia_time": [input_time_social_media],
            "family_history": [input_family],
            "treatment": [input_treatment],
            "work_interfere": [input_disruption]
        })
        
        hasil_prediksi = model.predict(df_test[0:1])[0]
        
        # Atur Jalur dari Hasil Prediksi
        if hasil_prediksi == 0:
            hasil_prediksi = "Anda tidak terindikasi depresi"
            deskripsi_saran = "Wahhh selamatt 😁, tetap dipertahankan yaaa ^_^"
        elif hasil_prediksi == 1:
            hasil_prediksi = "Anda terindikasi depresi"
            deskripsi_saran = "Yaahh gapapa🥺, ayoo berpikir positif dan lakukan kegiatan yang kamu sukai yaaa ^_^"
        
        # Kembalikan Nilai Prediksi dengan format JSON
        return jsonify({
            "jawaban_hasil" : hasil_prediksi,
            "deskripsi_saran" : deskripsi_saran
        })
    elif request.method == 'GET':
        return render_template("mulai_tes.html")
    else:
        return render_template('beranda.html')

@app.route('/chat-bot', methods=['GET', 'POST'])
def chatbot():
    input_chat_user = '';
    
    if request.method == 'POST':
        # Import file JSON
        input_chat_user = str(request.form['teks_from_user'])
        
        with open('nlp_teks.json', 'r') as teks_nlp:
            file_nlp = json.load(teks_nlp)
        
        # Membuat Dataframe
        teks_input = []
        teks_tag = []

        for kata in file_nlp['teks']:
            for pola in kata['patterns']:
                teks_input.append(pola)
                teks_tag.append(kata['tag'])
        
        df = pd.DataFrame({'teks_input': teks_input, 'tag': teks_tag})
        
        # Respon Bot
        respon = {}

        for teks in file_nlp['teks']:
            for resp in teks['responses']:
                if teks['tag'] in respon.keys():
                    respon[teks['tag']].append(resp)
                else:
                    respon[teks['tag']] = [resp]
        
        # Fungsi Preprocessing
        def text_preprocessing(text):
            text = text.lower()                              
            text = re.sub(r'https?://\S+|www\.\S+', '', text) 
            text = re.sub(r'[-+]?[0-9]+', '', text)           
            text = re.sub(r'[^\w\s]','', text)                
            text = text.strip()                                 
            return text
        
        df['clean_teks_input'] = df.teks_input.apply(text_preprocessing)
        
        # Feature Extraction
        bow = CountVectorizer(ngram_range=(1,2))
        bow.fit(df['clean_teks_input'])
        
        # Ubah Data ke Matriks
        teks_vect = bow.transform(df['clean_teks_input'])
        
        # Model
        clf = MultinomialNB()
        clf.fit(teks_vect, df.tag)
        
        # Fungsi Prediksi
        def dapat_respon(kriteria):
            return random.choice(respon[kriteria])

        def prediksi_chat(input_user):
            input_user = text_preprocessing(input_user)
            input_user = bow.transform([input_user])
            
            hasil = clf.predict_proba(input_user)
            
            max_prob = max(hasil[0])               
            max_idx = np.argmax(hasil[0])
            
            if max_prob < 0.3:
                return "Maaf, saya tidak mengerti apa yang kamu maksud :("
            else:
                for tg in file_nlp['teks']:
                    if tg['tag'] == max_idx:
                        respon_ = tg['responses']
                return dapat_respon(clf.classes_[max_idx])
            
        return jsonify({
            'hasil_prediksi_chat':prediksi_chat(input_chat_user)
        })
        
        
    elif request.method == 'GET':
        return render_template('chatbot.html')
    else:
        return render_template('beranda.html')

@app.route('/kelompok')
def kelompok():
    return render_template('group.html')


if __name__ == '__main__':
    
    app.run(host="localhost", port=5000, debug=True)
    