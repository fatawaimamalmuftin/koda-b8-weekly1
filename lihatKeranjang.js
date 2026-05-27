import { menuUtama, Wuser, rl } from "./index.js";

export let wKeranjang = [];

export function lihatKeranjang() {
  console.clear();
  renderKeranjang();

  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  renderMenuKeranjang();
  handleMenuKeranjang();
}

function renderKeranjang() {
  console.log(`\n🛒 Keranjang ${Wuser} ✎﹏﹏\n`);

  let total = 0;

  for (let i = 0; i < wKeranjang.length; i++) {
    const item = wKeranjang[i];
    const subtotal = item.harga * item.qty;
    total += subtotal;

    console.log(`${i + 1} | ${item.nama} x ${item.qty} = Rp. ${subtotal}`);
  }

  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);
}

function renderMenuKeranjang() {
  console.log("1 | 🔙 Menu Utama");
  console.log("2 | 💳 Checkout sekarang");
  console.log("3 | ⚙️  Modify pesanan");
}

function handleMenuKeranjang() {
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
        editPesanan();
        break;
      default:
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        menuUtama();
        break;
      }
    }
  );
}

export function checkOut() {
  console.clear();

  if (wKeranjang.length === 0) {
    console.log(`Masih Kosong ${Wuser} 😭\n`);
    return menuUtama();
  }

  renderCheckout();
  handleCheckoutConfirm();
}

function renderCheckout() {
  let total = 0;

  console.log(`\n🧾 STRUK`);
  console.log("═══════════════════════════════");

  for (let i = 0; i < wKeranjang.length; i++) {
    const item = wKeranjang[i];
    const subtotal = item.harga * item.qty;
    total += subtotal;

    console.log(`${i + 1} | ${item.nama} x ${item.qty} = ${subtotal}`);
    console.log("-------------------------------");
  }

  console.log("═══════════════════════════════");
  console.log(`\nTotal : Rp. ${total}\n`);

  return total;
}

function handleCheckoutConfirm() {
  rl.question("Lanjut Payment bosz?? : y/n ", function (pilih) {
    if (pilih === "y") {
      console.clear();
      console.log("\n🧾 STRUK");
      console.log("═══════════════════════════════");

      let hasil = 0;


      for (let i = 0; i < wKeranjang.length; i++) {
        const item = wKeranjang[i];
        const subtotal = item.harga * item.qty;
        hasil += subtotal;

        console.log(`${i + 1} | ${item.nama} x ${item.qty} = ${subtotal}`);
        console.log("-------------------------------");
      }

      console.log("\nStatus pembayaran " + hasil + " LUNAS ✅️");
      console.log("═══════════════════════════════");
      console.log(`\nTerima kasih  ${Wuser} ☕`);

      rl.close();
    } else {
      return menuUtama();
    }
  });
}

function editPesanan() {
  console.log("═══════════════════════════════");
  console.log("1 | 🗑️  Hapus pesanan");
  console.log("2 | ➖ Kurangin Qty");
  console.log("═══════════════════════════════");

  handleEditMenu();
}

function handleEditMenu() {
  rl.question("Mau hapus pesanan atau kurangin Qty?? : ", function (pilih) {
    if (isNaN(pilih) || pilih < 1 || pilih > 2) {
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return editPesanan();
    }

    switch (pilih) {
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

function delPes() {
  rl.question("Mau hapus nomor brapa bosz??.. : ", function (pilih) {
    const num = pilih - 1;

    if (
      isNaN(pilih) ||
      num < 0 ||
      num >= wKeranjang.length
    ) {
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return delPes();
    }

    wKeranjang.splice(num, 1);
    console.log("🗑️ ⬅ Berhasil di hapus dari keranjang bosz !! " + Wuser);

    lihatKeranjang();
  });
}

function kurQty() {
  rl.question("Mau kurangin nomor berapa bosz ❓ : ", function (pilih) {
    const num = pilih - 1;

    if (
      isNaN(pilih) ||
      num < 0 ||
      num >= wKeranjang.length
    ) {
      console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
      return kurQty();
    }

    const item = wKeranjang[num];

    rl.question("Kurangin brapa bosz ❓ :", function (kurang) {
      const number = parseInt(kurang);

      if (isNaN(number) || number <= 0) {
        console.log(`❌ Pilihannya ga ada loh ${Wuser}（ꐦ𝅒_𝅒)`);
        return kurQty();
      }

      item.qty -= number;

      if (item.qty <= 0) {
        wKeranjang.splice(num, 1);
      }

      lihatKeranjang();
    });
  });
}