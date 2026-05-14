const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Kmenu = [
  { minuman: "Kopi Hear", harga: 31000 },
  { minuman: "Cafe Latte", harga: 38000 },
  { minuman: "Cappuccino", harga: 31000 },
  { minuman: "Espresso", harga: 20000 },
  { minuman: "Americano", harga: 25000 },
  { minuman: "Signature V60", harga: 40000 },
  { minuman: "Vietnam Drip", harga: 30000 },
  { minuman: "Espresso BOOM~!", harga: 50000 },
  { minuman: "Kopi Gula Aren", harga: 48000 },
  { minuman: "Machiato", harga: 48000 },
];

let Mminuman = [];
let CO = [];

rl.question("Masukan Nama Anda : ", function (nama) {
  //menampilkan menu dengan nama yang sedang memesan
  console.log(`\nHai ${nama}, Selamat Datang di Hear Coffee ☕︎ྀི`);
  function ulangMenu() {
    //
    console.log("---------------------------------------------");
    console.log("Aneka Kopi :✎﹏﹏ Hear | Caffee (っ-,-)つ☕ ﹏");
    console.log("---------------------------------------------");
    for (let i = 0; i < Kmenu.length; i++) {
      Mminuman.push(
        `   | ${i + 1}. ${Kmenu[i].minuman} - Rp. ${Kmenu[i].harga} ☕︎.ᐟ\n`,
      );
      //   console.log("---------------------------------------------");
      console.log(Mminuman[i]);
      console.log("---------------------------------------------");
    }
    rl.question(
      "Masukan sesuai nomor menu yg ingin di pesan : ",
      function (checkOut) {
        if (isNaN(checkOut) || checkOut < 1 || checkOut > Kmenu.length) {
          console.log("Input sesuai nomor menu..!");
          return ulangMenu();
        }
        switch (checkOut) {
          case "1":
            CO.push[`1. ${Kmenu[0].minuman} - Rp. ${Kmenu[0].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "2":
            CO.push[`2. ${Kmenu[1].minuman} - Rp. ${Kmenu[1].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "3":
            CO.push[`3. ${Kmenu[2].minuman} - Rp. ${Kmenu[2].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "4":
            CO.push[`4. ${Kmenu[3].minuman} - Rp. ${Kmenu[3].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "5":
            CO.push[`5. ${Kmenu[4].minuman} - Rp. ${Kmenu[4].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "6":
            CO.push[`6. ${Kmenu[5].minuman} - Rp. ${Kmenu[5].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "7":
            CO.push[`7. ${Kmenu[6].minuman} - Rp. ${Kmenu[6].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "8":
            CO.push[`8. ${Kmenu[7].minuman} - Rp. ${Kmenu[7].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "9":
            CO.push[`9. ${Kmenu[8].minuman} - Rp. ${Kmenu[8].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          case "10":
            CO.push[`10. ${Kmenu[9].minuman} - Rp. ${Kmenu[9].harga}`];
            console.log(`pesanan anda sudah masuk keranjang : ${CO}`);
            ulangMenu();
            break;
          default:
            console.log(
              "Input tidak valid. Silakan pilih nomor menu yang tersedia.",
            );
            ulangMenu();
        }
      },
    );
  }
  ulangMenu();
});
