const randomLetter = String(prompt("Saisissez une lettre de l'aphabet : "));

const lowercaseLetter = randomLetter.toLowerCase();

if (
   lowercaseLetter == 'a' || 
   lowercaseLetter == 'e' || 
   lowercaseLetter == 'i' || 
   lowercaseLetter == 'o' ||
   lowercaseLetter == 'u' ||
   lowercaseLetter == 'y' )
      {
        console.log("Cette lettre est une voyelle.")
      }else{
        console.log("Cette lettre est une consonne.")
      };