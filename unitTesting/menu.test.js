import test from "node:test";
import assert from "node:assert";
import { getPromise } from "../db.js"; // 🔥 pastikan ini benar path

test("fetch berhasil", async () => {
  global.fetch = async () => ({
    json: async () => ({
      menuKopi: [{ nama: "Kopi Hear", harga: 31000 }],
      menuDesert: [{ nama: "Croissant Butter", harga: 20000 }],
    }),
  });

  const result = await getPromise();

  assert.ok(result);
  assert.ok(Array.isArray(result.menuKopi));
  assert.ok(Array.isArray(result.menuDesert));
});