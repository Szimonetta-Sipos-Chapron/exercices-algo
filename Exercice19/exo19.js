function getLePlusGrandV2(valeur1, valeur2)
{
    let resultat

    if(valeur1 > valeur2)
    {
        resultat = 1
    } else if (valeur1 < valeur2)
    {
        resultat = -1
    } else {
        resultat = 0
    }

    return resultat
}

let leResultatDeMaFonction = getLePlusGrandV2(85,465)

alert(leResultatDeMaFonction)

let val1 = Number(prompt("valeur 1 ?"))

let val2 = Number(prompt("valeur 2 ?"))

let leResultatDeMaFonction2 = getLePlusGrandV2(val1,val2)

alert(leResultatDeMaFonction2)