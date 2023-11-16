let table = [];

const nbElements = Number(prompt("Saisissez le nombre d'éléments : "));

for(let index = 1; index <= nbElements; index++)
{
    const value = Number(prompt("Element " + index + " : "));

    table.push(value)

    if(table.length === nbElements)
    {
        let even = 0;
        let odd = 0;

        for(let n = 0; n < table.length; n++)
        {
            if(table[n] % 2 === 0)
            {
                even++;
            } 
            else
            {
                odd++;
            }
        }
        console.log("Le nombre d'éléments pairs dans le tableau est : " + even);
        console.log("Le nombre d'éléments impairs dans le tableau est : " + odd);
    }
};