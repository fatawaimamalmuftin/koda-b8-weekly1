import readline from "readline";
import { getPromise } from "./db.js";
import { lihatKeranjang, checkOut } from "./lihatKeranjang.js";
import { tampilMenu } from "./menu.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export let Kmenu = [];
export let Dmenu = [];
export let seluruhMenu = [];
export let Wuser = "";

init();

async function init() {
  const data = await getPromise();

  if (!data) {
    console.log("Gagal load data menu.");
    return rl.close();
  }

  setMenu(data);
  askNamaUser();
}

function setMenu(data) {
  Kmenu = data.menuKopi;
  Dmenu = data.menuDesert;
  seluruhMenu = [...Dmenu, ...Kmenu];
}

function askNamaUser() {
  console.clear();

  rl.question(`👤 Masukan Nama ${Wuser} dulu ya : `, function (nama) {
    Wuser = nama;

    console.clear();
    console.log(`\nHai ${Wuser}, selamat datang di Hear Coffee ☕︎.ᐟ\n`);

    menuUtama();
  });
}

export function menuUtama() {
  console.log("═══════════════════════════════");
  console.log("☕︎        HEAR COFFEE         ☕︎");
  console.log("═══════════════════════════════");
  console.log("0 | Liat semua menu dulu sebelum milih boleh di sini yaa 𐦂𖨆𐀪𖠋");
  console.log("--------------------------------------------------------------");
  console.log("1 | ☕ Pesan Kopi");
  console.log("2 | 🍔 Pesan Disert");
  console.log("3 | 🛒 Lihat Keranjang");
  console.log("4 | 💳 Checkout");
  console.log("5 | 🚪 Exit");
  console.log("═══════════════════════════════");

  handleMenu();
}

function handleMenu() {
  rl.question("👉 Mau ngapain nih? : ", function (pilih) {
    processMenu(pilih);
  });
}

function processMenu(pilih) {
  switch (pilih) {
  case "0":
    showAllMenu();
    break;

  case "1":
    tampilMenu(Kmenu, "KOPI ☕︎ྀི");
    break;

  case "2":
    tampilMenu(Dmenu, "DISERT 𐂐◯𓇋");
    break;

  case "3":
    lihatKeranjang();
    break;

  case "4":
    checkOut();
    break;

  case "5":
    exitApp();
    break;

  default:
    menuUtama();
    break;
  }
}

function showAllMenu() {
  console.clear();
  console.log(`\nHallow ${Wuser}, di Hear Coffe kita punya makanan dan minuman 🍝🍜👩🏻‍🍳🥘🤌🏻`);

  seluruhMenu.forEach((item) => {
    console.log(`Kita punya : ${item.nama} - Rp. ${item.harga}\n`);
  });

  rl.question("Tekan enter untuk memesan ....↩", function () {
    menuUtama();
  });
}

function exitApp() {
  console.clear();

  console.log(
    "\n✎ᝰ. Terima Kasih ( ๑ ˃̵ᴗ˂̵)و ♡\nDi tunggu kembali kedatanganya... ☕\n𐦂𖨆𐀪𖠋𐀪𐀪 𓆝 𓆟 𓆞 ✌︎︎"
  );

  rl.close();
}