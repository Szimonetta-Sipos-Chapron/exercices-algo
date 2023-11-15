/*let unTableau = []

const nbElement = Number(prompt("Saisir le nombre d'éléments :"))

for(let index = 1; index <= nbElement; index++)
{
    const laValeur = prompt("Element " + index + " : ")

    if(laValeur < 0)
    {
        unTableau.push(laValeur)
    }
}

console.log(unTableau)*/



let unTableau = []

const nbElement = Number(prompt("Saisir le nombre d'éléments :"))

for(let index = 1; index <= nbElement; index++)
{
    const laValeur = prompt("Element " + index + " : ")

    unTableau.push(laValeur)
}


for(let index = 0; index < unTableau.length; index++)
{
    if(unTableau[index] < 0)
    {
        console.log(unTableau[index])
    }
}


