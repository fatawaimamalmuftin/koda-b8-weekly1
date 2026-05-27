/**
 * URL endpoint database JSON utama aplikasi.
 *
 * @constant {string}
 */
export const DB_URL =
  "https://raw.githubusercontent.com/fatawaimamalmuftin/db.Weekly1/main/db.json";

/**
 * Mengambil response HTTP dari URL tertentu menggunakan fetch.
 *
 * Default menggunakan DB_URL jika tidak diberikan parameter.
 *
 * @async
 * @function ambilResponse
 * @param {string} [url=DB_URL] - URL sumber data JSON
 * @returns {Promise<Response>} Response fetch mentah dari server
 */
export async function ambilResponse(url = DB_URL) {
  return fetch(url);
}

/**
 * Mengubah Response fetch menjadi JSON object.
 *
 * @async
 * @function ambilJson
 * @param {Response} res - Response hasil fetch
 * @returns {Promise<Object>} Data JSON hasil parsing
 */
export async function ambilJson(res) {
  return res.json();
}

/**
 * Mengambil data JSON dari server dengan error handling.
 *
 * Flow:
 * - fetch data dari API
 * - parse JSON
 * - jika gagal → return null
 *
 * @async
 * @function getPromise
 * @returns {Promise<Object|null>} Data JSON atau null jika gagal
 */
export async function getPromise() {
  try {
    const res = await ambilResponse();
    return await ambilJson(res);
  } catch (error) {
    console.log(error);
    return null;
  }
}