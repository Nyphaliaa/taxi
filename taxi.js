"use strict";

let santeMentale=10 // définir une variable santéMentale égale à 10
let musiques=["Anissa - Wejdene", "endlessly - bixby", "tired - asheu", "beside you - keshi", "bad - wave to earth"]; // créer une variable avec 5 musiques dont anissa de wejdene
let feuxRouges=30 // définir une variable feuxRouges égale à 30
let changementTaxi=0 // définir une variable changementTaxi égale à 0
console.log("John essaie de rentrer chez lui");
console.log(" ");

for(let i=0;i<30;i++){ // à chaque fois qu'il s'arrête à un feu rouge
    let choixMusiques = musiques[Math.floor(Math.random()*5)] // tirer aléatoirement une musique
    if (choixMusiques=="Anissa - Wejdene"){ // si la musique jouée est anissa de wejdene
        santeMentale=santeMentale-1 // il perd 1 de santé mentale
        changementTaxi=changementTaxi+1 // et il change de taxi
        if (santeMentale==0){ // si sa santé mentale arrive à 0
            console.log(" ");
            console.log("explosion"); // il explose
            break; // donc fin de boucle
        }
    }
    feuxRouges=feuxRouges-1 // tant qu'il n'a pas explosé et qu'il ne tombe pas sur wejdene, soustraire de 1 le compteur de feux rouges
    if (feuxRouges!=0){ // et s'il reste des feux rouges
        console.log("La musique jouée est " + choixMusiques + " et il reste " + feuxRouges + " feux rouges avant que John arrive chez lui. "); // afficher le nombre de feux rouges restants et le nom de la musique jouée
    }else{ // si le compteur de feux rouges arrive à 0
        console.log(" ");
        console.log("John est arrivé en " + changementTaxi + " changements."); // John arrive donc chez lui
    }
}
