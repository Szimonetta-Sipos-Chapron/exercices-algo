const number1 = Number(prompt("1er nombre ?"));

const number2 = Number(prompt("2eme nombre ?"));

const number3 = Number(prompt("3eme nombre ?"));

if (number1 >= number2 && number1 >= number3)
{
    console.log("Le plus grand nombre est : " + number1)
}
else if (number2 >= number1 && number2 >= number3)
{
    console.log("Le plus grand nombre est : " + number2)
}
else 
{
    console.log("Le plus grand nombre est : " + number3)
};