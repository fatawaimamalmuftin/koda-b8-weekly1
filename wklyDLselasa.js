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
rl.question("Masukan Nama Anda : ", function (nama) {
  //menampilkan menu dengan nama yang sedang memesan
  console.log(`\nHai ${nama}, Selamat Datang di Hear Coffee ☕︎ྀི`);
  function ulangMenu() {
    let keranjangTunggu = [];
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
            keranjangTunggu.push({
              minuman: Kmenu[0].minuman,
              harga: Kmenu[0].harga,
            });
            console.log(`\nKopi Hear sudah masuk keranjang ✅️\n`);
            rl.question("Mau pesen lagi? Y/N ", function (y, n) {
              if (y) {
                ulangMenu();
              }
            });
            // ulangMenu();
            break;
          case "2":
            keranjangTunggu.push({
              minuman: Kmenu[1].minuman,
              harga: Kmenu[1].harga,
            });
            console.log(`\nCafe Latte sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "3":
            keranjangTunggu.push({
              minuman: Kmenu[2].minuman,
              harga: Kmenu[2].harga,
            });
            console.log(`\nCappuccino sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "4":
            keranjangTunggu.push({
              minuman: Kmenu[3].minuman,
              harga: Kmenu[3].harga,
            });
            console.log(`\nEspresso sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "5":
            keranjangTunggu.push({
              minuman: Kmenu[4].minuman,
              harga: Kmenu[4].harga,
            });
            console.log(`\nAmericano sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "6":
            keranjangTunggu.push({
              minuman: Kmenu[5].minuman,
              harga: Kmenu[5].harga,
            });
            console.log(`\nSignature V60 sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "7":
            keranjangTunggu.push({
              minuman: Kmenu[6].minuman,
              harga: Kmenu[6].harga,
            });
            console.log(`\nVietnam Drip sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "8":
            keranjangTunggu.push({
              minuman: Kmenu[7].minuman,
              harga: Kmenu[7].harga,
            });
            console.log(`\nEspresso BOOM~! sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "9":
            keranjangTunggu.push({
              minuman: Kmenu[8].minuman,
              harga: Kmenu[8].harga,
            });
            console.log(`\nKopi Gula Aren sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          case "10":
            keranjangTunggu.push({
              minuman: Kmenu[9].minuman,
              harga: Kmenu[9].harga,
            });
            console.log(`\nMachiato sudah masuk keranjang ✅️\n`);
            if (y) {
              ulangMenu();
            }
            break;
          default:
            console.log(
              "\nInput tidak valid. Silakan pilih nomor menu yang tersedia.",
            );
            ulangMenu();
        }
      },
    );
  }
  ulangMenu();
});

// console.log(CO);
