/**
 * Fonction permettant d'afficher des entiers de 1 à n
 * 
 * n est le parametre d'entrée
 */
function exercice24(n)
{
    let compteur = 1

    while(compteur <= n)
    {
        console.log(compteur)
        compteur++
    }
}

exercice24(10)

//exercice24(Number(prompt("Entrer un chiffre")))