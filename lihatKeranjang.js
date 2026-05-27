import { rl } from "./index.js";
import { hitungTotal, hapusItem, kurangiQty } from "./keranjangService.js";

export let wKeranjang = [];

export function lihatKeranjang() {
  console.clear();

  console.log("\n🛒 KERANJANG\n");

  if (wKeranjang.length === 0) {
    console.log("Keranjang kosong");
    return;
  }

  const total = hitungTotal(wKeranjang);

  wKeranjang.forEach((item, i) => {
    console.log(`${i + 1}. ${item.nama} x${item.qty}`);
  });

  console.log("\nTotal:", total);

  rl.question("\n1. Hapus 2. Kurangi qty : ", (p) => {
    if (p === "1") return del();
    if (p === "2") return kurang();
  });
}

function del() {
  rl.question("Index: ", (i) => {
    hapusItem(wKeranjang, Number(i) - 1);
    lihatKeranjang();
  });
}

function kurang() {
  rl.question("Index: ", (i) => {
    rl.question("Qty: ", (q) => {
      kurangiQty(wKeranjang[Number(i) - 1], Number(q));
      lihatKeranjang();
    });
  });
}