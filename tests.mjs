"use strict";

import { toF, toC } from "./converter-core.js";

function approxEqual(a, b, eps = 1e-9) {
    return Math.abs(a - b) < eps;
}

function test(name, fn) {
    try {
        fn();
        console.log("ok", name);
    } catch (e) {
        console.error("no", name, "\n", e);
    }
}

test("0°C → 32°F", () => {
    console.assert(approxEqual(toF(0), 32), "expected 32");
});

test("100°C → 212°F", () => {
  console.assert(approxEqual(toF(100), 212), "expected 212");
});

test("32°F → 0°C", () => {
  console.assert(approxEqual(toC(32), 0), "expected 0");
});

test("212°F → 100°C", () => {
  console.assert(approxEqual(toC(212), 100), "expected 100");
});

test("-40°C ↔ -40°F", () => {
  console.assert(approxEqual(toF(-40), -40), "expected -40°F");
  console.assert(approxEqual(toC(-40), -40), "expected -40°C");
});