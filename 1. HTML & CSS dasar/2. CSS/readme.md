# CSS Dasar

CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang digunakan untuk menentukan tampilan dan format halaman website.

---

## Penulisan CSS

#### Inline CSS
Inline CSS adalah kode CSS yang dituliskan di dalam file HTML. Jenis CSS ini hanya mempengaruhi satu baris kode HTML. contoh penggunaan inline CSS:

```html
<h1  style="font-size:30px; color:blue;">Ini Adalah Judul Berita</h1>
```

#### Internal CSS
Internal CSS adalah kode CSS yang dituliskan di dalam tag `<style>` dan `</style>`. Jenis CSS ini hanya mempengaruhi satu tag `<style>` dan `</style>`. contoh penggunaan internal CSS:

```html
<head>
<style>
Body  { background-color:blue;  }
P  { font-size:20px; color:white;  }
</style>
</head>
```

#### External CSS
External CSS adalah kode CSS yang dituliskan di dalam file CSS. Jenis CSS ini hanya mempengaruhi satu file CSS. contoh penggunaan external CSS:

```css
Body  { background-color:blue;  }
P  { font-size:20px; color:white;  }
```

kemudian kita tambahkan kode CSS di dalam file HTML:

```html
<head>
<link rel="stylesheet"  type="text/css"  href=<fileCSSAnda>.css">
</head>
```

## CSS Selector
CSS Selector adalah kode yang digunakan untuk menentukan elemen mana yang akan diubah. 

#### CSS Selector ID
contoh penggunaan CSS Selector ID:

```html
<body>
<p id="paragraf1">Ini adalah paragraf pertama</p>
<p id="paragraf2">Ini adalah paragraf kedua</p>
</body>
```

```css
#paragraf1 {
font-size:20px;
color:blue;
}
```

#### CSS Selector Class
contoh penggunaan CSS Selector Class:

```html
<body>
<p class="paragraf1">Ini adalah paragraf pertama</p>
</body>
```

```css
.paragraf1 {
font-size:20px;
color:blue;
}
```

## CSS Box Model
CSS Box Model adalah sebuah konsep dimana setiap element yang terdapat pada halaman web diproses sebagai kotak (box).

lima buah properti yang ada pada CSS Box Model:
- `height` 
- `width`
- `margin`
- `padding`
- `border` 

## CSS Display dan Position
Display adalah salah satu property dalam CSS yang berguna untuk mengatur tampilnya suatu element. Sedangkan Position adalah salah satu property dalam CSS yang berguna untuk mengatur posisi suatu element.

#### CSS Display
value dasar dari property `display` adalah `block`. dan beberapa value yang bisa digunakan:
- `block`
- `inline`
- `inline-block`
- `none`

#### CSS Position
value dasar dari property `position` adalah `static`. dan beberapa value yang bisa digunakan:
- `static`
- `relative`
- `absolute`
- `fixed`