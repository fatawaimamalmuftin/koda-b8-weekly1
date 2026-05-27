import readline from "readline";
import { lihatKeranjang } from "./lihatKeranjang.js";

export let Wuser = "";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menuUtama() {
  console.clear();

  if (!Wuser) {
    rl.question("👤 Masukan Nama dulu ya : ", (nama) => {
      Wuser = nama;
      menuUtama();
    });
    return;
  }

  console.log(`\nSelamat datang ${Wuser} ☕`);
  console.log("1 | Lihat Keranjang");
  console.log("2 | Keluar");

  rl.question("Pilih menu: ", (pilih) => {
    if (pilih === "1") lihatKeranjang();
    else if (pilih === "2") rl.close();
    else menuUtama();
  });
}

// SAFE ENTRY (ANTI TEST FREEZE)
if (process.argv[1] === new URL(import.meta.url).pathname) {
  menuUtama();
}