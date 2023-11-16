const randomNumber = Number(prompt("Saisissez un nombre : "));

if(randomNumber % 3 == 0)
{
  if(randomNumber % 13 == 0)
  {
    console.log("Ce nombre est divisible par 3 et 13.")
  }else{
    console.log("Ce nombre n'est pas divisible par 3 et 13.")
  }
}else{
    console.log("Ce nombre n'est pas divisible par 3 et 13.")
};