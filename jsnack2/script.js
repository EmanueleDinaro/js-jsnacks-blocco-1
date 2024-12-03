// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const partyNames = ["Mattia", "Francesco", "Federico", "Franco", "Pippo", "Giulio"];
const userName = prompt("Qual è il tuo nome?");

let isNameIn = false;

for (let i = 0; i < partyNames.length; i++) {
    if (partyNames[i] === userName) {
        isNameIn = true;
    }
}

if (isNameIn) {
    alert(`Benvenuto alla festa, ${userName}`);
    } else {
    alert(`${userName} non sei nella lista`);
    }