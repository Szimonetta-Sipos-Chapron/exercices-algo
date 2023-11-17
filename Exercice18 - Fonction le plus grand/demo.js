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

const userValue1 = Number(prompt("Saisissez le premier nombre : "));

const userValue2 = Number(prompt("Saisissez le second nombre : "));

const functionResult = findTheBiggest(userValue1,userValue2);

alert("Le plus grand nombre est : " + functionResult);