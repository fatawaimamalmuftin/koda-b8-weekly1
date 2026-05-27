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