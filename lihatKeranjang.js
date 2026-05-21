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
    const {nama, qty} = item;

    console.log(`${nama} x ${qty} = ${subtotal}`);
  }
  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);
  rl.question("Lanjut Payment bosz?? : y/n ", function (pilih) {
    if (pilih === "y") {
      rl.question("Masukin jumlah uang anda bosz : ", function(nominal){

        let tot = parseInt(total);
        let nom = parseInt(nominal);

        if(isNaN(nom)){
          console.log("\nmasukin nominal dulu bos ~");
          return ;
        }else if(nom !== tot){
          console.log("\nPembayaran di tolak karna nominal tidak sesuai !!..");
          return checkOut();
        }else checkOut();

        if(nom === tot){

          console.log("\n🧾 STRUK PEMBAYARAN\n");
          for (let i = 0; i < wKeranjang.length; i++) {
            let item = wKeranjang[i];
            let subtotal = item.harga * item.qty;
            total += subtotal;
            const {nama, qty} = item;
            console.log(`${nama} x ${qty} = ${subtotal}\n`);}
          console.log(`Pembayaran atas Nama: ${Wuser}\n   - STASUS LUNAS ✅️ -\n`);
          console.log("Dengan Total: Rp" + total);
          console.log(`\nTerima kasih  ${Wuser} ☕\n`);
          rl.close();
        }

      });
      
    } else {
      return menuUtama();
    }
  });
}


