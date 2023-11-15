/**
 * Pour info
 * 
 * i++ : j'ajoute 1 à la valeur de i
 * i-- : j'enlève 1 à la valeur de i
 * 
 * Fonction permettant d'afficher des entiers de 1 à n en sens inverse
 * 
 * n est le parametre d'entrée
 */
function exercice25(n)
{
let compteur = n

    while(compteur > 0)
    {
        console.log(compteur)
        compteur--
    }
}

exercice25(10)

//exercice25(Number(prompt("Entrer un chiffre")))