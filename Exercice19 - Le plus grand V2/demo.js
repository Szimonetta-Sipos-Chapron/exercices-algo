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

const value1 = Number(prompt("Saisissez le premier nombre : "))

const value2 = Number(prompt("Saisissez le second nombre : "))

const functionResultV2 = findTheBiggestV2(value1,value2)

alert(functionResultV2)