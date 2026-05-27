export function hitungTotal(keranjang) {
  let total = 0;
  for (const item of keranjang) {
    total += item.harga * item.qty;
  }
  return total;
}

export function hapusItem(keranjang, index) {
  keranjang.splice(index, 1);
  return keranjang;
}

export function kurangiQty(item, qty) {
  item.qty -= qty;
  if (item.qty < 0) item.qty = 0;
  return item;
}