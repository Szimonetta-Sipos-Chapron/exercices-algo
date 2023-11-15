const nombre1 = Number(prompt("1er nombre ?"))

const nombre2 = Number(prompt("2eme nombre ?"))

const nombre3 = Number(prompt("3eme nombre ?"))


if(nombre1 >= nombre2)
{
    if(nombre1 >= nombre3)
    {
        console.log("Le maximum est " + nombre1)
    }else{
        console.log("Le maximum est " + nombre3)
    }
}else{
    if(nombre2 >= nombre3)
    {
        console.log("Le maximum est " + nombre2)
    }else{
        console.log("Le maximum est " + nombre3)
    }
}

if (nombre1 >= nombre2 && nombre1 >= nombre3) 
{
    console.log("le maximum est : " + nombre1)
}
else if (nombre2 >= nombre1 && nombre2 >= nombre3) {
    console.log("le maximum est : " + nombre2)
}
else  {
    console.log("le maximum est : " + nombre3)
}