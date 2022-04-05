---
setup: |
  import Layout from '../layouts/PostLayout.astro'
title : Balajar HTML part 2 mengenal tag, atribut dan elemen dalam html
description : Berikut penjelasan apa itu tag, atribut dan elemen dalam html. Semoga dapat membantu kamu untuk memahaminya.
date : 2021-04-20
author : Moses Fahmi Pratama
img : https://1.bp.blogspot.com/-XyLiO5jTNz0/YH3cQubwfgI/AAAAAAAACHM/JG6rQ0y8wFsus4JrtUfiHBd2c30wl4O0gCNcBGAsYHQ/s16000/mengenal-apa-tag-atribut-dan-elemen-html.jpg
categories : 
  - HTML
---

Sebelumnya kita telah belajar mengenai [pengertian html dan struktur dasar dari html](https://www.staykoding.com/2022/01/pengertian-html-dan-struktur-dasarnya.html). Sekarang yang akan kita bahas adalah mengenal tag, atribut dan elemen dalam html.

Apa sebenarnya tag itu? Lalu apa itu atribut? Serta ada lagi yang dinamakan elemen itu apa dalam html? Oleh karena itu berikut akan saya jelaskan ketiga pengertian dari tag, atribut dan elemen.

[![mengenal apa itu tag, atribut dan elemen html](https://1.bp.blogspot.com/-XyLiO5jTNz0/YH3cQubwfgI/AAAAAAAACHM/JG6rQ0y8wFsus4JrtUfiHBd2c30wl4O0gCNcBGAsYHQ/s16000/mengenal-apa-tag-atribut-dan-elemen-html.jpg "mengenal apa itu tag, atribut dan elemen html")](https://1.bp.blogspot.com/-XyLiO5jTNz0/YH3cQubwfgI/AAAAAAAACHM/JG6rQ0y8wFsus4JrtUfiHBd2c30wl4O0gCNcBGAsYHQ/s1280/mengenal-apa-tag-atribut-dan-elemen-html.jpg)

  

apa itu tag html?
-----------------

Tag dalam html merupakan sebuah kode format yang gunanya memformat setiap objek yang ada didalam dokumen html istilah lainnya memberikan markup pada objek tersebut.

Untuk lebih jelasnya berikut gambaran mengenai penjelasan dengan contoh tag dari html:

misalkan saya ingin memformat tulisan dalam artian memberikan markup supaya tulisan tersebut terlihat tebal, istilahnya saya ingin menebalkan tulisan tersebut.

Nah didalam html ada sebuah tag yang dapat digunakan untuk menebalkan tulisan yaitu tag &lt;b&gt;&lt;/b&gt;.

Untuk cara penggunaannya adalah dengan meletakan tulisan yang kita buat itu berada didalam tag &lt;b&gt;&lt;/b&gt;. Berikut contohnya

```html
<b>Tulisan ini akan menjadi tebal</b>
```

maka apabila browser membaca format tag html diatas maka tulisannya akan menjadi tebal.

Selanjutnya mengenai atribut.

Apa itu atribut ?
-----------------

Atribut dalam html diibaratkan **identitas** dari tag html tersebut. Jika diibaratkan identitas istilahnya adalah atribut merupakan properti yang ada didalam sebuah tag html.

Untuk lebih jelasnya saya akan jelaskan kembali melalui contoh sebagai berikut:

Ok disini saya mau membuat sebuah paragraf dengan menggunakan tag html yaitu tag **&lt;p&gt;&lt;/p&gt;**.

Didalam tag &lt;p&gt;&lt;/p&gt; tersebut saya buat paragraf dengan kalimat demikian:

```html
<p id="pengertian">
Belajar html merupakan suatu bentuk kegiatan 
yang penting dilakukan oleh para pemula yang ingin 
terjun belajar didunia pemrograman web
</p>
```

Nah dari contoh diatas yang dimaksud dengan atribut pada tag &lt;p&gt;&lt;/p&gt; adalah **id=""** dalam tag &lt;p&gt;&lt;/p&gt; tersebut. 

Atribut id pada tag &lt;p&gt; diatas berfungsi untuk memberikan identitas pada tag &lt;p&gt;&lt;/p&gt; yang telah kita buat sebelumnya.

Lalu kegunaan dari atribut itu apa? Nah kegunaan dari atribut dalam tag html adalah untuk menyimpan informasi yang telah terkandung didalam tag html tersebut.

Perlu sobat ketahui juga dalam 1 tag html dapat memiliki lebih dari 1 atribut yang digunakan. Lalu kegunaannya seperti apa? Nanti akan saya jelaskan pada artikel selanjutnya.

Kemudian mengenai apa itu elemen dalam html.

Apa itu elemen html?
--------------------

Dapat dikatakan elemen html adalah sebuah kode dari html yang sudah ada atau tersedia. Pada setiap kode html tersebut memiliki fungsi atau kegunaannya masing-masing.

Elemen dari html tersebut mempunyai yang namanya tag pembuka dan penutup. Contohnya adalah tag &lt;b&gt; sebagai pembuka dan tag &lt;/b&gt; sebagai penutup.

Jika dilihat yang jadi pembeda antara tag pembuka dan tag penutup adalah pada tag penutup yang mempunyai karakter slash didalamnya (berbentuk garis miring).

Apabila kita pahami juga pengertian dari elemen html dan tag html ini hampir sama. Lalu apa bedanya?

Bedanya antara elemen html dan tag html adalah tag html itu informasi yang berisikan teks lebih tepatnya identifikasi teks yang ada dalam situs yang menentukan apakah Teks tersebut diformat tebal, bergaris bawah, miring atau yang lainnya.

Sedangkan elemen html adalah unsur yang ada didalam tag html tersebut baik itu teks maupun konten yang terletak didalam tag html tersebut. Artinya elemen ini diapit oleh tag pembuka dan tag penutup html.

Dapat diambil kesimpulan bahwa tag merupakan penanda atau formatting daripada elemen yang ada didalam tag html tersebut. Sementara itu atribut merupakan modifier atau identitas yang dimiliki tag html yang menentukan sifat atau perilaku dari elemen didalam tag html.

Sekian pembahasan kita kali ini ya staykoder semoga dapat dipahami dan dimengerti. Jangan lupa tetap selalu belajar.

> 📖 Temukan artikel belajar html dasar lainnya di [Tutorial Belajar Lengkap HTML](https://www.staykoding.com/p/tutorial-lengkap-belajar-html.html)