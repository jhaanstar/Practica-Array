// Ejercicio 2: Ordenando los Objetos Mágicos
// Instrucciones: Ordena los objetos mágicos de mayor a menor poder.
const objetosMagicos = [20, 60, 45, 80, 90, 30];
objetosMagicos.sort(function(a, b) {
  return b - a; 
})
console.log(objetosMagicos)//[90, 80, 60, 45, 30, 20]

