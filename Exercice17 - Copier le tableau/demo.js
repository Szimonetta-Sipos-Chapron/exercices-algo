let table1 = [];
let table2 = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments : "));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element " + index + " : "));

    table1.push(value)

    if(table1.length === nbElements)
    {
        table2 = [...table1]
    }
};

console.log("Les éléments du tableau source sont : " + table1);
console.log("Les éléments du tableau copié sont : " + table2);