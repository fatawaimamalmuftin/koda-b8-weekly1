function pertama(cb, nama) {
  cb(nama);
}

function kedua(nama) {
  console.log(`hallo ${nama}`);
}

pertama(kedua, "muftin");
