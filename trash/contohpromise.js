function quewe(name) {
  return new Promise((res, rec) => {
    setTimeout(() => {
      res(name);
    }, 3 * 1000);
  });
}

async function main() {
  try {
    const result = await quewe("nama");
    console.log(`Hallow brow ${result}`);
  } catch {
    console.log("Error");
  }
}
main();
