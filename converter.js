"use strict";

let answer = prompt("You want to convert to Celsium or Fahrenheit? Press C/F").trim().toLowerCase();

let degree;

if (answer === "f" ){
    degree = +prompt("Please, enter degree in Celsium to convert: ");
   alert(`It is ${toF(degree).toFixed(1)} °F`);
} else if (answer === "c"){
    degree = +prompt("Please, enter degree in Fahrenheit to convert: ");
    alert(`It is ${toC(degree).toFixed(1)} °C`);
} else {
    alert("Invalid choice. Please enter C or F.");
}

function toF(c){
    return c * 9/5 + 32;
}

function toC(f){
    return (f - 32) * 5/9;
}
