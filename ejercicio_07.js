// Ejercicio 7: Comprobando si Todos los Pergaminos son Legibles
// Instrucciones: Verifica si todos los pergaminos tienen un valor mayor a 60.
const pergaminos = [65, 70, 85, 90, 50];
// Escribe tu solución aquí usando every():
let respuesta=pergaminos.every(function(pergaminos){
  return (pergaminos>60)
})
console.log(respuesta)
