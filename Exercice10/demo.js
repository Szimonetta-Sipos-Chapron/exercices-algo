let n = Number(prompt("Valeur ?"))

let somme = 0

for(let index = 1; index <= n ; index++)
{
    console.log("Je lis : " + index)

    somme = somme + index

    console.log("Ma somme est egale à  : " + somme)
}

console.log("La SOMME FINALE EST " + somme)