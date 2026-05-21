import readline from "readline";
import { getData } from "./db.js";
import { lihatKeranjang, checkOut } from "./lihatKeranjang.js";
import { tampilMenu } from "./menu.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat array yg berisi object minuman Kopi seris yg menjadi simulasi database
export let Kmenu = [];
export let Dmenu = [];
let seluruhMenu = [];

export let Wuser = "";

async function init() {
  const data = await getData();
  if (!data) {
    console.log("Gagal load data menu.");
    return rl.close();
  }
  Kmenu = data.menuKopi;
  Dmenu = data.menuDesert;
  seluruhMenu = [...Dmenu,...Kmenu];

  console.clear();

  rl.question(`👤 Masukan Nama ${Wuser} dulu ya : `, function (nama) {
    Wuser = nama;
    //ini fungsinya biar tampilan lebih clean, setiap menjalankan proses menghapus riwayat tampilan sebelumnya
    console.clear();
    console.log(`\nHai ${Wuser}, selamat datang di Hear Coffee ☕︎.ᐟ\n`);
    menuUtama();
  });
}

//meminta nama yg menjalani sistem

//Bikin menu utama
export function menuUtama() {
  console.log("═══════════════════════════════");
  console.log("☕︎        HEAR COFFEE         ☕︎");
  console.log("═══════════════════════════════");
  console.log("0. Liat semua menu dulu sebelum milih boleh di sini yaa ~")
  console.log("1. ☕ Pesan Kopi");
  console.log("2. 🍔 Pesan Disert");
  console.log("3. 🛒 Lihat Keranjang");
  console.log("4. 💳 Checkout");
  console.log("5. 🚪 Exit");
  console.log("═══════════════════════════════");
  //pakai switch untuk memilih kodisi yg ingin di jalankan. masih rencana ga tau dah entar jadi kaya gmana ini muftinnnn
  rl.question("👉 Mau ngapain nih? : ", function (pilih) {
    switch (pilih) {
    case "0":
      console.log(`\nHallow ${Wuser}, di Hear Coffe kita punya makanan dan minuman,\n 
      untuk memesan tekan enter yaa ~\n`);

      seluruhMenu.forEach((item)=>console.log(`Kita punya : ${item.nama} - Rp. ${item.harga}\n`));
    
      rl.question("Tekan enter untuk kembali ke menu utama....", function(){menuUtama();});
      break;
    case "1":
      tampilMenu(Kmenu, "KOPI");
      break;
    case "2":
      tampilMenu(Dmenu, "DISERT");
      break;
    case "3":
      lihatKeranjang();
      break;
    case "4":
      checkOut();
      break;
    case "5":
      console.clear();
      console.log(
        "\nTerima Kasih ( ๑ ˃̵ᴗ˂̵)و ♡\nDi tunggu kembali kedatangananya... ☕\n",
      );
      rl.close();
      break;
    default:
      menuUtama();
      break;
    }
  });
}

init();