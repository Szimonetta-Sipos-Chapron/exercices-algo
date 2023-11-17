function isEven(number)
{
    let result

    if(number % 2 === 0)
    {
        result = true
    }
    else
    {
        result = false
    }
        return result
};

const userNumber = Number(prompt("Saisissez un nombre : "));
const functionResult = isEven(userNumber);

console.log(functionResult);
alert("Ce nombre est impair : " + functionResult);



