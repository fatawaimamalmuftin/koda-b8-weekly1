const readline = require("readline"); //mengakses method readline
const rl = readline.createInterface({
  //mengakses fungsi creatInterface dari method readline
  input: process.stdin,
  output: process.stdout,
  // stdin dan stdout itu di akses dari fungsi creatInterface
});

//membuat array yg berisi object minuman Kopi seris yg menjadi simulasi database
const Kmenu = [
  { nama: "Kopi Hear", harga: 31000 },
  { nama: "Cafe Latte", harga: 38000 },
  { nama: "Cappuccino", harga: 31000 },
  { nama: "Espresso", harga: 20000 },
  { nama: "Americano", harga: 25000 },
  { nama: "Signature V60", harga: 40000 },
  { nama: "Vietnam Drip", harga: 30000 },
  { nama: "Espresso BOOM~!", harga: 50000 },
  { nama: "Kopi Gula Aren", harga: 48000 },
  { nama: "Machiato", harga: 48000 },
];

const Mmenu = [
  { nama: "Croissant Butter", harga: 20000 },
  { nama: "Chocolate Croissant", harga: 25000 },
  { nama: "Chicken Sandwich", harga: 30000 },
  { nama: "Beef Sandwich", harga: 35000 },
  { nama: "French Fries", harga: 22000 },
  { nama: "Onion Rings", harga: 20000 },
  { nama: "Brownies Chocolate", harga: 18000 },
  { nama: "Cheese Cake", harga: 28000 },
  { nama: "Donat Gula", harga: 15000 },
  { nama: "Pisang Goreng", harga: 17000 },
];

//membuat penampung nama user pengguna dan isi keranjang yg di tarok di scope terbesar
const wKeranjang = [];
const wUser = "";

//meminta nama yg menjalani sistem
rl.question("👤 Masukan Nama Kamu dulu ya : ", function (nama) {
  Nuser = nama;
  //ini fungsinya biar tampilan lebih clean, setiap menjalankan proses menghapus riwayat tampilan sebelumnya
  console.clear();
  console.log(`\nHai ${Nuser}, selamat datang di Hear Coffee ☕︎.ᐟ\n`);
  menuUtama();
});

//Bikin menu utama
function menuUtama() {
  console.log("═══════════════════════════════");
  console.log("☕︎        HEAR COFFEE         ☕︎");
  console.log("═══════════════════════════════");
  console.log("1. ☕︎ Pesan Kopi");
  console.log("2. 🍔 Pesan Makanan");
  console.log("3. 🛒 Lihat Keranjang");
  console.log("4. 💳 Checkout");
  console.log("5. 🚪 Exit");
  console.log("═══════════════════════════════");
  //pakai switch untuk memilih kodisi yg ingin di jalankan. masih rencana ga tau dah entar jadi kaya gmana ini muftinnnn
  rl.question("👉 Mau ngapain nih? : ", function (pilih) {
    switch (pilih) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      //kalo milih 5 memberhentikan program dengan rl.close()
      case "5":
        rl.close();
        break;
      default:
        menuUtama;
    }
  });
}

//tampilan daftar menu dengan function parameter dan tipe kategori menu
function tampilMenu(Tmenu, kategori) {
  //ini fungsinya biar tampilan lebih clean, setiap menjalankan proses menghapus riwayat tampilan sebelumnya
  console.clear();
  console.log(`\n☕︎ Menu ${kategori} ✎﹏﹏\n`);

  //melooping seluruh isi dari variabel Tmenu. sekarang belum di buat variabelnya
  for (let i = 0; i < Tmenu.length; i++) {
    console.log(`${i + 1}. ${Tmenu[i].nama} - Rp. ${Tmenu[i].harga}`);
  }

  console.log(`\n0. 🔙 Balik dulss..`); // ini ceritanya balik ke menu utama

  rl.question("\nAyow silahkan di pilih sesuai nomor :", function (pilih) {
    //validasi input
    //kalo pilih 0 balik ke menu utama
    if (pilih === 0) {
      return menuUtama;
    }
    //kalo inputan kosong, inputan 0, inputan lebih dari isi menu
    if (isNaN(pilih) || pilih < 1 || pilih > Tmenu.length) {
      //bakal ngeluarin ini
      console.log("❌ Input apa dah lu....");
      //dan ke tampilan sesuai tipe menu apa yg di jalankan sebelumnya
      return tampilMenu(Tmenu, kategori);
    }

    //ini untuk menyamakan angka inputan dengan index
    let index = pilih - 1;
    //masukin qty yg mau di beli
    rl.question("👉 Mau berapa bosz?? ", function (qty) {
      if (isNaN(qty) || qty <= 0) {
        console.log("❌ Ngatuk bree??");
        return tampilMenu(Tmenu, kategori);
      }
    });
  });
}

// for (let i = 0; i < Kmenu.length; i++) {
//   const kopiSeris = Kmenu[i];
// }

// for (let i = 0; i < Mmenu.length; i++) {
//   const kopiSeris = Mmenu[i];
// }
