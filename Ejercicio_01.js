// Ejercicio 1: Filtrando Objetos Mágicos Válidos
// Instrucciones: Filtra los objetos mágicos cuyo nivel de poder sea mayor a 50.
const objetosMagicos = [20, 60, 45, 80, 90, 30];
// Escribe tu solución aquí usando filter():
let objetosmayora50=[objetosMagicos.filter(num=> num>=50)]
console.log(objetosmayora50)//[ [ 60, 80, 90 ] ]
