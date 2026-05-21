import { menuUtama, Wuser, rl } from "./index.js";

export let wKeranjang = [];

export function lihatKeranjang() {
  console.clear();
  console.log(`\n🛒 Keranjang ${Wuser} ✎﹏﹏\n`);

  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  let total = 0;

  for (let i = 0; i < wKeranjang.length; i++) {
    let item = wKeranjang[i];
    let subtotal = item.harga * item.qty;
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
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        menuUtama();
        break;
      }
    },
  );
}

//ini proses checkout
export function checkOut() {
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
      console.log(`Terima kasih  ${Wuser} ☕`);
      rl.close();
    } else {
      return menuUtama();
    }
  });
}
