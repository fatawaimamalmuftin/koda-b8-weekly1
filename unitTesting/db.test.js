import test from "node:test";
import assert from "node:assert";
import { getPromise } from "../db.js";

// simulasi mock fetch berhasil
test("harus mengembalikan data menu kopi dan desert", async () => {

  // membuat mock/palsu fetch
  // jadi test tidak request langsung ke internet
  global.fetch = async () => ({

    // simulasi res json dari API/github
    json: async () => ({
      menuKopi: [
        {
          nama: "Kopi Hear",
          harga: 31000,
        },
      ],

      menuDesert: [
        {
          nama: "Croissant Butter",
          harga: 20000,
        },
      ],
    }),
  });

  // menjalankan function yang mau di test
  const hasil = await getPromise();

  // hasil tidak null / undefined
  assert.ok(hasil);

  // menuKopi harus berupa array
  assert.ok(Array.isArray(hasil.menuKopi));

  // menuDesert hasrus berupa array
  assert.ok(Array.isArray(hasil.menuDesert));

  // nama kopi pertama harus sesuai
  assert.strictEqual(hasil.menuKopi[0].nama, "Kopi Hear");

  // harga desert hasrus pertama harus sesuai
  assert.strictEqual(hasil.menuDesert[0].harga, 20000);
});


// simulasi mock fetch gagal
test("harus mengembalikan null jika fetch error", async () => {

  // membuat simulasi mock fetch gagal/error
  global.fetch = async () => {
    throw new Error("Gagal fetch");
  };

  const hasil = await getPromise();

  // memastikan hasil akhirnya null
  // karena di catch function db.js return null
  assert.strictEqual(hasil, null);
});