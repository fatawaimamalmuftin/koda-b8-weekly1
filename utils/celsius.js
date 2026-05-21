function celsiusToKelvin(value) {
  return value + 273.15;
}
function celsiusToRankine(value) {
  return (value + 273.15) * 1.8;
}
function celsiusToFahrenheit(value) {
  return (value * 9 / 5) + 32;
}



module.exports = {
  celsiusToKelvin,
  celsiusToRankine,
  celsiusToFahrenheit
};