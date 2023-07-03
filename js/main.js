/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero con i prompt.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> del mio codice HTML*/


let km = parseInt(prompt("Per favore, inserisci quanti chilometri desideri percorrere"));
console.log('km passeggero:' + km);
let age = parseInt(prompt("inserisci la tua eta"));
console.log('eta passegero:' + age);
/*calcolare prezzo totale del viaggio  creiamo una variabile  per poter calcolare  il prezzo del biglietto */

var price = 0.21;

var price = km * price;

console.log(' prezzo in base ai chilometri ' + price);

/*creiamo variabili per gli sconti */
let discount1 = price - price * 0.20;
let discount2 = price - price * 0.40;

/*applichiamo sconto del 20% per i minorenni*/
if (age < 18) {
    console.log("posso ricevere lo sconto del 20%!!!");
}
else {
    console.log(" non posso ricevere lo sconto :(");
}
/*applichiamo sconto del 40& per gli over 65 */
if (age >= 65) {
    console.log("Posso ricevere lo sconto del 40%");

}
else {

    console.log("non posso ricevere lo sconto....");
}

