

function exercice28(n)
{
    let compteur = 1
    let somme = 0

    while(compteur <= n)
    {
        somme = somme + compteur
        console.log(compteur)
        compteur++
    }

    console.log("Somme = " + somme)

}

exercice28(10)