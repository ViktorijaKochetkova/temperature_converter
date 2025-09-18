"use strict";

let answer = prompt("You want to convert to Celsium or Fahrenheit? Press C/F").trim().toLowerCase();

let degree;

if (answer === "c" ){
    degree = +prompt("Please, enter degree in Celsium to convert: ");
   alert(toС(degree));
} else if (answer === "f"){
    degree = +prompt("Please, enter degree in Fahrenheit to convert: ");
    alert(toА(degree));
} else {
    alert("Invalid choice. Please enter C or F.");
}

function toА(degree){
    let fahrenheit= (degree * 1.8) + 32;
    return `It is ${fahrenheit.toFixed(1)} °F`;
}

function toС(degree){
    let celsium = (degree - 32) / 1.8;
    return `It is ${celsium.toFixed(1)} °C`;
}
