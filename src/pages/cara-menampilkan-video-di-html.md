---
setup: |
  import Layout from '../layouts/PostLayout.astro'
title : Belajar HTML 11  Menampilkan Video di HTML
description : Lagi belajar cara bagaimana menampilkan video di web dengan html? kali ini saya akan bahas tuntas cara menampilkan video di web dengan html.
date : 2022-02-07
author : Moses Fahmi Pratama
img : https://blogger.googleusercontent.com/img/a/AVvXsEjIPfJ9-V6j5QOZ_jWFIHi1cHT2KfdrRKwk6pXm8EKoCvrh6D3_Nq5ZnYaKA5DzEuwROIAldSn6DtXh6EXtUnP8CvDcO6Dlo1xSV0tMnKnspViOqrvF3z3HX_LKjinSj95X_H2xMaRg_7x1OjNhBXUmQQ9BJSaPb1BsXpOYDs_4EpCEG2JFAkWcASPb=s16000
categories : 
  - HTML
---

Lagi cari cara bagaimana untuk menampilkan video di halaman web dengan html? kali ini saya akan bahas mengenai hal ini yaitu cara menampilkan video di web dengan html.

![menampilkan video di html](https://blogger.googleusercontent.com/img/a/AVvXsEjIPfJ9-V6j5QOZ_jWFIHi1cHT2KfdrRKwk6pXm8EKoCvrh6D3_Nq5ZnYaKA5DzEuwROIAldSn6DtXh6EXtUnP8CvDcO6Dlo1xSV0tMnKnspViOqrvF3z3HX_LKjinSj95X_H2xMaRg_7x1OjNhBXUmQQ9BJSaPb1BsXpOYDs_4EpCEG2JFAkWcASPb=s16000 "menampilkan video di html")

  

Kita tahu video merupakan salah satu elemen yang biasanya ada didalam sebuah website. Tak hanya sebagai elemen yang memperbagus tampilan web akan tetapi video digunakan untuk penyampaian informasi tambahan di halaman web.

Berikut ini cara bagaimana kita menampilkan video di web dengan html.

Cara menampilkan video di html
------------------------------

Untuk menampilkan video dengan html, kita dapat menggunakan tag <video\> yang ada di html5(versi terbaru html).

Tag ini dapat kita gunakan untuk menampilkan video di halaman web. Untuk cara penggunaannya lihat struktur kodenya dibawah ini.

![struktur kode tag video html](https://blogger.googleusercontent.com/img/a/AVvXsEhdaCEJ-jQrGxFiGkJvAE9QTFYyhwfK0JrpA7Is0NxB4Z3AOhxYD6Zw7QUmQDfip5GzE5fDB3uBtJRoCDgv1HTgrUObpwZIjIgbrtNMZG3HBktgHgG93VXyWNGNDlYDNyuy1dXNKrt5meQ9B6qENtIYpqL5Qeip1g0wG6xaubV_-EnnwxToFCkfUJ8z=s16000 "struktur kode tag video html")

Dalam penggunaan tag <video\> ini ada beberapa browser yang masih belum mendukung tag dari html 5 ini, apabila browser tersebut tidak support maka video yang akan ditampilkan di halaman web tersebut akibatnya tidak dapat tertampil.

Berikut contoh kode untuk penerapan dari penggunaan tag video dari html.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Menampilkan Video di HTML</title>
</head>
<body>
  <h1>Contoh Menampilkan Video di HTML</h1>
  <video controls>
    <source src="langit.mp4" type="video/mp4" />
  </video>
</body>
</html>
```

Hasil tampilan dibrowsernya:

![video tampil terlalu besar di halaman web](https://blogger.googleusercontent.com/img/a/AVvXsEjXj4P3j__JBtfF1MG5H9A_6-4VgRHKf3t-TkMJ-C3WgyfzibtMAMuVyxNoB4uiKdXJB1tilUIYkMjVMyYwjyNmdZ3Ef83p5moRT-y3Aau5UqudwxXsqPQl4d55aI3q43VTHSOEYnVL0t4fAjiF_iGbOD7nrHpegfOPWQzpS0d8pJHHuTFvVUcFIraX=s16000 "video tampil terlalu besar di halaman web")

  

Jika dilihat kok videonya tampil tapi terlalu besar ya? nah ini penyebabnya karena ukuran video yang ingin kita tampilkan di website tertalu besar ukuran tinggi dan lebarnya.

Untuk cara mengatasinya kita cukup menambahkan atribut width didalam tag video. Seperti dibawah ini.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Menampilkan Video di HTML</title>
    </head>
    <body>
      <h1>Contoh Menampilkan Video di HTML</h1>
      
      <!-- contoh atribut width dengan nilai 400 (400 = 400px) -->
      <video controls width="400">
        <source src="langit.mp4" type="video/mp4" />
      </video>
    </body>
    </html>
```

Dengan menambahkan atribut width="400" pada tag video. Maka akan tampil ukuran video 400px di halaman website yang kita buat, seperti berikut.

![video tampil dengan ukuran 400px di web](https://blogger.googleusercontent.com/img/a/AVvXsEguI6oxLqDq2CmQErpAC1b81rWlAbLmqQVh66D-aGGabre0qi5A2bNICSdSM-jsQrqDfX5B54owfI7WeA0vzC7ujR6FXzRP90xtMtUJkr-3q_uAh3kPnMORA75vj7XvIDp_PsKRbEB7ehoJOFI9-asXpW1Qa6NcgScuL8KtP7pr82GmlLwmTPicVIrv=s16000 "video tampil dengan ukuran 400px di web")

Beginilah hasilnya saat video dapat diputar dihalaman web.

Dari contoh diatas kita menampilkan video dengan file videonya berada satu folder dengan file html yang kita buat, seperti berikut.

![file video dan html berada satu folder](https://blogger.googleusercontent.com/img/a/AVvXsEjXmdr6MZtDgFNFTUG_SDKhrLhWZwQe0iX5FM_zFW6-0sQJAiZdDUM_o-s8tHiRwxRm_PjW71XUX2map7Q-bpGyvzvc_2vUvJAEEXlKuXhuNCwj3qdTsmEo9HhH46PVJX5jCFgyTUKieB6AKAn5BYy0y_BvDIQOgmVL0mN7Yp_WV7NewXDK-EUvktpG=w320-h215 "file video dan html berada satu folder")

Tapi bagaimana jika file videonya kita buat folder tersendiri kembali didalam folder video di html, maka penulisan kode pada tag video di atribut crcnya akan menjadi seperti berikut ini.

```html
    <video controls>
        <source src="video/langit.mp4" type="video/mp4" />
    </video>
```

Kode diatas kita menampilkan video dengan posisi videonya berada di satu folder dengan file html yang kita miliki, cara ini dapat dikatakan merupakan file video yang disimpan di internal komputer kita.

Apabila fil video tersebut telah kita upload ke situs web dan kita akan menggunakannya untuk tampil di web kita sendiri, maka kita tinggal masukan urlnya(alamat web video) ke atribut src di tag source, seperti berikut.

```html
    <video controls>
        <source src="https://res.cloudinary.com/dssknt9vd/video/upload/v1644199674/demo-video-tampil-di-web-dengan-html_dse5se.webm" type="video/mp4" />
    </video>
```

Format Video Yang di Dukung
---------------------------

Kemudian format video apa saja yang disupport atau didukung agar dapat tampil dihalaman web?

<div class="table">

| Format File | Tipe Media |
| --- | --- |
| mp4 | video/mp4 |
| webm | video/webm |
| ogg | video/ogg |

</div>

Jika suatu saat format file yang kamu miliki berbeda dari ketiga format file yang di support diatas maka kamu harus merubah terlebih dahulu formatnya baik itu ke .mp4, .webm atau .ogg.

Atribut Pada Tag Video
----------------------

Atribut-atribut dibawah ini, merupakan atribut yang biasanya digunakan pada tag video html.

<div class="table">

| Nama Atribut | Value/Nilai | Kegunaan/Fungsi |
| --- | --- | --- |
| loop | true/false | video dapat diputar berulang-ulang |
| controls | true/false | memunculkan menu kontrol video |
| muted | true/false | mematikan audio pada video |
| poster | path gambar | menampilkan cover gambar video |
| autoplay | true/false | otomatis putar video |
| playsinline | true/false | memutar video secara inline |
| width | Number/Angka | menentukan lebar video |
| height | Number/Angka | menentukan tinggi |

</div>

Berikut cara penggunaan atribut-atibut pada tag video diatas.

Apabila suatu atribut bernilai true, maka atribut tersebut dapat di tulis hanya dengan namanya saja.

```html
    <video controls>
        <source src="video/langit.mp4" type="video/mp4" />
    </video>
```

atau

```html
    <video controls="true">
        <source src="video/langit.mp4" type="video/mp4" />
    </video>
```

Tapi kalau bernilai false, atributnya boleh ditulis dengan nilai false atau tidak perlu ditulis.

```html
    <video muted="false">
        <source src="video/langit.mp4" type="video/mp4" />
    </video>
```

atau

```html
    <video>
        <source src="video/langit.mp4" type="video/mp4" />
    </video>
```

Cara embed video Youtube di HTML
--------------------------------

Cara menampilkan video dari Youtube ke halaman web dapat kita lakukan dengan cara yang mudah, biasanya langkah yang kita lakukan adalah dengan cara embed video youtube dengan html.

apa itu embed?

<div class="quotes">

> Arti kata embed dalam Kamus Bahasa Inggris – Indonesia jika diartikan ialah kkt. (embedded) 1. menanamkan 2. melekatkan. 3. menyimpan.

</div>

Berarti dalam didalam web kita dapat menanamkan atau melekatkan sebuah link untuk menampilkan video dengan memasukan url sumber dari video yang akan kita tampilkan.

Bagaimana cara untuk embed atau menampilkan video dari youtube di html?

Kita tinggal menggunakan tag <iframe\> saja dengan atribut src untuk memanggil file, width untuk mengatur lebar ukuran video dan height untuk tinggi videonya.

Contoh:

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Menampilkan Video di HTML</title>
    </head>
    <body>
      <h1>Contoh Menampilkan Video dari youtube di HTML</h1>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ljzg8vrVlc8" title="YouTube video player"></iframe>
    </body>
    </html>
```

Coba kita lihat pada atribut src-nya yaitu di bagian /embed/, ini merupakan url video untuk embed videonya yang kemudian mengarahkan webnya ke id unik yang ada di setelah ur /embed/ yaitu ljzg8vrVlc8.

Id unik merupakan id video yang akan di temukan oleh browser mengenai file video yang tersimpan di server youtube.

Berikut hasil yang ditampilkan dari contoh kode diatas:

![contoh video tampil hasil embed dari youtube](https://blogger.googleusercontent.com/img/a/AVvXsEjryTn0x5fYR32sc5zoijb1Zvzg71peAnkVFYd5fi-QKzhzdaanKrkXgy--GEZEI7hYljeLqrgI2XCxRuk1DqfyrPutmT1oqBHmAOHS-RlogX1RBxm067V3p9ooxnk8SJdHDu68fqIQB7sur1V0n9wc4Af6-AC_Y31t3Z9PRgj3QRzRyIX_UkBm1Qfw=w400-h326 "contoh video tampil hasil embed dari youtube")

Lalu bagaimana cara mendapatkan link embed video youtube?

1\. kita tinggal kunjungi platform youtube baik itu di web atau via aplikasi.

2\. kemudian cari video yang akan kita gunakan untuk ditampilkan di halaman web

3\. klik tombol share(bagikan) dibawah video dan pilih embed/sematkan, maka secara otomatis youtube akan membuatkan kita link maupun kode html untuk embed videonya.

Demikian penjelasan saya kali ini semoga bermanfaat bagi teman-teman yang sedang belajar html dasar. Terima kasih.

> 📖 Temukan artikel belajar html dasar lainnya di [Tutorial Belajar Lengkap HTML](https://www.staykoding.com/p/tutorial-lengkap-belajar-html.html)