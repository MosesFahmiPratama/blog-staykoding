---
setup: |
  import Layout from '../layouts/PostLayout.astro'
title : Membuat bendera indonesia dengan html css
description : Berikut penjelasan apa itu tag, atribut dan elemen dalam html. Semoga dapat membantu kamu untuk memahaminya.
date : 2022-04-20
author : Moses Fahmi Pratama
img : https://drive.google.com/uc?id=1PzCNXyi8xnKJ04v3N5-Y3edXTlqOpNJJ
categories : 
  - project web
---

![bendera indonesia dengan html css](https://drive.google.com/uc?id=1PzCNXyi8xnKJ04v3N5-Y3edXTlqOpNJJ)

Setiap tanggal 17 agustus, kita pasti memperingati hari kemerdekaannya bangsa indonsia. Nah di pembahasan kita kali ini kita akan berkreasi bagaimana membuat bendera indonesia dengan html css saja.

Bendera yang kita buat ini akan memiliki animasi seolah-olah benderanya berkibar dan bergerak.

Untuk itu berikut langkah-langkah membuatnya!

Langkah-langkah membuat bendera merah putih dengan html dan css
---------------------------------------------------------------

1\. Buat sebuah folder di penyimpanan direktori sobat. Terserah nama direktori atau foldernya apa.

2\. Download file musik nya dulu dibawah ini

[Download](https://drive.google.com/file/d/1eCJ6hgQoxnPFnIXnXXVBOIUttYChM84-/view)  

3\. Buat sebuah file html dan css didalam direktori atau folder yang sudah sobat buat tadi.

<div class="quotes">

> Khusus untuk file css, buat dengan nama style.css

</div>

4\. Didalam file html yang sudah sobat buat tadi ketikan kode html dibawah ini

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Dirgahayu RI</title>
      <link rel="stylesheet" href="style.css" type="text/css" media="all" />
    </head>
    <body>
      <div class="teks">
        <span>
          <h3>D</h3>
          <h3>i</h3>
          <h3>r</h3>
          <h3>g</h3>
          <h3>a</h3>
          <h3>h</h3>
          <h3>a</h3>
          <h3>y</h3>
          <h3>u</h3>
        </span>
        <span>
          <h3>R</h3>
          <h3>I</h3>
        </span>
        <span>
          <h3>k</h3>
          <h3>e</h3>
        </span>
        <span>
          <h3>7</h3>
          <h3>6</h3>
        </span>
      </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
        <audio autoplay="true">
          <source src="ri.mp3" type="audio/mpeg" media="" />
        </audio>
    </body>
    </html>
```

5.Kemudian didalam file style.css nya ketikan kode dibawah ini.

```css
    body 
    {
      margin: 0;
      padding: 0;
    }
    
    .teks{
      position: absolute;
      top: 50%;
      left: 49%;
      z-index: 1;
      text-align: center;
      transform: translate(-50%,-50%) rotate(-20deg) skew(20deg);
      display: flex;
    }
    
    span
    {
      display: flex;
      margin-right: 10px;
    }
    
    h3
    {
      text-shadow: -1px 0 4px rgba(0,0,0,.2);
      color: #fff;
      position: relative;
      font-size: 2em;
      /* animation: teks 9s linear infinite; */
    }
    
    ul
    {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) rotate(-20deg) skew(20deg);
      margin: 0;
      padding: 0;
      display: flex;
    }
    
    ul li 
    {
      position: relative;
      list-style: none;
      width: 4px;
      height: 240px;
      border-radius: 2px;
      background: #fff;
      box-shadow: -1px 0 2px rgba(0,0,0,.2);
      overflow: hidden;
      animation: animate 9.5s linear infinite;
    }
    
    ul li:nth-child(20n+1)
    {
      animation-delay: -0s;
    }
    
    ul li:nth-child(20n+2)
    {
      animation-delay: -0.5s;
    }
    
    ul li:nth-child(20n+3)
    {
      animation-delay: -1s;
    }
    
    ul li:nth-child(20n+4)
    {
      animation-delay: -1.5s;
    }
    
    ul li:nth-child(20n+5)
    {
      animation-delay: -2s;
    }
    
    ul li:nth-child(20n+6)
    {
      animation-delay: -2.5s;
    }
    
    ul li:nth-child(20n+7)
    {
      animation-delay: -3s;
    }
    
    ul li:nth-child(20n+8)
    {
      animation-delay: -3.5s;
    }
    
    ul li:nth-child(20n+9)
    {
      animation-delay: -4s;
    }
    
    ul li:nth-child(20n+10)
    {
      animation-delay: -4.5s;
    }
    
    ul li:nth-child(20n+11)
    {
      animation-delay: -5s;
    }
    
    ul li:nth-child(20n+12)
    {
      animation-delay: -5.5s;
    }
    
    ul li:nth-child(20n+13)
    {
      animation-delay: -6s;
    }
    
    ul li:nth-child(20n+14)
    {
      animation-delay: -6.5s;
    }
    
    ul li:nth-child(20n+15)
    {
      animation-delay: -7s;
    }
    
    ul li:nth-child(20n+16)
    {
      animation-delay: -7.5s;
    }
    
    ul li:nth-child(20n+17)
    {
      animation-delay: -8s;
    }
    
    ul li:nth-child(20n+18)
    {
      animation-delay: -8.5s;
    }
    
    ul li:nth-child(20n+19)
    {
      animation-delay: -9s;
    }
    
    ul li:nth-child(20n+20)
    {
      animation-delay: -9.5s;
    }
    
    
    
    ul li:before
    {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: red;
    }
    
    @keyframes animate
    {
      0%
      {
        transform: translateY(0);
      }
      25%
      {
        transform: translateY(5px);
      }
      50%
      {
        transform: translateY(0);
      }
      75%
      {
        transform: translateY(-5px);
      }
      100%
      {
        transform: translateY(0);
      }
    }
    
    @keyframes teks
    {
      0%
      {
        transform: translateY(0);
      }
      25%
      {
        transform: translateY(5px);
      }
      50%
      {
        transform: translateY(0);
      }
      75%
      {
        transform: translateY(-5px);
      }
      100%
      {
        transform: translateY(0);
      }
    }
    
    @keyframes typing
    {
      100%
      {
        left: 100%;
      }
    }
```

6\. Terakhir buka file html nya di browser sobat dan secara otomatis akan tampil seperti gambar dibawah ini

![bendera indonesia dengan html css](https://1.bp.blogspot.com/-9OLYll_cQXY/YRtJYtI8UbI/AAAAAAAADi4/xkHj9YbCQQoHJigmD7a-vT9n9iPk_ZuOACNcBGAsYHQ/s16000/bendera-indonesia-dengan-html-css.jpg "bendera indonesia dengan html css")
