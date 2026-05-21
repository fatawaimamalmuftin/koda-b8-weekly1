<<<<<<< HEAD
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

export let Wuser = "";

async function init() {
  const data = await getData();
  if (!data) {
    console.log("Gagal load data menu.");
    return rl.close();
  }
  Kmenu = data.menuKopi;
  Dmenu = data.menuDesert;

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
  console.log("1. ☕ Pesan Kopi");
  console.log("2. 🍔 Pesan Disert");
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
      tampilMenu(Dmenu, "DISERT");
      break;
    case "3":
      lihatKeranjang();
      break;
    case "4":
      checkOut();
      menuUtama;
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
=======
// TODO: Uncomment after implemented
const {
  celsiusToKelvin,
  celsiusToRankine,
  celsiusToFahrenheit,
} = require("./utils/celsius.js");

const {
  // kelvinToCelsius,
  // kelvinToRankine,
  // kelvinToFahrenheit,
} = require("./utils/kelvin.js");

const {
  // rankineToCelsius,
  rankineToKelvin,
  rankineToFahrenheit,
} = require("./utils/rankine.js");

const {
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
} = require("./utils/fahrenheit.js");

const inputSuhu = 100;

// TODO: Do user input and calculation.

console.log(rankineToKelvin(5))
console.log("Celcius ke fahrenheit : " + celsiusToFahrenheit(inputSuhu));
console.log("Celcius ke Kelvin     : " + celsiusToKelvin(inputSuhu));
console.log("Celcius ke Rankine    : " + celsiusToRankine(inputSuhu));

console.log("Rankine ke fahrenheit    : " + rankineToFahrenheit(inputSuhu));

>>>>>>> fulsep/development
