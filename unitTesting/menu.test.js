import {describe, it} from "node:test";
import assert from "assert";

import {wKeranjang} from "../lihatKeranjang.js";

describe("Testing logic menu.js", () => {

  const Tmenu = [
    {
      nama: "Americano",
      harga: 15000,
    },
    {
      nama: "Latte",
      harga: 20000,
    },
  ];

  describe("data menu", () => {

    it("harus memiliki jumlah menu yang benar", () => {
      assert.equal(Tmenu.length, 2);
    });

    it("harus memiliki nama menu yang benar", () => {
      assert.equal(Tmenu[0].nama, "Americano");
    });

    it("harus memiliki harga menu yang benar", () => {
      assert.equal(Tmenu[0].harga, 15000);
    });

  });

  describe("logic keranjang", () => {

    it("harus bisa menambahkan item ke keranjang", () => {
      wKeranjang.length = 0;

      wKeranjang.push({
        nama: Tmenu[0].nama,
        harga: Tmenu[0].harga,
        qty: parseInt(2),
      });

      assert.equal(wKeranjang.length, 1);
      assert.equal(wKeranjang[0].nama, "Americano");
      assert.equal(wKeranjang[0].harga, 15000);
      assert.equal(wKeranjang[0].qty, 2);
    });

    it("harus bisa di hitung subtotal item", () => {
      const subtotal =
        wKeranjang[0].harga * wKeranjang[0].qty;

      assert.equal(subtotal, 30000);
    });

    it("harus bisa di hitung total seluruh keranjang", () => {
      let total = 0;

      for (let i = 0; i < wKeranjang.length; i++) {
        total +=
          wKeranjang[i].harga * wKeranjang[i].qty;
      }

      assert.equal(total, 50000);
    });

    it("qty harus berupa number", () => {
      assert.equal(typeof wKeranjang[0].qty, "number");
    });

  });

});