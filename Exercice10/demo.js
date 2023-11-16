let n = Number(prompt("Saisissez un nombre : "));

let sum = 0;

for(let index = 1; index <= n ; index++)
{
    console.log("Je suis à : " + index)

    sum = sum + index

    console.log("Ma somme est égale à  : " + sum)
};

console.log("LA SOMME FINALE EST : " + sum);