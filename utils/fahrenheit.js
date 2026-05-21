// Implement functions here 👇
function fahrenheitToCelsius(value) {
  return (value - 32) * 5 / 9;
}
function fahrenheitToKelvin(value) {
  return (value - 32) * 5 / 9 + 273.15;
}
function fahrenheitToRankine(value) {
  return value + 459.67;
}
// TODO: Uncomment after implemented
module.exports = {
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  fahrenheitToRankine,
};
