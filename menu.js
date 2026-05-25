import {
  lihatKeranjang,
  checkOut,wKeranjang
} from "./lihatKeranjang.js";
import { Wuser, menuUtama,rl } from "./index.js";

/**
 * Menampilkan daftar menu berdasarkan kategori yang dipilih Wuser
 * lalu menangani proses pemilihan menu, quantity, dan keranjang belanja.
 *
 * @param {Array<{nama: string, harga: number}>} Tmenu
 * Array daftar menu yang akan ditampilkan (contoh: menu kopi atau dessert)
 *
 * @param {string} kategori
 * Nama kategori menu yang sedang ditampilkan (contoh: "Kopi", "Dessert")
 *
 * @returns {void}
 * Tidak mengembalikan nilai karena hanya jalan di CLI
 *
 * @sideEffect
 * - Mengubah isi wKeranjang (push item)
 * - Mengubah alur program ke menuUtama.js / lihatKeranjang.js / checkout.js
 */

//menampilkan menu sesuai argumen parameter yg di kirimkan
export function tampilMenu(Tmenu, kategori) {

  //ini fungsinya biar tampilan lebih clean, setiap menjalankan proses menghapus riwayat tampilan sebelumnya
  console.clear();

  console.log(`\n☕︎ Menu ${kategori} ✎﹏﹏\n`);

  //melooping seluruh isi dari variabel Tmenu. sekarang belum di buat variabelnya
  for (let i = 0; i < Tmenu.length; i++) {
    console.log(`${i + 1}. ${Tmenu[i].nama} - Rp. ${Tmenu[i].harga}`);
  }

  console.log(`\n0. 🔙 Balik dulss..`); // ini ceritanya balik ke menu utama

  rl.question("\nAyow silahkan di pilih sesuai nomor : ", function (pilih) {
    //validasi input kalo pilih 0 balik ke menu utama
    if (pilih === "0") return menuUtama();

    //kalo inputan kosong, inputan 0, inputan lebih dari isi menu
    if (isNaN(pilih) || pilih < 1 || pilih > Tmenu.length) {
      //bakal ngeluarin ini
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      //dan ke tampilan sesuai tipe menu apa yg di jalankan sebelumnya
      return tampilMenu(Tmenu, kategori);
    }

    //ini untuk menyamakan angka inputan dengan index
    const num = parseInt(pilih);
    let index = num - 1;

    //masukin qty yg mau di beli
    rl.question("👉 Mau berapa bosz?? ", function (qty) {
      if (isNaN(qty) || qty <= 0) {
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        return tampilMenu(Tmenu, kategori);
      }
      
      //ini masukan nama menu dan harga menu ke keranjang dan urutannya menjadi sesuai index array
      wKeranjang.push({
        nama: Tmenu[index].nama,
        harga: Tmenu[index].harga,
        //input qty awalnya string menggunakan parseInt() untuk mengubah tipe data menjadi number
        qty: parseInt(qty),
      });

      console.log(`\n${Tmenu[index].nama} udah masuk keranjang bosz! ⁀➴ 🛒`);
      //menu tambahan untuk memilih selanjutnya mau ngapain

      console.log("\n(｡· v ·｡) ?\nMau lanjut apa bosz?\n");
      console.log("1. ➕ Tambah lagi");
      console.log("2. 🛒 Lihat Keranjang");
      console.log("3. 💳 Checkout sekarang");
      console.log("4. 🔙 Menu Utama");
      rl.question("\n👉 Lanjut ngapain bosz??... ", function (pilih) {
        switch (pilih) {
        case "1":
          tampilMenu(Tmenu, kategori);
          break;
        case "2":
          lihatKeranjang();
          break;
        case "3":
          checkOut();
          break;
        case "4":
          menuUtama();
          break;
        default:
          console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
          menuUtama();
        }
      });
    });
  });
}
