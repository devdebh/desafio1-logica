let xp = 10500
let nome = "deb"
let nivel = ""


if (xp <= 1000) //ok
    {
        nivel = "ferro"
    }
else if (xp >= 1001 && xp <= 2000) // ok
    {
        nivel = "bronze"
    }
else if (xp >=  2001 && xp <= 5000) //ok
    {
        nivel = "prata"
    }
else if (xp >= 5001 && xp <= 7000) //ok
    {
        nivel = "ouro"
    }
else if (xp >= 7001 && xp <= 8000) //ok
    {
           nivel ="platina"
    }
else if (xp >= 8001 && xp <= 9000)
    {
            nivel = "ascendente"
    }
else if (xp >= 9001 && xp <= 10000)
    {
          nivel = "imortal"
    }
else if (xp >= 10001)
    {
        nivel = "radiante"
    }

console.log ("O héroi de nome " + nome + " está no nível " + nivel)