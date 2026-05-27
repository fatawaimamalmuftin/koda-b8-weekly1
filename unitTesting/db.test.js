import { describe, it } from "node:test";
import assert from "node:assert";
import { getPromise } from "../db.js";

describe("Funtion mengambil data dari data", async ()=>{

  it("hasil data harut truity", async ()=>{
    // menjalankan function yang mau di test
    const hasil = await getPromise();

    // ngecek hasil true atau false
    assert.ok(hasil);

    //  menuKopi harus berupa array
    assert.ok(Array.isArray(hasil.menuKopi));
      
    // menuDesert hasrus berupa array
    assert.ok(Array.isArray(hasil.menuDesert));

    // nama kopi pertama harus sesuai
    assert.strictEqual(hasil.menuKopi[0].nama, "Kopi Hear");

    // harga desert hasrus pertama harus sesuai
    assert.strictEqual(hasil.menuDesert[0].harga, 20000);
  });

  it("harus mengembalikan null jika fetch error", async ()=>{
    // membuat simulasi mock fetch gagal/error
    global.fetch = async () => {
      throw new Error("Gagal fetch");
    };

    const hasil = await getPromise();

    // memastikan hasil akhirnya null
    // karena di catch function db.js return null
    assert.strictEqual(hasil, null);
  });
});    
// });