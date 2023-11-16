let table = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments :"));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element " + index + " : "))
    table.push(value)
};

console.log("Voici les éléments de tableau : " + table);





