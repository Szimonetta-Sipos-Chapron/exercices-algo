let table = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments : "));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element " + index + " : "));

    table.push(value);

    if(table.length === nbElements)
    {
        table.sort((a,b) => b - a);

        const max = Math.max(...table)
        const secondMax = table[1]

        console.log("Le maximum du tablea est : " + max);
        console.log("Le secons plus grand du tableau est : " + secondMax);
    };
};