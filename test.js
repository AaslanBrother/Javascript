/*
 ________________________________________________
|                                                |
|  ============================================  |
|  =============     invités      =============  |
|  ============================================  |
|________________________________________________|

let invit = prompt("Combien d'invité(s)?")
let tab = []

for (let i = 0; i < invit; i++) {
    let name = prompt(`invité numéro ${i+1}`)
    tab.push(name)
}
console.log(tab)


 ________________________________________________
|                                                |
|  ============================================  |
|  =============        jeu       =============  |
|  ============================================  |
|________________________________________________|


const number = Math.floor(Math.random() * 10)
let user = 0
i=0
let essai = prompt("Nombre d'essaie max?")
let loose = false
let win = false

while (!loose && !win){
    user = prompt("Devinez le chiffre")
    if(number < user){
        alert("le nombre est plus petit")
         i++
    }
    else if (number > user){
        alert("le nombre est plus grand")
         i++
    }
    else {
         win = true
         console.log("win")
    }
    if ( i >= essai){
        loose = true
        console.log("loose")
    }    
}

if(loose){
    alert("Vous avez perdu, nombre de tentative max dépassé")
}
if(win){
    alert(`Vous avez gagné en ${i+1} tentatives`)
}


 ________________________________________________
|                                                |
|  ============================================  |
|  ============= revers + palynd  =============  |
|  ============================================  |
|________________________________________________|



const revers = function(mot){
    let mot_inverse = []
    for(i = mot.length - 1; i>=0; i--){
        mot_inverse.push(mot[i])
    }
    return mot_inverse.join('')
}

const palo = function(mot){
    let verif = false
    if(mot === revers(mot)){
        verif = true
    }
    return verif
}

let mot_input = prompt("Ecrivez un mot")
console.log(revers(mot_input))
console.log(palo(mot_input))

 ________________________________________________
|                                                |
|  ============================================  |
|  =============       carre      =============  |
|  ============================================  |
|________________________________________________|


const carre = function(nombre){
    const nb = nombre*nombre
    return nb
    }

const num = prompt("Entrez un nombre")
console.log(carre(num))


 ________________________________________________
|                                                |
|  ============================================  |
|  =============       somme      =============  |
|  ============================================  |
|________________________________________________|


const sum = function(...n){
    let result = 0
    for (nombre of n){
        result = result + nombre
        //result = result + nombre  =============   result += nombre
    }
    return result
    }
console.log(sum(2,3,5,6,8))


 ________________________________________________
|                                                |
|  ============================================  |
|  =============      invers      =============  |
|  ============================================  |
|________________________________________________|


const invers = function(...n){
    let tab = []
    for (let i = n.length - 1; i > 0; i--) {
        tab.push(n[i])
    }
    return tab
    }
console.log(invers("jean","michel","roi","bouteille"))


________________________________________________
|                                                |
|  ============================================  |
|  =============    fibbonacci    =============  |
|  ============================================  |
|________________________________________________|


const fib = function(indice){
    const result = [0, 1]

    if (indice === 0){
        return [indice] //renvoie la valeur
    }
    else{
        for (i = 2; i <= indice; i++){
            result[i] = result[i-1] + result[i-2]
        }
        return result
    }
}

console.log(fib(3))


________________________________________________
|                                                |
|  ============================================  |
|  =============      Pannier     =============  |
|  ============================================  |
|________________________________________________|


const panier = document.getElementById("panier") 
const prixtotalt = document.getElementById("prixtotal")

const nbcerise = prompt("combien de cerise a 1euro?")
const nbpomme = prompt("combien de pomme a 1euro?")
const nbpoire = prompt("combien de poire a 1euro?")

const prixtotal= parseInt (nbcerise) + (nbpomme0.5) + (nbpoire0.75)

const cerise = document.createElement("li")
cerise.innerText = 'vous avez acheete ${nbcerise} cerise au prix de ${nbcerise}euro'

const pomme = document.createElement("li")
pomme.innerText = 'vous avez acheete ${nbpomme} cerise au prix de ${nbcerise}euro'

const poire = document.createElement("li")
poire.innerText = 'vous avez acheete ${nbpoire} cerise au prix de ${nbcerise}euro'

panier.appendChild(cerise)
panier.appendChild(pomme)
panier.appendChild(poire)

prixtotalt.innerText = 'prix total : $(prixtotal}'

________________________________________________
|                                                |
|  ============================================  |
|  =============      Horloge     =============  |
|  ============================================  |
|________________________________________________|


const clockHTML = document.getElementById("time") //id du paragraphe

function displayTime(){

    let date = new Date();

    clockHTML.innerText = date.toLocaleTimeString()
}
setInterval(displayTime,200);


________________________________________________
|                                                |
|  ============================================  |
|  =============     Horloge V2   =============  |
|  ============================================  |
|________________________________________________|


const clockHTML = document.getElementById("time") 

function displayTime(){

    let date = new Date();

    clockHTML.innerText = date.toLocaleTimeString()

    setTimeout(displayTime, 200)
}

displayTime()

________________________________________________
|                                                |
|  ============================================  |
|  =============      Compteur    =============  |
|  ============================================  |
|________________________________________________|


//click, mouseover, input, 

const addHtml = document.getElementById("add")
const rstHTML = document.getElementById("rst")
const compteur = document.getElementById("time")
let num = 0

function modifpara() {
    compteur.innerText = num
}

addHtml.addEventListener("click", () => {
    num = num + 1
    modifpara()
})

rstHTML.addEventListener("click", function() {
    num = 0
    modifpara()
})


________________________________________________
|                                                |
|  ============================================  |
|  =============  Compteur input  =============  |
|  ============================================  |
|________________________________________________|

*/

const addHTML = document.getElementById("add")
const rstHTML = document.getElementById("rst")
const compteur = document.getElementById("time")
const inputHML = document.getElementById("input")
let num = 0
modifpara()

function modifpara() {
    compteur.innerText = num
}
addHTML.addEventListener("click", () => {
    num = num + parseInt(inputHML.value)
    modifpara()
})

rstHTML.addEventListener("click", function() {
    num = 0
    modifpara()
})

