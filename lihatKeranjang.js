import { menuUtama, Wuser, rl } from "./index.js";

//isi keranjang pemesanan
export let wKeranjang = [];

export function lihatKeranjang() {
  console.clear();

  console.log(`\n🛒 Keranjang ${Wuser} ✎﹏﹏\n`);

  //cek keranjang ada isi apa engga
  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  let total = 0;

  //menampilkan selauruh isi krangjang
  for (let i = 0; i < wKeranjang.length; i++) {
    let item = wKeranjang[i];
    let subtotal = item.harga * item.qty;
    total += subtotal;

    console.log(`${i + 1}. ${item.nama} x ${item.qty} = Rp. ${subtotal}`);
  }

  //menu navigasi setelah memesan
  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);

  console.log("1. 🔙 Menu Utama");
  console.log("2. 💳 Checkout sekarang");
  console.log("3. 🗑️  Hapus pesanan");

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

      case "3":
        delPes();
        break;

      default:
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        menuUtama();
        break;
      }
    },
  );
}

//proses checkout
export function checkOut() {
  console.clear();

  //cek isi keranjang
  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  let total = 0;

  //menampilkan daftar pesanan dalam keranjang
  for (let i = 0; i < wKeranjang.length; i++) {
    let item = wKeranjang[i];
    let subtotal = item.harga * item.qty;
    total += subtotal;
    const {nama, qty} = item;

    console.log(`${i + 1}. ${nama} x ${qty} = ${subtotal}`);
  }

  //rencananya ini mau di kembangkan menjadi struk pembelian
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

//proses menghapus pesanan sesuai nomor pesanans
function delPes(){
  rl.question("Mau hapus nomor brapa bosz??.. : ",function(pilih){
    let num = pilih - 1;
    wKeranjang.splice(num, 1);
    console.log("🗑️ ⬅ Berhasil di hapus dari keranjang bosz " + Wuser);
    lihatKeranjang();
  });
};
