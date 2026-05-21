// Implement functions here 👇
function rankineToKelvin (value) {
    if (typeof value === "number") {
        return value * 5/9;
    } else {
        throw (new Error ("Input must be number"));
        retun 
    }
}

function rankineToFahrenheit (value) { 
    if (typeof value !== "number") { 
      throw new Error("Input must be number"); 
    }
    return value - 459.67
}


// TODO: Uncomment after implemented
module.exports = {
  // rankineToCelsius,
  rankineToKelvin,
  rankineToFahrenheit,
};
