function findTheBiggestV2(value1, value2)
{
    let result

    if(value1 > value2)
    {
        result = 1
    } 
    else if (value1 < value2)
    {
        result = -1
    } 
    else 
    {
        result = 0
    }

    return result
}

const userValue1 = Number(prompt("Saisissez le premier nombre : "));

const userValue2 = Number(prompt("Saisissez le second nombre : "));

const functionResultV2 = findTheBiggestV2(userValue1,userValue2);

console.log(functionResultV2);