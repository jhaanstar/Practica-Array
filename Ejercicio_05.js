// Ejercicio 5: Conteo de Espadas Potentes
// Instrucciones: Cuenta cuántas espadas tienen un poder mayor a 50.
const espadas = [20, 60, 45, 80, 90, 30];
let espada= espadas.reduce((acc,espada)=>{if (espada>50){return acc +1} ;
return acc},0)
console.log(espada)
