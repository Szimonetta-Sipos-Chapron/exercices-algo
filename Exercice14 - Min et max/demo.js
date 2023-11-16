let table = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments : "));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element " + index + " : "));

    table.push(value);

    if(table.length === nbElements){
        const min = Math.min(...table);
        const max = Math.max(...table);

        console.log('Le minimum du tableau est : ' + min);
        console.log('Le maximum du tableau est : ' + max);
    }
};
