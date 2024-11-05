"use strict";
console.clear();
/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/
// const gioco = prompt("Acosa vuoi giocare ? (dadi o paridispari)");

// if (gioco === "dadi") {
//   playDice();
// } else if (gioco === "paridispari") {
//   EvenOdd();
// } else {
//   console.log("Questo gioco non c'è");
// }

function playDice() {
  const numeroMassimo = 6;
  const numeroMinimo = 1;

  const randomNumberPc = generaNumeroRandom(numeroMinimo, numeroMassimo);
  console.log(randomNumberPc);

  const randNumberUser = generaNumeroRandom(numeroMinimo, numeroMassimo);

  let messaggio = `
 Il tuo numero era ${randNumberUser},
 Il numero del computer era ${randomNumberPc}, quindi `;

  if (randomNumberPc > randNumberUser) {
    console.log(messaggio + "Hai perso!");
  } else if (randomNumberPc < randNumberUser) {
    console.log(messaggio + "Hai vinto!");
  } else {
    console.log(messaggio + "Partita pari");
  }
}

function EvenOdd() {
  const rndNumPc = generaNumeroRandom(1, 10);
  console.log("num pc:", rndNumPc);

  const numUser = parseInt(prompt("Inserisci un  numero tra 1 e 10"));
  console.log("num user:", numUser);

  const userChoice = prompt("Scegli pari o dispari");
  console.log(userChoice);

  const somma = rndNumPc + numUser;
  console.log("somma:", somma);

  const pariDispari = pariOdispari(somma);
  console.log(pariDispari);

  if (pariDispari === userChoice.toLocaleLowerCase()) {
    console.log("Hai vinto!");
  } else {
    console.log("Hai perso");
  }
}

const text = "Otto";
//["C", "a","s","a"] > ["a","s","a","C"]>"asaC"

const reversedText = giraParola(text);
if (text.toLowerCase === reversedText.toLowerCase()) {
  console.log("La parola palindroma");
}

//const reversedText = text.split("").reverse().join("");//

console.log(reversedText);

function giraParola(parola) {
  let reversedParola = "";

  for (let i = parola.length - 1; i >= 0; i--) {
    reversedParola = reversedParola + parola[i];
    //console.log(reversedText);
  }
  return reversedParola;
}
