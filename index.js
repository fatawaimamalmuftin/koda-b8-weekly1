import readline from "readline";
import { getPromise } from "./db.js";
import { lihatKeranjang, checkOut } from "./lihatKeranjang.js";
import { tampilMenu } from "./menu.js";

/**
 * Interface readline untuk input CLI user.
 * @type {readline.Interface}
 */
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Menu kopi yang tersedia.
 * @type {Array<Object>}
 */
export let Kmenu = [];

/**
 * Menu dessert yang tersedia.
 * @type {Array<Object>}
 */
export let Dmenu = [];

/**
 * Gabungan semua menu (kopi + dessert).
 * @type {Array<Object>}
 */
export let seluruhMenu = [];

/**
 * Nama user yang sedang menggunakan aplikasi.
 * @type {string}
 */
export let Wuser = "";

/**
 * Inisialisasi aplikasi:
 * - mengambil data menu dari database
 * - set menu ke state global
 * - meminta input nama user
 * @async
 * @function init
 * @returns {Promise<void>}
 */
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

/**
 * Menyimpan data menu ke state global aplikasi.
 *
 * @function setMenu
 * @param {Object} data - Data menu dari database
 * @param {Array<Object>} data.menuKopi - List menu kopi
 * @param {Array<Object>} data.menuDesert - List menu dessert
 * @returns {void}
 */
function setMenu(data) {
  Kmenu = data.menuKopi;
  Dmenu = data.menuDesert;
  seluruhMenu = [...Dmenu, ...Kmenu];
}

/**
 * Meminta input nama user melalui CLI.
 * Setelah itu lanjut ke menu utama.
 *
 * @function askNamaUser
 * @returns {void}
 */
function askNamaUser() {
  console.clear();

  rl.question(`👤 Masukan Nama ${Wuser} dulu ya : `, function (nama) {
    Wuser = nama;

    console.clear();
    console.log(`\nHai ${Wuser}, selamat datang di Hear Coffee ☕︎.ᐟ\n`);

    menuUtama();
  });
}

/**
 * Menampilkan menu utama aplikasi CLI.
 *
 * @function menuUtama
 * @returns {void}
 */
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

/**
 * Menangani input pilihan menu user.
 *
 * @function handleMenu
 * @returns {void}
 */
function handleMenu() {
  rl.question("👉 Mau ngapain nih? : ", function (pilih) {
    processMenu(pilih);
  });
}

/**
 * Mengeksekusi pilihan menu user.
 *
 * @function processMenu
 * @param {string} pilih - Input pilihan menu dari user
 * @returns {void}
 */
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

/**
 * Menampilkan seluruh menu (kopi + dessert).
 *
 * @function showAllMenu
 * @returns {void}
 */
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

/**
 * Menutup aplikasi CLI dan keluar dari program.
 *
 * @function exitApp
 * @returns {void}
 */
function exitApp() {
  console.clear();

  console.log(
    "\n✎ᝰ. Terima Kasih ( ๑ ˃̵ᴗ˂̵)و ♡\nDi tunggu kembali kedatanganya... ☕\n𐦂𖨆𐀪𐀪 𓆝 𓆟 𓆞 ✌︎︎"
  );

  rl.close();
}