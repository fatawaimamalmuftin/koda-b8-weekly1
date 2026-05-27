export const DB_URL =
  "https://raw.githubusercontent.com/fatawaimamalmuftin/db.Weekly1/main/db.json";

export async function ambilResponse(url = DB_URL) {
  return fetch(url);
}

export async function ambilJson(res) {
  return res.json();
}

export async function getPromise() {
  try {
    const res = await ambilResponse();
    return await ambilJson(res);
  } catch (error) {
    console.log(error);
    return null;
  }
}

// // asynchronous handling, fetching data dari github
// /**
//  * @typedef {Object} Data
//  * @property {string} nama Nama menu
//  * @property {number} harga Harga menu
//  */

// /**
//  * @typedef {Object} MenuData
//  * @property {Data[]} menuKopi Daftar menuKopi
//  * @property {Data[]} menuDesert Daftar menuDessert
//  */

// export const DB_URL = "https://raw.githubusercontent.com/fatawaimamalmuftin/db.Weekly1/main/db.json";

// /**
//  * URL database menu.
//  * @type {JSON}
//  */

// /**
//  * Mengambil response fetch dari database.
//  *
//  * @param {JSON} url
//  * @returns {Promise<Response>}
//  */

// export async function ambilResponse(url = DB_URL) {
//   return await fetch(url);
// }

// /**
//  * Mengubah response fetch dengan JSON.
//  * @param {Response} response
//  * @returns {Promise<MenuData>}
//  */

// export async function ambilJson(response) {
//   return await response.json();
// }

// /**
//  * Mengambil seluruh data menu dari database.
//  * @returns {Promise<MenuData|null>}
//  */
// export async function getPromise() {
//   try {

//     const response = await ambilResponse();

//     const data = await ambilJson(response);

//     return data;

//   } catch (error) {

//     console.log("Error: ", error);

//     return null;
//   }
// }