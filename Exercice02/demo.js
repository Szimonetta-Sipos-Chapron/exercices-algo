/*let num = Number(prompt("Entrez un nombre : "))

if (num % 3 === 0 && num % 13 === 0) {
    console.log(num + " est divisible par 3 et 13");
}
else {
    console.log(num + " n'est pas divisible par 3 et 13");
}


let valeur2 = prompt("Ce nombre est-il divisible par 3 et 13 ?") 
let myBoolean = (valeur2%3==0 && valeur2%13==0) 
console.log(myBoolean)
*/


let unNombre = Number(prompt("Saisissez un nombre"))

if(unNombre % 3 == 0)
{
  if(unNombre % 13 == 0)
  {
    console.log("Cette valeur est divisible par 3 et 13")
  }else{
    console.log("Cette valeur n'est pas divisible par 3 et 13")
  }
}else{
    console.log("Cette valeur n'est pas divisible par 3 et 13")
}