//asyncrhorous hendling, fetching data dari github

/**
 * @typedef {Object} MenuItem
 * @property {string} nama Nama menu
 * @property {number} harga Harga menu
 */

/**
 * @typedef {Object} MenuData
 * @property {MenuItem<Array>} menuKopi Daftar menu kopi
 * @property {MenuItem<ar>} menuDesert Daftar menu dessert
 */

export async function getPromise() {
  try {
    let res = await fetch(
      "https://raw.githubusercontent.com/fatawaimamalmuftin/db.Weekly1/main/db.json",
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
}
