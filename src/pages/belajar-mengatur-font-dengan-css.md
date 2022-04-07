---
setup: |
  import Layout from '../layouts/PostLayout.astro'
title : Belajar css 11 mengatur font dengan css
description : Di pembahasan artikel ini saya mencoba mengulas tentang bagaimana mengatur font dengan css. Properti-properti apa saja apa yang dipakai untuk font css
date : 2022-03-10
author : Moses Fahmi Pratama
img : https://blogger.googleusercontent.com/img/a/AVvXsEijHd9I2Gfie7wlQMnrB5eYUZQZMpsQmKW34eA-aNsJLGT5lYQmWEtYFeIM86QpoKNTuuSFUH0Ty3UuQ5voR6WQLORv_pJ7t2CZHfWdqoeAvP_IgcYn5MdXPTpqIhZlgOLvyDXahQUrXwqyhUtViBoAGAmgzk2kVRUZe_D2bTYfFdEVS-PWIkKZ59CB=s16000
categories : 
  - CSS
---

![belajar mengatur font dengan css](https://blogger.googleusercontent.com/img/a/AVvXsEijHd9I2Gfie7wlQMnrB5eYUZQZMpsQmKW34eA-aNsJLGT5lYQmWEtYFeIM86QpoKNTuuSFUH0Ty3UuQ5voR6WQLORv_pJ7t2CZHfWdqoeAvP_IgcYn5MdXPTpqIhZlgOLvyDXahQUrXwqyhUtViBoAGAmgzk2kVRUZe_D2bTYfFdEVS-PWIkKZ59CB=s16000 "belajar mengatur font dengan css")

Halo sobat staykoding, di pembahasan kali ini saya mau kita belajar untuk mengenal apa-apa saja properti font yang ada di css.

Tak hanya itu, kita juga akan belajar bagaimana menggunakan properti font css, cara implementasinya hingga ke prakteknya langsung.

Apa itu font?
-------------

Font mendefinisikan sebuah gaya penulisan dari sebuah tulisan/teks, yang dimana tulisan tersebut mempunyai banyak ragam jenisnya.

Font merupakan sebutan lain daripada istilah gaya penulisan atau jika diartikan dengan bahasa lainnya ialah rupa huruf yang memiliki ukuran, berat maupun gaya disetiap hurufnya yang terbentuk.

Didunia website font sering dikaitkan dengan istilah tipografi(dalam bahasa inggris ialah _typography_) tulisan, karena memang font dan tipografi saling berhubungan satu sama lain.

hanya saja tipografi memiliki istilah seni daripada bentuk penulisan yang artinya sedikit berbeda dengan istilah yang kita pelajari saat ini mengenai font.

Kalau sudah memahami apa itu font, selanjutnya bagaimana cara kita mengatur font tulisan menggunakan css? Berikut penjelasannya.

Mengatur font dengan css
------------------------

Pada sebuah konten dihalaman website yang berbentuk tulisan, kita dapat mengatur setiap bentuk tulisan atau hurufnya dengan menggunakan properti di css yang dapat mengatur font/teks.

Poperti-properti css yang dimaksud diantaranya font-family, font-size, font-style, font-weight dan juga font-variant.

Berikut pembahasan dari kelima properti font css tersebut.

### 1\. font family

Properti css font-family merupakan properti yang mengatur jenis sebuah huruf/tulisan berdasarkan nama font yang digunakan.

Penggunaan font-family banyak digunakan di hampir semua bagian konten dari sebuah website entah itu di header, navigasi, judul, artikel dan diseluruh elemen web lainnya.

Terdapat 2 tipe/jenis penamaan dari font family di css:

* generic name(nama generik) merupakan pengelompokan daripada beberapa bentuk font, contoh sans-serif, monospace dll.
* Family name(nama family) adalah merujuk pada penamaan secara spesifik daripada nama font family yang digunakan, contoh lucida console, verdana dll.

Berikut adalah tabel nama font umum(font generic) yang paling umum dengan beberapa nama font family yang ada di css.

| generic name | font family |
| --- | --- |
| serif | "Times New Roman'", Georgia, Lucida Bright, Lucida Fax, Palatino, "Palatino Linotype", Palladio, "URW Palladio" |
| sans-serif | Arial, Verdana, "Open Sans", "Fira Sans", "Lucida Sans", "Lucida Sans Unicode", "Trebuchet MS", "Liberation Sans", "Nimbus Sans L" |
| monospace | "Courier New", "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono"', Monaco, "Lucida Console" |
| cursive | "Brush Script MT", "Brush Script Std", "Lucida Calligraphy", "Lucida Handwriting", "Apple Chancery" |
| fantasy | Papyrus, Herculanum, Party LET Curlz MT, Harrington |

> Catatan! Disarankan untuk mengutip nama font family dengan beberapa kata, misalnya "Lucida Console" (tanda kutip ganda), 'Liberation Mono (tanda kutip tunggal).

Properti CSS font-family menentukan daftar keluarga font yang diprioritaskan.

Setiap nama font family atau nama generik harus dipisahkan dengan tanda koma ",".

Memiliki beberapa nama font family yang ditentukan memungkinkan browser memilih font yang ada disebelah nama font sebelumnya yang dapat diterima bila perlu.

Browser kemudian akan memilih font untuk digunakan dari Iist yang ditentukan mulai dari yang pertama hingga yang terakhir ditentukan.

Jika browser tidak mendukung font pertama, ia akan mencoba font kedua dan seterusnya.

Berikut contoh penggunaan daripada properti font-family.

```css
    p {
      font-family: "times new roman", serif;
    }
```
Pengaplikasian font-family

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>font family css</title>
    
        <style>
        p {
            font-family: "times new roman", serif;
        }
        </style>
    </head>
    <body>
        <p>Saya suka belajar di StayKoding</p>
    </body>
    </html>
```
Hasilnya

[![hasil menggunakan properti font-family css](https://blogger.googleusercontent.com/img/a/AVvXsEjjko5zN2PytyM_IlaMU-aacNjcIgtV_tICVifL_t4T9GgIf9ZDQyMSdZAJUZLhjipNXo4WTJ_P7nGyOpkU1cGT4gg3H1A8jQC5M5Q4mlwOFqBCcv8prCk1-cRvl4xe8l9a0hZXs4jiuRiEhbNzMEaMQzfPbL6IFWOv5kRq2lheLXetCZX5JBaac_t5=s16000 "hasil menggunakan properti font-family css")](https://blogger.googleusercontent.com/img/a/AVvXsEjjko5zN2PytyM_IlaMU-aacNjcIgtV_tICVifL_t4T9GgIf9ZDQyMSdZAJUZLhjipNXo4WTJ_P7nGyOpkU1cGT4gg3H1A8jQC5M5Q4mlwOFqBCcv8prCk1-cRvl4xe8l9a0hZXs4jiuRiEhbNzMEaMQzfPbL6IFWOv5kRq2lheLXetCZX5JBaac_t5=s502)

  

  

### 2\. font size

Properti font-size pada css digunakan untuk mengatur ukuran sebuah font yang digunakan oleh sebuah elemen.

Niai yang digunakan oleh properti font-size diantaranya.

* xx-small, x-small, small, medium, large, x-large, xx-large merupakan ukuran absolute properti font-size.
* smaller, larger merupakan keyword dari ukuran relatif font akan lebih kecil atau lebih besar dari elemen induknya.
* <length\> terdiri dari px dan em merupakan nilai yang paling umun dan biasanya sering digunakan untuk ukuran font.
* <percent\> merupakan nilai relatif terhadap ukuran font dari elemen induk.

Contoh penggunaan properti font-size untuk elemen p berikut.

    
    p {
      font-size: medium;
    }

Pengaplikasian font-size css

copy

    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>font size css</title>
    
        <style>
        p {
            font-size: medium;
        }
        </style>
    </head>
    <body>
        <p>Saya menggunakan properti font-size dengan nilai medium</p>
    </body>
    </html>

Hasilnya

[![hasil menggunakan properti font-size css](https://blogger.googleusercontent.com/img/a/AVvXsEjDHf0JjxG2UhwrM9vnPHq-ZLuArPvHLQk4nQaAzB9F2s9aURXYGqMpUWpPBd53yW8pJpLy5g8S2cDiEABEh3Pn40KYGOhLaFlx3WQbn4_qBONvjuk6nF0oHgWqWH0ThwPsgNQAGzVv2MpJZt1SKer14SMxda5aAWxw5wG3B6TUzAOQoBaMeaBQn416=s16000 "hasil menggunakan properti font-size css")](https://blogger.googleusercontent.com/img/a/AVvXsEjDHf0JjxG2UhwrM9vnPHq-ZLuArPvHLQk4nQaAzB9F2s9aURXYGqMpUWpPBd53yW8pJpLy5g8S2cDiEABEh3Pn40KYGOhLaFlx3WQbn4_qBONvjuk6nF0oHgWqWH0ThwPsgNQAGzVv2MpJZt1SKer14SMxda5aAWxw5wG3B6TUzAOQoBaMeaBQn416=s504)

  

  

#### Mengatur ukuran font menggunakan pixels

Nilai px atau pixel adalah pilihan yang baik dan direkomendasikan terutama. jika kita membutuhkan akurasi piksel.

Perlu untuk diketahui nilai px bersifat statis.

Contoh penggunaan nilai px pada properti font-size.

    
    p {
      font-size: 30px;
    }

#### Mengatur ukuran font menggunakan em

Pengaturan ukuran font dengan nilai em sangat dianjurkan. Hal ini memungkinkan pengguna untuk mengubah ukuran teks dalam pengaturan browser.

Nilai em bersifat dinamis. Ini menggunakan ukuran font default pada browser yaitu 16px. Jadi 1em = 16px.

Untuk mengonversi px menjadi em, gunakan rumus ini: em = piksel/16.

Berikut contoh penggunaan ukuran em untuk properti font-size.

    
    #p1 {
       font-size: 1em;
    }
    #p2 {
       font-size: 2em;
    }

### 3\. font style

Properti CSS font-style digunakan untuk mengatur bagaimana font harus ditata/ditampilkan.

Nilai yang biasanya digunakan untuk font-style ialah.

* normal : mengatur font ke gaya normalnya.
* italic : membuat font menjadi miring
* oblique : memilih gaya font yang diklasifikasikan menjadi miring

Contoh bagaimana menggunakan properti font-style dengan 3 nilai diatas

    
    #p1 {
        font-style: normal;
    }
    #p2 {
        font-style: italic;
    }
    #p3 {
        font-style: oblique;
    }

Pengaplikasian font-style css

copy

    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>font style css</title>
    
        <style>
        #p1 {
            font-style: normal;
        }
        #p2 {
            font-style: italic;
        }
        #p3 {
            font-style: oblique;
        }
        </style>
    </head>
    <body>
        <p id="p1">Saya menggunakan properti font-style dengan nilai normal</p>
        <p id="p2">Saya menggunakan properti font-style dengan nilai italic</p>
        <p id="p3">Saya menggunakan properti font-style dengan nilai oblique</p>
    </body>
    </html>

Hasilnya

[![hasil menggunakan properti font-style css](https://blogger.googleusercontent.com/img/a/AVvXsEjVsLtLQCnjl-dmNZrCP0-qfRmwmQwaq0hZ-DsGCLCbZDpsfLqmgxgHFoItKgQ9_E--8txri4_Su8Saht3MQvLHgfJTM_kVi-cl54VctWgJa0l7lsQRs136lmJW7eYwM4JqH6Gr_M1OpdbX4sF1ll87Km7xmbtG15pU8wPu3-uxr_3rcjXG1MeZ3xqP=s16000 "hasil menggunakan properti font-style css")](https://blogger.googleusercontent.com/img/a/AVvXsEjVsLtLQCnjl-dmNZrCP0-qfRmwmQwaq0hZ-DsGCLCbZDpsfLqmgxgHFoItKgQ9_E--8txri4_Su8Saht3MQvLHgfJTM_kVi-cl54VctWgJa0l7lsQRs136lmJW7eYwM4JqH6Gr_M1OpdbX4sF1ll87Km7xmbtG15pU8wPu3-uxr_3rcjXG1MeZ3xqP=s502)

  

  

### 4\. font weight

Properti CSS font-weight digunakan untuk mengatur bobot atau ketebalan font.

Berikut nilai yang dipakai untuk properti font-weight ini.

* <number\> : nilai yang menggunakan angka dari 1 sampai 1000 untuk ketebalan font.
* normal : mengatur sebuah font ke ketebalan yang normal yaitu sama dengan nilai number 400.
* bold : menebalkan font, jika dikonversi ke number maka bold = 700.
* lighter : mengatur bobot font menjadi lebih ringan dari bobot font elemen induknya yang tersedia.
* bolder : menetapkan bobot font menjadi lebih berat daripada bobot font elemen induknya yang tersedia.

Agar lebih paham coba pahami contoh penggunaan properti font-weight berikut.

    
    #p1 {
        font-weight: normal;
    }
    #p2 {
        font-weight: bold;
    }
    #p3 {
        font-weight: lighter;
    }
    #p4 {
        font-weight: bolder;
    }
    #p5 {
        font-weight: 1000;
    }

Pengaplikasian font-weight css

copy

    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>font weight css</title>
    
        <style>
        #p1 {
            font-weight: normal;
        }
        #p2 {
            font-weight: bold;
        }
        #p3 {
            font-weight: lighter;
        }
        #p4 {
            font-weight: bolder;
        }
        #p5 {
            font-weight: 1000;
        }
        </style>
    </head>
    <body>
        <p id="p1">Saya menggunakan properti font-weight dengan nilai normal</p>
        <p id="p2">Saya menggunakan properti font-weight dengan nilai bold</p>
        <p id="p3">Saya menggunakan properti font-weight dengan nilai lighter</p>
        <p id="p4">Saya menggunakan properti font-weight dengan nilai bolder</p>
        <p id="p5">Saya menggunakan properti font-weight dengan nilai 1000</p>
    </body>
    </html>

Hasilnya

[![hasil menggunakan properti font-weight css](https://blogger.googleusercontent.com/img/a/AVvXsEiL7Ld3d3a2enTEI8S6NGziiEr2pOOEDQPOEOF0onRwiBul9ghAxJk3x5jmzxkz5M96Rgwqb9b2OIC5PyLx5Wuk3UQezqOPbd8wXwSUFh0mF0MmcbLUW2CsoFGcOpd70uq_I3aYWAjyeI0AZyNpZ8slqGW5FD-UIvO7uBSvuRHH7m7d3pm-TYT8MF2L=s16000 "hasil menggunakan properti font-weight css")](https://blogger.googleusercontent.com/img/a/AVvXsEiL7Ld3d3a2enTEI8S6NGziiEr2pOOEDQPOEOF0onRwiBul9ghAxJk3x5jmzxkz5M96Rgwqb9b2OIC5PyLx5Wuk3UQezqOPbd8wXwSUFh0mF0MmcbLUW2CsoFGcOpd70uq_I3aYWAjyeI0AZyNpZ8slqGW5FD-UIvO7uBSvuRHH7m7d3pm-TYT8MF2L=s500)

  

  

### 5\. font variant

Properti CSS font-variant digunakan untuk menyetel apakah teks harus ditampilkan secara normal atau dalam huruf kecil.

Ada 2 nilai yang digunakan oleh properti ini.

* normal : sama seperti nilai lainnya font yang tampil tetap normal.
* small-caps : huruf kecil diubah menjadi huruf besar; huruf besar yang dikonversi muncul dalam ukuran font yang lebih kecil.

Bingung untuk penggunaan nilainya? Lihat contoh berikut untuk font-variant.

    
    #p1 {
        font-variant: normal;
    }
    #p2 {
        font-variant: small-caps;
    }

Pengaplikasian font-variant css

copy

    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>font variant css</title>
    
        <style>
        #p1 {
            font-variant: normal;
        }
        #p2 {
            font-variant: small-caps;
        }
        </style>
    </head>
    <body>
        <p id="p1">Saya menggunakan properti font-variant dengan nilai normal</p>
        <p id="p2">Saya Menggunakan Properti Font-variant Dengan Nilai small-caps</p>
    </body>
    </html>

Hasilnya

[![hasil menggunakan properti font-variant css](https://blogger.googleusercontent.com/img/a/AVvXsEhq-z3iM1jmG-UT6nKOUwWBcip9sW4OV_0r9GNhXkBrJS4wneZ-Z53KqW5liQrdRkgDdIkHobeXPeZ27TP6q0PXwZPFSWJ1LDSzTbrzcz_jg5Y-4AsvVOCxHam4mGIVyHss_F840El9egYCzHHZP1NwBMZPi7O9ZLpq4SBTvpFVIq6yr40GguTKn2CA=s16000 "hasil menggunakan properti font-variant css")](https://blogger.googleusercontent.com/img/a/AVvXsEhq-z3iM1jmG-UT6nKOUwWBcip9sW4OV_0r9GNhXkBrJS4wneZ-Z53KqW5liQrdRkgDdIkHobeXPeZ27TP6q0PXwZPFSWJ1LDSzTbrzcz_jg5Y-4AsvVOCxHam4mGIVyHss_F840El9egYCzHHZP1NwBMZPi7O9ZLpq4SBTvpFVIq6yr40GguTKn2CA=s502)

  

  

### Shorthand properti font css

Dari kelima properti untuk mengatur font css diatas yang telah saya jelaskan. Sebenarnya ada 1 properti untuk font yang sangat singkat tanpa perlu menuliskan properti font cssnya satu persatu. Oke, misalkan kita mempunyai bentuk styling font seperti berikut.

    
    p {
      font-style: oblique;
      font-variant: small-caps;
      font-weight: bolder;
      font-size: 3em;
      font-family: "times new roman", sans-serif;
    }

Contoh styling font css diatas terlihat kita harus menuliskan banyak sekaligus properti untuk mengatur font css-nya. Daripada menuliskan banyak properti font cssnya lebih baik menggunakan cara berikut.

Perlu kamu tahu untuk mengatur font css tanpa memakai banyak properti font, kita dapat langsung menyingkat penulisan kode kita dengan hanya menggunakan properti font saja.

Berikut sintax-nya:

    
    p {
      font: font-style font-variant font-weight font-size/line-height font-family;
    }

Berikut contoh sintax kodenya dengan menggunakan properti font.

    
    p {
      font: oblique small-caps bolder 3em "times new roman", sans-serif;
    }

Pengaplikasian properti shorthand font css

copy

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>shorthand font css</title>
    
        <style>
        p {
            font: oblique small-caps bolder 3em "times new roman", sans-serif;
        }
        </style>
    </head>
    <body>
        <p>Saya menggunakan properti font dengan banyak nilai</p>
    </body>
    </html>

Hasilnya

[![hasil menggunakan shorthand properti font css](https://blogger.googleusercontent.com/img/a/AVvXsEis1wwChGF7mchUR2bJqbgwrEfvj0SCJfi0rECl1NKXlflr7dIGm6qEPqkAnLyeJE8s0kga-JcP51x4XV5w2JVsYWUQlzDfXKkNjMSNCakqg0UggYUlq9SkYE4d06k_2BzS5H4PJO84QgppeiN6aEZOxRGYd-RdsfbEhSOW-BlhJyeJaxS9gDwzJXz3=s16000 "hasil menggunakan shorthand properti font css")](https://blogger.googleusercontent.com/img/a/AVvXsEis1wwChGF7mchUR2bJqbgwrEfvj0SCJfi0rECl1NKXlflr7dIGm6qEPqkAnLyeJE8s0kga-JcP51x4XV5w2JVsYWUQlzDfXKkNjMSNCakqg0UggYUlq9SkYE4d06k_2BzS5H4PJO84QgppeiN6aEZOxRGYd-RdsfbEhSOW-BlhJyeJaxS9gDwzJXz3=s502)

  

Cukup sampai disini dahulu pembelajaran  kita mengenai properti font di css, semoga membantu bagi kamu yang sedang belajar css untuk pemrograman website. Sekian artikel StayKoding kali ini saya ucapkan terimakasih.

> 📖 Temukan artikel belajar css dasar lainnya di [Tutorial Belajar Lengkap CSS](https://www.staykoding.com/p/tutorial-lengkap-belajar-css.html)