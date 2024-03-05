> **FARHAN DWI PRAMANA**
>
> 3C / 04
>
> 2141720125

## Praktikum 1: Mendefinisikan Komponen

### Langkah 1: Buat Folder Baru

Buatlah folder baru bernama 03-belajar-komponen lalu di dalam folder tersebut, jalankan terminal dengan mengetikkan perintah berikut:

```
npx create-next-app
```

### Langkah 2: Buat Komponen Baru

Buatlah folder baru dan file baru di src/components/profile.tsx lalu ketik kode berikut ini.

```
import Image from "next/image";

export default function Profile() {
    return (
      <Image
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        width={100}
        height={100}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
    );
  }
```

### Langkah 3: Import Komponen

Lakukan import komponen Profile ke src/app/page.tsx

```
import Profile from "../components/profile";
```

### Jawab Soal 1

![alt text](/document/jawab-soal-1.png)

## Praktikum 2: Mengimpor dan Mengekspor Komponen

### Langkah 1: Buat Komponen Baru

Buatlah file baru di src/components/gallery.tsx berisi kode seperti berikut:

```
import Profile from "./profile";

export function Gallery() {
    return (
        <div className="columns-3">
            <Profile />
            <Profile />
            <Profile />
        </div>
    );
}
```

### Langkah 2: Impor Komponen

Lakukan impor komponen di src/app/page.tsx seperti berikut ini. Hapus kode komponen lama Profile, lalu sesuaikan dengan komponen baru Gallery yang telah dibuat.

```
import { Gallery } from "@/components/gallery";

...
```

### Jawab Soal 2

![alt text](/document/jawab-soal-2.png)

### Aturan JSX

#### 1. Hanya mengembalikan satu elemen

Untuk mengembalikan lebih dari satu elemen, bungkus mereka dengan satu tag parent.

Contohnya, anda dapat menggunakan tag div

```
<div>
  <h1>Daftar Tugas Putri</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Putri"
    class="photo"
  >
  <ul>
    ...
  </ul>
</div>
```

Jika anda tidak ingin menambahkan div pada markup, anda dapat menggunakan tag kosong saja seperti berikut:

```
<>
  <h1>Daftar Tugas Putri</h1>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Putri"
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```

#### 2. Tutup semua tag

Semua tag JSX harus dapat ditutup tag tunggal seperti < img > harus ditulis < img />, dan tag ganda seperti < li > oranges harus ditulis < li > oranges < / li >.

Berikut adalah kode dan daftar tugas Putri dengan tag ganda:

```
<>
  <img
    src="https://i.imgur.com/yXOvdOSs.jpg"
    alt="Putri"
    class="photo"
   />
  <ul>
    <li>Mengerjakan PR</li>
    <li>Pergi Belanja</li>
    <li>Minum vitamin</li>
  </ul>
</>
```

#### 3. Ubah sebagian menjadi camelCase!

JSX berubah menjadi JavaScript dan atribut yang ditulis di JSX menjadi key pada objek di JavaScript. Dalam komponen, atribut akan lebih mudah dibaca sebagai variable. Namun JavaScript memiliki beberapa batasan dalam menamai variabel. Contohnya, nama variabel tidak boleh terdiri dari karakter minus dan tidak boleh menggunakan nama pesanan tertentu seperti class.

Inilah mengapa di React, banyak atribut HTML dan SVG ditulis secara camelCase. Contohnya, stroke-width dapat ditulis sebagai strokeWidth. Dan karena class merupakan nama pesanan, di React kita menulisnya sebagai className, dinamakan sesuai dengan versi DOM-nya:

```
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Putri"
  className="photo"
/>
```

### Jawab Soal 3

![alt text](/document/jawaban-soal-3.png)

## Praktikum 3: Menggunakan JSX dinamis

### Langkah 1: Buat Komponen Baru

Buatlah file baru di src/components/todolist.tsx berisi kode seperti berikut:

```
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

### Jawab Soal 4

--

### Langkah 2: Impor Komponen

Lakukan impor komponen di src/app/page.tsx seperti berikut ini.

```
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
  );
}
```

### Jawab Soal 5

![alt text](/document/jawab-soal-5.png)

### Langkah 3: Ubah ekspresi URL di src

Tetap di file src/components/todolist.tsx ubahlah objek person dan tambah variabel baseUrl seperti di bawah ini. URL lengkap gambar dibagi menjadi empat bagian: URL dasar, imageId, imageSize, dan ekstensi file.

Kita ingin URL gambar menggabungkan atribut-atribut ini bersama-sama: URL dasar (selalu 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), dan ekstensi file (selalu '.jpg'). Namun, ada yang salah dengan atribut src.

Bisakah anda memperbaikinya?

```
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

### Jawab Soal 6

![alt text](/document/jawab-soal-6.png)

### Jawab Soal 7,8,9

![alt text](/document/jawab-soal-7-8-9.png)
