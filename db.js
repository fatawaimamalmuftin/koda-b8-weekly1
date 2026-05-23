//asyncrhorous hendling, fetching data dari github
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
