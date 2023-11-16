let table = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments : "));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element positif ou négatif " + index + " : "))

    table.push(value)
};


for(let index = 0; index < table.length; index++)
{
    if(table[index] < 0)
    {
        console.log("Les éléments négatifs dans mon tableau sont : " + table[index])
    }
};


