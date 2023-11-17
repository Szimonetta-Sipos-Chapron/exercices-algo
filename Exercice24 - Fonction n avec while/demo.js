function wholeNumber(n)
{
    let compteur = 1

    while(compteur <= n)
    {
        console.log(compteur)
        compteur++
    }
};

wholeNumber(Number(prompt("Entrez un chiffre : ")));