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

    console.log(`${i + 1} | ${item.nama} x ${item.qty} = Rp. ${subtotal}`);
  }

  //menu navigasi setelah memesan
  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);

  console.log("1 | 🔙 Menu Utama");
  console.log("2 | 💳 Checkout sekarang");
  console.log("3 | ⚙️  Modify pesanan");

  rl.question("Mau langsun Payment atau mau tambah pesenan bosz: ",function (piih) {
    switch (piih) {
    case "1":
      menuUtama();
      break;

    case "2":
      checkOut();
      break;

    case "3":
      editPesanan();
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

    console.log(`${i + 1} | ${nama} x ${qty} = ${subtotal}`);
  }

  //rencananya ini mau di kembangkan menjadi struk pembelian
  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);

  rl.question("Lanjut Payment bosz?? : y/n ", function (pilih) {

    if (pilih === "y") {
      console.clear();
      
      console.log("\n🧾 STRUK");
      console.log("═══════════════════════════════");

      for (let i = 0; i < wKeranjang.length; i++) {
        let item = wKeranjang[i];
        let subtotal = item.harga * item.qty;
        total += subtotal;
        const {nama, qty} = item;

        console.log(`${i + 1} | ${nama} x ${qty} = ${subtotal} `);
        console.log("-------------------------------");
      }
      console.log("\nStatus pembayaran " + Wuser + " LUNAS ✅️");
      console.log("═══════════════════════════════");


      console.log(`\nTerima kasih  ${Wuser} ☕`);
      rl.close();

    } else {
      return menuUtama();
    }
  });
}

function editPesanan(){
  console.log("═══════════════════════════════");
  console.log("1 | 🗑️  Hapus pesanan");
  console.log("2 | ➖ Kurangin Qty");
  console.log("═══════════════════════════════");
  rl.question("Mau hapus pesanan atau kurangin Qty?? : ", function(pilih){
    if( isNaN(pilih) || pilih < 1 || pilih > 2 ){
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return editPesanan();
    };

    switch(pilih){
    case "1":
      delPes();
      break;
    case "2":
      kurQty();
      break;
    default:
      editPesanan();
      break;
    }
  });
}

// proses menghapus pesanan sesuai nomor pesanans
function delPes(){
  rl.question("Mau hapus nomor brapa bosz??.. : ",function(pilih){
    let num = pilih - 1;
    if(isNaN(pilih ) || pilih < wKeranjang.length || pilih < wKeranjang.length){
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return delPes();
    };
    wKeranjang.splice(num, 1);
    console.log("🗑️ ⬅ Berhasil di hapus dari keranjang bosz !!" + Wuser);
    lihatKeranjang();
  });
};

let minqty = [];
function kurQty(){
  rl.question("Mau kurangin nomor berapa bosz ❓ : ", function (pilih){
    const num = pilih - 1;
    if( isNaN(pilih) || pilih < wKeranjang.length || pilih < wKeranjang.length){
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return kurQty();
    };
    minqty = wKeranjang[num];
    rl.question("Kurangin brapa bosz ❓ :",function (kurang){
      const number = parseInt(kurang);
      if( isNaN(number) || number < wKeranjang.length || number < wKeranjang.length){
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        return kurQty();
      };
      minqty.qty -= number;
      lihatKeranjang();
    });
  });  
}
