$(document).ready(() => {
    
    // --  NEW  --

    var hasil_tes = 
    {
        'soal_1':'',
        'soal_2':'',
        'soal_3':'',
        'soal_4':'',
        'soal_5':'',
        'soal_6':'',
        'soal_7':'',
        'soal_8':'',
        'soal_9':'',
        'soal_10':'',
        'soal_11':'',
        'soal_12':'',
        'soal_13':'',
    }
    var semuaNilai = false;

    var numberOfItems = $("#loop .beranda").length;

    var limitPerPage = 1;
    $("#loop .beranda:gt(" + (limitPerPage - 1) + ")").hide()
    var totalPages = Math.round(numberOfItems / limitPerPage);
    $(".tombol-tes .pagination").append("<li class='current-page active'><a href='javascript:void(0)' class='relative -bottom-16 text-xl px-1 text-[#0AC0F7] hover:font-bold hover:text-2xl hidden'>" + 1 + "</a></li>");

    for(var i = 2; i <= totalPages; i++){
        $(".tombol-tes .pagination").append("<li class='current-page'><a href='javascript:void(0)' class='relative -bottom-16 px-1 text-xl text-[#0AC0F7] hover:font-bold hover:text-2xl hidden'>" + i + "</a></li>")
    }

    $(".tombol-tes .pagination").append(`<li><div class="tombol-lanjut-tes relative -bottom-3/4 flex align-items-center justify-end cursor-pointer transition-all duration-500 ease-in-out hover:translate-x-[5px] hover:transition-all hover:duration-500 hover:ease-in-out" id="next-page">
    <a href="javascript:void(0)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="64" viewBox="0 0 256 256" xml:space="preserve">

            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <polygon points="69.52,45 30.25,90 20.48,81.48 52.31,45 20.48,8.52 30.25,0 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #0AC0F7; fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
            </g>
            </svg>
    </a>
</div></li>`)

    $(".tombol-tes .pagination").append(`<li>
    <button id="prediksi_submit" class="tombol-prediksi bg-white px-5 h-12 rounded-md text-md text-[#0AC0F7] transition-all duration-300 font-bold uppercase ring-2 ring-[#0AC0F7] hover:tracking-wide hover:transition-all hover:duration-300 hover:bg-[#0AC0F7] hover:text-white hover:ring-0 relative -bottom-14 ml-8 hidden">Lihat Hasil</button>
    </li>`)
    
    $(".tombol-tes .pagination li.current-page").on("click", function() {
        if($(this).hasClass("active")) {
            return false;
        } else {
            var currentPage = $(this).index();
            alert("user clicked on " + currentPage);

            $(".tombol-tes .pagination li").removeClass("active");
            $(this).addClass("active");
            $("#loop .beranda").hide();

            var grandTotal = limitPerPage * currentPage;

            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#loop .beranda:eq(" + i + ")").show();
            }
        }

    });

    $("#next-page").on("click", () => {
        // alert($(".pagination li.active").index())
        var currentPage = $(".pagination li.active").index();
        if (currentPage === 13) {
            $("#next-page").addClass("hidden")
            $(".tombol-prediksi").removeClass("hidden")
        }

        if(currentPage === totalPages) {
            return false;
        } else {
            // ++ Ambil Nilai ++
            if(currentPage === 1) {
                var input1 = $("input[name='gender']:checked").val();
                if (input1) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input1
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input1
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 2) {
                var input2 = $("input[name='married']:checked").val();
                if (input2) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input2
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input2
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 3) {
                var input3 = $("input[name='education']:checked").val();
                if (input3) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input3
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input3
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 4) {
                function hanyaAngka(str) {
                    return /^\d+$/.test(str);
                }
                var input4;
                var benar = false;
                var teksInfo = $(".pemberitahuan-soal-tes span")
                // alert(hanyaAngka('asw'))

                input4 = $("input[name='age']").val();
                input4 = input4.trim();
                if ((hanyaAngka(input4) === true) && !(input4.length < 0 || input4.length > 2)) {
                    benar = true
                } else if (input4.length < 0 || input4.length > 2) {
                    teksInfo.text("Minimal 1 dan Maksimal 2");
                } else if (hanyaAngka(input4) === false) {
                    $("input[type='text']").text('')
                    teksInfo.text("Berisi Angka Saja");
                }
            
                if (benar === true) {
                    hasil_tes['soal_'+currentPage] = input4
                    currentPage++;
                }

            } else if (currentPage === 5) {
                var input5 = $("input[name='business']:checked").val();
                if (input5) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input5
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input5
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 6) {
                var input6 = $("input[name='job']:checked").val();
                if (input6) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input6
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input6
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 7) {
                var input7 = $("input[name='time_place']:checked").val();
                if (input7) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input7
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input7
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 8) {
                var input8 = $("input[name='time_consume']:checked").val();
                if (input8) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input8
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input8
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 9) {
                var input9 = $("input[name='count_gadget']:checked").val();
                if (input9) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input9
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input9
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 10) {
                var input10 = $("input[name='time_social_media']:checked").val();
                if (input10) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input10
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input10
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 11) {
                var input11 = $("input[name='family']:checked").val();
                if (input11) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input11
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input11
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 12) {
                var input12 = $("input[name='treatment']:checked").val();
                if (input12) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input12
                    currentPage++;
                    // hasil_tes['soal_' + currentPage] = input12
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } else if (currentPage === 13) {
                var input13 = $("input[name='disruption']:checked").val();
                if (input13) {
                    // alert('Ada Hasil di Page ' + currentPage);
                    hasil_tes['soal_'+currentPage] = input13
                    // currentPage++;
                    // hasil_tes['soal_' + currentPage] = input13
                } else {
                    // alert('Tidak Ada Hasil');
                }
            } 

            $(".pagination li").removeClass("active");
            $("#loop .beranda").hide();

            var grandTotal = limitPerPage * currentPage;

            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#loop .beranda:eq(" + i + ")").show();
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        }
    });

    $("#previous-page").on("click", () => {
        var currentPage = $(".pagination li.active").index();
        if(currentPage === 1) {
            return false;
        } else {
            currentPage--;
            $(".pagination li").removeClass("active");
            $("#loop .beranda").hide();

            var grandTotal = limitPerPage * currentPage;

            for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $("#loop .beranda:eq(" + i + ")").show();
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        }
    });

    // --- [ Prediksi Model ] ---
    $("#prediksi_submit").click((e) => {
        e.preventDefault();

        // Atur Data
        var input_gender = $("input[name='gender']:checked").val();
        var input_married = $("input[name='married']:checked").val();
        var input_education = $("input[name='education']:checked").val();
        var input_age = $("input[name='age']").val();
        var input_business = $("input[name='business']:checked").val();
        var input_job = $("input[name='job']:checked").val();
        var input_time_place = $("input[name='time_place']:checked").val();
        var input_time_consume = $("input[name='time_consume']:checked").val();
        var input_count_gadget = $("input[name='count_gadget']:checked").val();
        var input_time_social_media = $("input[name='time_social_media']:checked").val();
        var input_family = $("input[name='family']:checked").val();
        var input_treatment = $("input[name='treatment']:checked").val();
        var input_disruption = $("input[name='disruption']:checked").val();

        // Fungsi untuk menampilkan hasil prediksi model
    function hasil_prediksi(jawaban_prediksi, deskripsi_saran_prediksi) {
        var str_hasil = '';

        // Hasil Jawaban Tes
        str_hasil += '<div class="hasil-jawaban-tes" id="hasil-jawaban-tes"> \
            <h5 class="uppercase font-bold text-[1.5rem] text-center mt-24 underline underline-offset-4"> ' +
                jawaban_prediksi
            + '</h5> \
            </div>'

        // Saran 
        str_hasil += '<div class="saran-hasil-jawaban-tes"> \
                <div class="judul-saran-jawaban-tes mt-20 text-center"> \
                    <h3 class="saran text-[1.1rem] hidden"> \
                        Saran: \
                    </h3> \
                </div> \
                \
                <div class="deskripsi-saran-jawaban-tes mt-12"> \
                    <p class="text-[1.2rem] text-center "> ' +
                        deskripsi_saran_prediksi
                    + '</p> \
                    <br><br> \
                    <p class="text-[1rem] text-center" id="teks-lanjut"> \
                        Konsultasikan dengan dokter apabila terdapat gejala yang lebih parah yaaa ^_^ \
                    </p> \
                </div> \
            </div>'
        
        $("#jawaban-tes").html(str_hasil);
        // Munculkan kata beranda
        $("#ke-beranda").removeClass("hidden")
    }

        // Panggil API + Timeout 0.5 detik (500ms)
        setTimeout(() => {
            try {
                $.ajax({
                    url : "/tes-indikasi",
                    type : "POST",
                    data : {"gender" : input_gender, 
                        "married" : input_married,
                        "education" : input_education,
                        "age" : input_age,
                        "business" : input_business,
                        "job" : input_job,
                        "time_place" : input_time_place,
                        "time_consume" : input_time_consume,
                        "count_gadget" : input_count_gadget,
                        "time_social_media" : input_time_social_media,
                        "family" : input_family,
                        "treatment" : input_treatment,
                        "disruption" : input_disruption,
                    },
                    success:(res) => {
                        // Ambil hasil prediksi dari API
                        res_jawaban_prediksi = res['jawaban_hasil']
                        res_deskripsi_saran_prediksi = res['deskripsi_saran']

                    // Tampilkan hasil prediksi ke halaman web
                    hasil_prediksi(res_jawaban_prediksi, res_deskripsi_saran_prediksi);
                    }
                });
            } catch (e) {
                // Jika gagal memanggil API, tampilkan error di console
                console.log("Prediksi Depresi Gagal !");
                console.log(e);
            }
        }, 500)
    })

})