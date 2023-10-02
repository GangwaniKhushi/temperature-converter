const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTempUnit = document.querySelector(".temperature select");
const resultTempUnit = document.querySelector(".result select");

temperature.oninput = function(){
    let inputTempUnitValue = inputTempUnit.value;
    let resultTempUnitValue = resultTempUnit.value;


let CelciusToFahrenheit = inputTempUnitValue === "Celcius" && resultTempUnitValue === "Fahrenheit"; 
let CelciusToKelvin = inputTempUnitValue === "Celcius" && resultTempUnitValue === "Kelvin";

let KelvinToCelcius = inputTempUnitValue === "Kelvin" && resultTempUnitValue === "Celcius";
let KelvinToFahrenheit = inputTempUnitValue === "Kelvin" && resultTempUnitValue === "Fahrenheit";

let FahrenheitToCelcius = inputTempUnitValue === "Fahrenheit" && resultTempUnitValue === "Celcius";
let FahrenheitToKelvin = inputTempUnitValue === "Fahrenheit" && resultTempUnitValue ==="Kelvin";

let sameUnits = inputTempUnitValue === resultTempUnitValue;


let inputTempValue = temperature.value;
let convertedValue = 0;



if (CelciusToFahrenheit) {
    convertedValue = (9/5 * inputTempValue) + 32;
    result.value = convertedValue.toFixed(2);
}
else if (CelciusToKelvin) {
    convertedValue = (inputTempValue * 1) + 273.15;
    result.value = convertedValue.toFixed(2);
}
else if (KelvinToCelcius) {
    convertedValue = (inputTempValue - 273.15);
    result.value = convertedValue.toFixed(2);
}
else if (KelvinToFahrenheit) {
    convertedValue = 9/5 * (inputTempValue - 273.15) + 32;
    result.value = convertedValue.toFixed(2);
}
else if (FahrenheitToCelcius) {
    convertedValue = 5/9 * (inputTempValue - 32);
    result.value = convertedValue.toFixed(2);
}
else if (FahrenheitToKelvin) {
    convertedValue = 5/9 * (inputTempValue - 32) + 273.15;
    result.value = convertedValue.toFixed(2);
}
else{
    result.value = inputTempValue;
   
}
}