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
let wKeranjang = [];
let Wuser = "";

//meminta nama yg menjalani sistem
rl.question(`👤 Masukan Nama ${Wuser} dulu ya : `, function (nama) {
  Wuser = nama;
  //ini fungsinya biar tampilan lebih clean, setiap menjalankan proses menghapus riwayat tampilan sebelumnya
  console.clear();
  console.log(`\nHai ${Wuser}, selamat datang di Hear Coffee ☕︎.ᐟ\n`);
  menuUtama();
});

//Bikin menu utama
function menuUtama() {
  console.log("═══════════════════════════════");
  console.log("☕︎        HEAR COFFEE         ☕︎");
  console.log("═══════════════════════════════");
  console.log("1. ☕ Pesan Kopi");
  console.log("2. 🍔 Pesan Makanan");
  console.log("3. 🛒 Lihat Keranjang");
  console.log("4. 💳 Checkout");
  console.log("5. 🚪 Exit");
  console.log("═══════════════════════════════");
  //pakai switch untuk memilih kodisi yg ingin di jalankan. masih rencana ga tau dah entar jadi kaya gmana ini muftinnnn
  rl.question("👉 Mau ngapain nih? : ", function (pilih) {
    switch (pilih) {
      case "1":
        tampilMenu(Kmenu, "KOPI");
        break;
      case "2":
        tampilMenu(Mmenu, "MAKANAN");
        break;
      case "3":
        lihatKeranjang();
        break;
      case "4":
        break;
      //kalo milih 5 memberhentikan program dengan rl.close()
      case "5":
        console.clear();
        console.log(
          "\nTerima Kasih ( ๑ ˃̵ᴗ˂̵)و ♡\nDi tunggu kembali kedatangananya... ☕\n",
        );
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

  rl.question("\nAyow silahkan di pilih sesuai nomor : ", function (pilih) {
    //validasi input
    //kalo pilih 0 balik ke menu utama
    if (pilih === "0") return menuUtama();

    //kalo inputan kosong, inputan 0, inputan lebih dari isi menu
    if (isNaN(pilih) || pilih < 1 || pilih > Tmenu.length) {
      //bakal ngeluarin ini
      console.log("❌ Pilihannya ga ada loh （ꐦ𝅒_𝅒");
      //dan ke tampilan sesuai tipe menu apa yg di jalankan sebelumnya
      return tampilMenu(Tmenu, kategori);
    }

    //ini untuk menyamakan angka inputan dengan index
    let index = pilih - 1;
    //masukin qty yg mau di beli
    rl.question("👉 Mau berapa bosz?? ", function (qty) {
      if (isNaN(qty) || qty <= 0) {
        console.log("❌ Pilihannya ga ada loh （ꐦ𝅒_𝅒）");
        return tampilMenu(Tmenu, kategori);
      }
      //ini masukan nama menu dan harga menu ke keranjang dan urutannya menjadi sesuai index array
      wKeranjang.push({
        nama: Tmenu[index].nama,
        harga: Tmenu[index].harga,
        //input qty awalnya string menggunakan parseInt() untuk mengubah tipe data menjadi number
        qty: parseInt(qty),
      });

      console.log(`\n${Tmenu[index].nama} udah masuk keranjang bosz! ⁀➴
                                        🛒`);
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
            checkout();
            break;
          case "4":
            menuUtama();
            break;
          default:
            console.log("❌ Pilihan tidak ada");
            menuUtama();
        }
      });
    });
  });
}

//ini proses keranjang
function lihatKeranjang() {
  console.clear();
  console.log(`\n🛒 Keranjang ${Wuser} ✎﹏﹏\n`);

  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  let total = 0;

  for (let i = 0; i < wKeranjang.length; i++) {
    let item = wKeranjang[i];
    let subtotal = item.harga * item.harga;
    total += subtotal;

    console.log(`${item.nama} x ${item.qty} = Rp. ${subtotal}`);
  }
  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);

  console.log("1. 🔙 Menu Utama");
  console.log("2. 💳 Checkout sekarang");

  rl.question(
    "Mau langsun Payment atau mau tambah pesenan bosz: ",
    function (piih) {
      switch (piih) {
        case "1":
          menuUtama();
          break;
        case "2":
          checkOut();
          break;
        default:
          console.log("❌ Pilihan tidak ada");
          menuUtama();
          break;
      }
    },
  );
}

//ini proses checkout
function checkOut() {
  console.clear();
  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  let total = 0;

  for (let i = 0; i < wKeranjang.length; i++) {
    let item = wKeranjang[i];
    let subtotal = item.harga * item.qty;
    total += subtotal;

    console.log(`${item.nama} x ${item.qty} = ${subtotal}`);
  }
  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);
  rl.question("Lanjut Payment bosz?? : y/n ", function (pilih) {
    if (pilih === "y") {
      console.log("\n🧾 STRUK");
      console.log(`Nama: ${Wuser}`);
      console.log("Total: Rp" + total);
      console.log("Terima kasih ☕");
      rl.close();
    } else {
      menuUtama;
    }
  });
}
