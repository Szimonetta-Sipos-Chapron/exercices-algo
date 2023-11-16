function findTheBiggest(value1, value2)
{
    let result

    if (value1 > value2) {
        result = value1
    }
    else{
        result = value2
    }

    return result
};

const value1 = Number(prompt("Saisissez le premier nombre : "));

const value2 = Number(prompt("Saisissez le second nombre : "));

const functionResult = findTheBiggest(value1,value2);

alert("Le plus grand nombre est : " + functionResult);