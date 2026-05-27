import test from "node:test";
import assert from "node:assert";
import { validasiPilihanMenu, validasiQty, tambahKeKeranjang } from "../menu.js";
import { wKeranjang } from "../lihatKeranjang.js";

/* =========================
   DUMMY DATA
========================= */

const dummyMenu = [
  { nama: "Kopi A", harga: 10000 },
  { nama: "Kopi B", harga: 20000 },
];

/* reset keranjang sebelum test */
function resetKeranjang() {
  wKeranjang.length = 0;
}

/* =========================
   TEST VALIDASI MENU
========================= */

test("validasiPilihanMenu - valid input", () => {
  assert.strictEqual(validasiPilihanMenu("1", dummyMenu), true);
});

test("validasiPilihanMenu - invalid (0)", () => {
  assert.strictEqual(validasiPilihanMenu("0", dummyMenu), false);
});

test("validasiPilihanMenu - invalid string", () => {
  assert.strictEqual(validasiPilihanMenu("abc", dummyMenu), false);
});

/* =========================
   TEST VALIDASI QTY
========================= */

test("validasiQty - valid", () => {
  assert.strictEqual(validasiQty("2"), true);
});

test("validasiQty - invalid 0", () => {
  assert.strictEqual(validasiQty("0"), false);
});

test("validasiQty - invalid string", () => {
  assert.strictEqual(validasiQty("abc"), false);
});

/* =========================
   TEST KERANJANG
========================= */

test("tambahKeKeranjang - should add item correctly", () => {
  resetKeranjang();

  tambahKeKeranjang(dummyMenu, 0, "2");

  assert.deepStrictEqual(wKeranjang, [
    {
      nama: "Kopi A",
      harga: 10000,
      qty: 2,
    },
  ]);
});

test("tambahKeKeranjang - multiple items", () => {
  resetKeranjang();

  tambahKeKeranjang(dummyMenu, 0, "1");
  tambahKeKeranjang(dummyMenu, 1, "3");

  assert.deepStrictEqual(wKeranjang, [
    { nama: "Kopi A", harga: 10000, qty: 1 },
    { nama: "Kopi B", harga: 20000, qty: 3 },
  ]);
});