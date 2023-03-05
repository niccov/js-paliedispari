/*ESERCIZIO 1
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
___________________________________________________________________________
-memorizzo un campo di input in una variabile
-memorizzo il button in un variabile
-memorizzo l'elmento html dove stamperà il risultato
-aggiungo l'event listener del click al buttonWordElement che avrà come funzione il checkPalindrome 
-? SE il risultato della funzione è TRUE 
   .stampa nel documento che "è palindroma"
-:ALTRIMENTI 
   .stampa nel documento che "non è palindroma"

-imposto la funzione per controllare se la parola che inserisce l'utente è PALINDROMA
-variabile sentinella per controllare alla fine del ciclo se la parola è palindroma
-variabili per controllare il primo elemento dell'array e l'ultimo
-variabile contatore inizializzata a zero
-ciclo WHILE che itera sinchè la prima e l'ultima lettera sono uguali andando verso il centro dell'array e sinchè il contatore rimane minore della lunghezza della parola inserita
-?SE il primo elemento dell'array è uguale all'ultimo
    .stampa in console il confronto tra i due elementi
-ALTRIMENTI      
    .stampa in console il confronto tra i due elementi + "non uguali"  
    .e restituiscimi il valore false alla FUNZIONE  

-se il valore della funzione è ancora TRUE 
-aggiungi alla variabile start + 1 e al valore end - 1 (quindi scorri nell'array verso il centro)
-aggiungi + 1 al contatore
-stampa in console tutto il controllo
-restituisci il risultato della funzione (o TRUE o FALSE)   
*/


//memorizzo un campo di input in una variabile
let wordElement = document.getElementById("campo-parola");
//memorizzo il button in un variabile
let buttonWordElement = document.getElementById("button-palindroma");
//memorizzo l'elmento html dove stamperà il risultato
let risultElement = document.getElementById("risultato");

//aggiungo l'event listener del click al buttonWordElement che avrà come funzione il checkPalindrome 
buttonWordElement.addEventListener("click", function() {

    //? SE il risultato della funzione è TRUE 
    if(checkPalindrome(wordElement.value)) {
        //.stampa nel documento che "è palindroma"
        risultElement.innerText = "è palindroma";
     
    //:ALTRIMENTI     
    } else {

        //stampa nel documento che "non è palindroma"
        risultElement.innerText = "non è palindroma"
    }
})


//imposto la funzione per controllare se la parola che inserisce l'utente è PALINDROMA 
function checkPalindrome(str) {

    //variabile sentinella per controllare alla fine del ciclo se la parola è palindroma
    let checkPalindrome = true;

    //variabili per controllare il primo elemento dell'array e l'ultimo
    let start = 0;
    let end = str.length - 1;

    //variabile contatore inizializzata a zero
    let contatore = 0;

    //ciclo WHILE che itera sinchè la prima e l'ultima lettera sono uguali andando verso il centro dell'array e sinchè il contatore rimane minore della lunghezza della parola inserita
    while(checkPalindrome && contatore < str.length) {

        //?SE il primo elemento dell'array è uguale all'ultimo
        if(str[start] == str[end]) {
            //stampa in console il confronto tra i due elementi
            console.log(str[start], str[end]);
        
        //ALTRIMENTI    
        } else {

            //stampa in console il confronto tra i due elementi + "non uguali"
            console.log(str[start], str[end], "non uguali");

            //e restituiscimi il valore false alla FUNZIONE
            checkPalindrome = false;

        }

        //se il valore della funzione è ancora TRUE 

        // aggiungi alla variabile start + 1 e al valore end - 1 (quindi scorri nell'array verso il centro)
        start++;
        end--;

        //aggiungi + 1 al contatore
        contatore++;

        //stampa in console tutto il controllo
        console.log(checkPalindrome);
    }

    //restituisci il risultato della funzione (o TRUE o FALSE)
    return checkPalindrome;
}

/*ESERCIZIO 2
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/