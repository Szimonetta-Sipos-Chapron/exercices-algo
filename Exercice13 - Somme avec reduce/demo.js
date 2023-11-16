let table = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments : "));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element " + index + " : "))

    table.push(value)

    if(table.length === nbElements){
        const sum = table.reduce((acc, curr) => acc + curr, 0);

        console.log("Les éléments saisis dans le tableau sont : " + table);
        console.log("La somme des éléments dans le tableau est : " + sum);
    }
};

