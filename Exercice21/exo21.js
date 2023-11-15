//Demande à l'utilisateur de saisir une premiere valeur
//La fonction Prompt retourne une string
//La fonction Number convertit une string en number.
let valeur01 = Number(prompt("Veuillez saisir une premiere valeur"))
//Demande à l'utilisateur de saisir une deuxieme valeur
//La fonction Prompt retourne une string
//La fonction Number convertit une string en number.
let valeur02 = Number(prompt("Veuillez saisir une deuxieme valeur"))
//Demande à l'utilisateur de saisir une troisieme valeur
//La fonction Prompt retourne une string
//La fonction Number convertit une string en number.
let valeur03 = Number(prompt("Veuillez saisir une troisieme valeur"))


if(valeur01 >= valeur02)
{
    console.log("Valeur 01 est supérieur à valeur 02")
    if(valeur01 >= valeur03)
    {
        alert("La plus grande valeur est " + valeur01)
    }else{
        alert("La plus grande valeur est " + valeur03)
    }
}else{
    console.log("Valeur 01 est inférieur à valeur 02")
    if(valeur02 >= valeur03)   
    {
        alert("La plus grande valeur est " + valeur02)
    }else{
        alert("La plus grande valeur est " + valeur03)
    }
}



