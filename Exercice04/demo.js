const uneLettre = String(prompt("Saisissez une lettre de l'aphabet"));

const lettreMinuscule = uneLettre.toLocaleLowerCase();

if (
    lettreMinuscule == 'a' || 
    lettreMinuscule == 'e' || 
    lettreMinuscule == 'i' || 
    lettreMinuscule == 'o' ||
    lettreMinuscule == 'u' ||
    lettreMinuscule == 'y' )
     {
        console.log("Cette lettre est une voyelle.")
     }else{
        console.log("Cette lettre est une consonne.")
     }