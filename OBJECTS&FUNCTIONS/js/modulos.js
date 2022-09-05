import saludar, {Saludar, PI, usuario } from "./consts.js"
import {aritmetica as calculos} from "./arith.js"

console.log("Archivos modulos.js")
console.log(PI, usuario)

// console.log(aritmetica.sumar(1,2))
// console.log(aritmetica.restar(2,1))

console.log(calculos.sumar(1,2))
console.log(calculos.restar(2,1))

let saludo = new Saludar()
saludo
saludar()