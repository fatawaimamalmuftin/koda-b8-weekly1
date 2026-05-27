import test from "node:test";
import assert from "node:assert";
import {
  hitungTotal,
  hapusItem,
  kurangiQty
} from "../keranjangService.js";

test("hitung total", () => {
  const keranjang = [
    { harga: 10000, qty: 2 }
  ];

  assert.strictEqual(hitungTotal(keranjang), 20000);
});

test("hapus item", () => {
  const keranjang = [
    { nama: "A" },
    { nama: "B" }
  ];

  hapusItem(keranjang, 0);

  assert.strictEqual(keranjang.length, 1);
});

test("kurangi qty", () => {
  const item = { qty: 5 };

  kurangiQty(item, 2);

  assert.strictEqual(item.qty, 3);
});