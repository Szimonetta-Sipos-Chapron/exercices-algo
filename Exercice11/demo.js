
let unTableau = []

const nbElement = Number(prompt("Saisir le nombre d'éléments :"))

for(let index = 1; index <= nbElement; index++)
{
    const laValeur = prompt("Element " + index + " : ")
    unTableau.push(laValeur)
}

console.log(unTableau)





