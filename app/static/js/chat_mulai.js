$(document).ready(() => {

    $("#tombol-kirim-chatbot").click((e) => {
        e.preventDefault();

        var input_chat_user = $("input[name='teks_user']").val();

        teks_user = '<div class="kotak-chat-popup-user-chatbot text-right" id="chat-user"> \
    <div class="chat-popup-user-chatbot inline-block px-5 py-1 mt-8 ml-5 mr-5 rounded-3xl bg-white"> \
        <div class="tambahan-chat-popup-user-chatbot absolute right-3 -bottom-2 w-0 border-t-[10px] border-t-solid border-t-white border-x-[8px] border-x-solid border-x-solid border-x-transparent text-sm"> \
        </div>\
        <p class="text-sm text-[#0AC0F7]">' + input_chat_user + '</p> \
        </div> \
    </div>'

        $("#chat").append(teks_user);
        
        function hasil_prediksi_chat(jawaban_prediksi) {
            var str_hasil = '';

            // Hasil Jawaban Prediksi Chat
            str_hasil += '<div class="kotak-chat-popup-robot-chatbot text-left" id="chat-bot"> \
            <div class="chat-popup-robot-chatbot inline-block px-5 py-1 mt-8 ml-5 mr-5 rounded-3xl bg-white text-sm"> \
                <div class="tambahan-chat-popup-robot-chatbot absolute left-3 -bottom-2 w-0 border-t-[10px]   border-t-solid border-t-white border-x-[8px] border-x-solid border-x-solid border-x-transparent"> \
                </div> \
                <p class="text-sm text-[#0AC0F7]"> ' + jawaban_prediksi + '</p> \
                </div> \
            </div>'

            $("#chat").append(str_hasil);

        }

        // Panggil API + Timeout 0.5 detik (500ms)
        setTimeout(() => {
            try {
                $.ajax({
                    url : "chat-bot",
                    type : "POST", 
                    data : {
                        "teks_from_user" : input_chat_user,
                    },
                    success:(res) => {
                        // Ambil hasil prediksi dari API
                        res_hasil_prediksi_chat = res['hasil_prediksi_chat']

                        // Tampilkan hasil prediksi ke halaman web
                        hasil_prediksi_chat(res_hasil_prediksi_chat);
                    }
                });
            } catch (e) {
                // Jika gagal memanggi API, tampilkan error di console
                console.log("Prediksi NLP Gagal !");
                console.log(e);
            }
        }, 500)

        $("input[name='teks_user']").val('')

    })

})