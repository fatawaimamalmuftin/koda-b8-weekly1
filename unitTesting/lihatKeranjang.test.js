import {describe, it} from "node:test";
import assert from "assert";

import {
  wKeranjang,
  checkOut,
  lihatKeranjang,
} from "../lihatKeranjang.js";

describe("Testing logic lihatKeranjang.js", () => {

  describe("wKeranjang", () => {

    it("harus berupa array", () => {
      assert.equal(Array.isArray(wKeranjang), true);
    });

    it("harus bisa menambah item ke keranjang", () => {
      wKeranjang.length = 0;

      wKeranjang.push({
        nama: "Americano",
        harga: 15000,
        qty: 2,
      });

      assert.equal(wKeranjang.length, 1);
      assert.equal(wKeranjang[0].nama, "Americano");
      assert.equal(wKeranjang[0].harga, 15000);
      assert.equal(wKeranjang[0].qty, 2);
    });

    it("harus bisa menghitung subtotal item", () => {
      const subtotal =
        wKeranjang[0].harga * wKeranjang[0].qty;

      assert.equal(subtotal, 30000);
    });

    it("harus bisa menghitung total semua item", () => {
      wKeranjang.push({
        nama: "Cheesecake",
        harga: 20000,
        qty: 1,
      });

      let total = 0;

      for (let i = 0; i < wKeranjang.length; i++) {
        const item = wKeranjang[i];
        total += item.harga * item.qty;
      }

      assert.equal(total, 50000);
    });

    it("harus bisa mengurangi qty item", () => {
      wKeranjang[0].qty -= 1;

      assert.equal(wKeranjang[0].qty, 1);
    });

    it("harus bisa menghapus item jika qty <= 0", () => {
      wKeranjang[0].qty -= 1;

      if (wKeranjang[0].qty <= 0) {
        wKeranjang.splice(0, 1);
      }

      assert.equal(wKeranjang.length, 1);
      assert.equal(wKeranjang[0].nama, "Cheesecake");
    });

    it("harus bisa menghapus item dari keranjang", () => {
      wKeranjang.splice(0, 1);

      assert.equal(wKeranjang.length, 0);
    });

  });

  describe("function execution", () => {

    it("lihatKeranjang() tidak error saat dijalankan", () => {
      assert.equal(typeof lihatKeranjang(), "undefined");
    });

    it("checkOut() tidak error saat dijalankan", () => {
      assert.equal(typeof checkOut(), "undefined");
    });

  });

});