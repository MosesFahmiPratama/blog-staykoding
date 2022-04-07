---
setup: |
  import Layout from '../layouts/PostLayout.astro'
title : StayKoding migrasi dari blogger ke astro
description : pindah dari blogger ke astro setelah lama terjun didunia blogging.
date : 2022-04-04
author : Moses Fahmi Pratama
img : https://drive.google.com/uc?id=1pNkB7u1qgskWkP6dPfUFHHJMQdoL6bd1
categories : 
  - Astro
featured : true
---

Setelah hampir 2 tahun saya menjalankan aktivitas blogging, akhirnya tepat ditanggal 04 April 2022 ini.

Blog StayKoding pindah platform dari sebelumnya yang menggunakan blogger saya sekarang migrasi ke Astro.

![staykoding migrasi dari blogger ke astro](https://drive.google.com/uc?id=1pNkB7u1qgskWkP6dPfUFHHJMQdoL6bd1)

Kemudian yang menjadi pertanyaan apa itu Astro, apakah itu sebuah CMS yang juga sama seperti blogger?

Atau mungkin lebih daripada sekedar CMS (Content Management System), agar lebih jelas berikut penjelasannya dibawah ini.

## Apa itu Astro?
Astro merupakan sebuah kerangka kerja yang mempunyai kemampuan dalam membangun sebuah situs web statis, yang secara fungsi atau kegunaan mengembangkan situs web tanpa mengandalkan sistem daripada si database.

Ya kita tahu ada banyak situs didunia ini yang masih mengandalkan database dalam penyajian konten pada blognya.

Yang familiar sering kita dengar ialah seperti Wordpress, blogger dan lain sebagainya.

Wordpress dan blogger selama ini saya ketahui memang menggunakan database untuk menyimpan setiap artikel yang kita buat dan posting pada saat menggunakan kedua platform CMS ini.

Berbeda dengan Wordpress dan blogger, Astro tidak menyimpan setiap postingan yang kita buat didalam database akan tetapi secara langsung menyajikan konten yang kita buat kepada user.

Bingung? jadi begini di Astro konten yang kita buat tersebut berbentuk sebuah file yang dinamakan dengan file markdown.

Dimana file markdown ini sendiri dikonversi oleh Astro menjadi sebuah halaman web html yang secara langsung dapat dibaca oleh browser dan ditampilkan kepada pembaca atau user.

Dapa ditarik kesimpulan itu artinya kita menulis setiap postingan pada blog kita menggunakan sebuah file yang dinamakan markdown dan kemudian Astro yang bertugas mengconvert file markdown tersebut menjadi file html untuk dibaca oleh browser.

jadi singkatnya seperti itu.

## Alasan pindah dari Blogger ke Astro

![tahap-migrasi-staykoding-dari-blogger-ke-astro](https://i.ibb.co/4pkJY3T/migrasi-staykoding-dari-blogger-ke-astro.webp)

Ada banyak pertimbangan yang telah saya pikirkan sebelumnya, hal ini tentu saja berkaitan dengan persiapan dan kelancaran proses daripada migrasi blog ini.

Tapi berkaitan dengan hal itu tentu saja ada banyak faktor sebenarnya yang menjadi alasan saya pindah platform blogging.

Berikut beberapa alasan perpindahan yang melatar belakangi keputusan yang telah saya ambil.

Hal pertama yang akan saya bahas mengenai

### 1. Keleluasaan mengedit

Keleluasaan dalam pengeditan saya dapat rasakan pada saat mencoba mengembangkan sebuah situs web menggunakan framework Astro.

Di blogger memang kita bisa melakukan pengeditan baik itu pada artikelnya ataupun pada templat web yang digunakan.

Tetapi saya merasa masih kesulitan dalam mengedit templat di blogger karena sistem kodenya yang tak hanya html saja, tapi bercampur juga dengan XML.

ya templat blogger memang dibuat dengan XML.

Sementara di astro kita dapat membuat sistem templat yang lebih kompleks dan dapat dimaintenance karena adanya templat yang dibuat tersebut berbasis komponen.

### 2. Offline mode development

Ini salah satu yang saya suka saat mengembangkan sebuah web yaitu kita bisa secara offline membuat postingan blog tanpa harus terhubung terlebih dahulu ke jaringan internet.

Dan tentu saja saat koneksi internet tidak ada kita masih dapat membuat postingan, lalu saat akan mempublis artikel yang dibuat, tinggal di push saja ke github dengan menggunakan git.

### 3. Mendukung SEO
Berkaitan dengan SEO, ini merupakan keharusan yang harus saya pertimbangkan sebelum mengambil keputusan untuk beralih pada sebuah platform.

Apa gunanya jika ketika menggunakan platform yang akan digunakan, alat yang akan dipakai itu sendiri tidak mendukung sesuatu yang kita inginkan.

### 4. fast load website

Tak dipungkiri saya memang merasakan hal ini ketika mengembangkan situs blog ini dengan Astro.

Itu karena waktu yang dibutuhkan untuk loading website menjadi lebih cepat, mengapa demikian? 

Di astro ada yang dinamakan dengan hidrasi parsial, yaitu sebuah konsep dimana sebuah halaman web tidak menggunakan bahasa pemrograman javascript didalamnya.

Tentu saja kita masih menggunakan javascript hanya saja astro tidak secara langsung merender tiap-tiap kode javascript yang ada didalamnya, akan tetapi melalui tahap hidrasi terlebih dahulu.

Tahap ini dapat diartikan ialah kapan waktu yang tepat untuk browser meload fungsi-fungsi dari kode javascript.

Tentu saja untuk menentukan hal tersebut kita sendiri sebagai pengembang yang memilih apakah kode javascript akan dirender saat load web, atau ketika kita menggulir setiap halaman baru javascript dijalankan. 

Itu artinya kita dapat menunda untuk merender terlebih dahulu kode-kode dari si javascript itu sendiri.

Dengan begitu proses daripada sebuah browser dalam menampilkan tampilan website akan terasa lebih cepat karena pertama kali hanya meload kode html dan css saja.

Kira-kira beginilah tahap-tahap atau proses yang saya lewati saat akan beralih ke Astro si pembuat situs web statis.

Lihat gambar berikut.
![tahap-migrasi-staykoding-dari-blogger-ke-astro](https://i.ibb.co/x5Z89Fg/tahap-migrasi-staykoding-dari-blogger-ke-astro.webp)

Cukup sampai disini terlebih dahulu story saya saat beralih sistem blogging dari blogger ke astro.

## Kesimpulan

Blogger dan astro secara garis besar memang berbeda baik itu dari segi sistem maupun proses untuk membuild sebuah website dan tentunya terdapat kelebihan dan kekurangannya masing-masing.

Untuk postingan kali ini saya cukupkan sampai disini, mengenai pembahasan tentang Astro lainnya akan saya buat artikelnya di lain waktu.