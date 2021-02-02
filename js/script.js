"use strict";


let num = 266219;
let str = num.toString().split('');
let sum = 1;

console.log(str);


for (let i = 0; i < str.length; i++) {
 
  sum = sum * str[i];
	
}

sum = sum ** 3 ;

console.log(sum);
console.log(sum.toString().slice(0, 2));