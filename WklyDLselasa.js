const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//masukan nama user pengguna
rl.question("Masukan Nama Anda : ", function (nama) {
  console.log(`\nHai ${nama}, Selamat Datang di Hear Coffee ☕︎ྀི`);
  console.log("-------------------------------------------");
  //menampilkan menu
  console.log("Aneka Kopi :  ✎﹏﹏﹏﹏☕︎ᝰ.ᐟ");
  console.log("-------------------------------------------");
  console.log("1. | Kopi Hear");
  console.log("2. | Cafe Latte");
  console.log("3. | Cappuccino");
  console.log("4. | Espresso");
  console.log("5. | Americano");
  console.log("6. | Signature V60");
  console.log("7. | Vietnam Drip");
  console.log("8. | Espresso BOOM~!");
  console.log("9. | Kopi Gula Aren");
  console.log("10.| Machiato");
  console.log("-------------------------------------------");
  rl.question("Masukan Nomor Menu yang Ingin Dipesan : ", function (checkOut) {
    const user = nama;
    let CO = checkOut;
    if (isNaN(CO)) {
      console.log("Input tidak valid. Silakan masukkan nomor menu yang benar.");
      rl.close();
      return;
    } else {
      switch (checkOut) {
        case "1":
          CO = "1. Kopi Hear";
          console.log("Anda telah memesan Kopi Hear");
          break;
        case "2":
          CO = "2. Cafe Latte";
          console.log("Anda telah memesan Cafe Latte");
          break;
        case "3":
          CO = "3. Cappuccino";
          console.log("Anda telah memesan Cappuccino");
          break;
        case "4":
          CO = "4. Espresso";
          console.log("Anda telah memesan Espresso");
          break;
        case "5":
          CO = "5. Americano";
          console.log("Anda telah memesan Americano");
          break;
        case "6":
          CO = "6. Signature V60";
          console.log("Anda telah memesan Signature V60");
          break;
        case "7":
          CO = "7. Vietnam Drip";
          console.log("Anda telah memesan Vietnam Drip");
          break;
        case "8":
          CO = "8. Espresso BOOM~!";
          console.log("Anda telah memesan Espresso BOOM~!");
          break;
        case "9":
          CO = "9. Kopi Gula Aren";
          console.log("Anda telah memesan Kopi Gula Aren");
          break;
        case "10":
          CO = "10. Machiato";
          console.log("Anda telah memesan Machiato");
          break;
        default:
          console.log("Menu tidak valid");

          rl.close();
      }
    }
  });
});
