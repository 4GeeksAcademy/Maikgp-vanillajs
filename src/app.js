/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // listado de opciones de excusas //
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    console.log(document.getElementById("excuse"));
    document.getElementById("excuse").innerHTML = excuse;
  }

  // Llamada a la función para generar la excusa al cargar la página
  generateExcuse();

  // Agregar evento al botón para generar excusas
  document
    .getElementById("generateExcuseBtn")
    .addEventListener("click", generateExcuse);
  console.log("Generador de excusas inicializado!");
};
// Para crear una excusa consistente, tienes que concatenar un elemento de cada array o arreglo en el orden correcto. //
// Usa la función onload y establece la excusa en el innerHTML del elemento HTML #excuse. preguntar!!!!!!!! //
