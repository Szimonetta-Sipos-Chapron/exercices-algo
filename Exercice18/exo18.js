function trouveurDePlusGrand(valeur1, valeur2)
{

    let resultat

    if (valeur1 > valeur2) {
        resultat = valeur1
    }
    else{
        resultat = valeur2
    }

    return resultat
}

let leResultatDeMaFonction = trouveurDePlusGrand(14,5)

alert(leResultatDeMaFonction)

let val1 = Number(prompt("valeur 1 ?"))

let val2 = Number(prompt("valeur 2 ?"))

let leResultatDeMaFonction2 = trouveurDePlusGrand(val1,val2)

alert(leResultatDeMaFonction2)