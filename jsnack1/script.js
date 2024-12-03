// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

let firstNumber = (prompt("Inserisci il primo numero:"));
let secondNumber = (prompt("Inserisci il secondo numero:"));

if (firstNumber > secondNumber) {
    alert(`Il numero maggiore è: ${firstNumber}`);
    } else if (secondNumber > firstNumber) {
    alert(`Il numero maggiore è: ${secondNumber}`);
    } else {
    alert("I numeri sono uguali.");
    }