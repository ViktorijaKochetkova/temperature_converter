"use strict";

export function toF(c){
    return c * 9/5 + 32;
}

export function toC(f){
    return (f - 32) * 5/9;
}