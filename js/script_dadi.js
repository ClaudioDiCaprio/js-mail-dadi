// ****************** DADI******************


// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// 1. dobbiamo creare una variabile per ogni elemaneto necessario in modo da poterla richiamare ed essendo la variabile composta da un numero random la sviluppiamo con un math.floor nella dichiarazione

let  player = Math.floor(Math.random() * 6) + 1;
console.log('Player score: ' + player);
let  R1 = Math.floor(Math.random() * 6) + 1;
console.log('Player score: ' + R1);

// potremmo utilizzare un ciclo for per svilupopare il confronto dei risultati, ma siccome non c'é bisogno di generare di volta in volta tutti gli eventi del ciclo, ma semplicemente uno casuale per ogni costante allora generiamo una condizione:

if (player > R1) {
    console.log (' player WINS! ');
}else if ( R1 > player ) {
    console.log ('R1 WINS!');
} else {
    console.log ('EVEN!')
}