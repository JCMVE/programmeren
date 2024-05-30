
/**
 * NAME: 
 * AUTHOR: 
 * DESCRIPTION: 
 */

// -------------------- CONSTANTEN --------------------
 
const nameInput = document.getElementById("nameInput");     
const button = document.getElementById("button");
const h2 = document.querySelector("h2");
const hond = document.querySelector("#hond_1")
const buttonAaien = document.querySelector("#buttonAaien");
const buttonEten = document.querySelector("#buttonEten");
const buttonSpelen = document.querySelector("#buttonSpelen");
const buttonWassen = document.querySelector("#buttonWassen")
const playEten = document.getElementById("buttonEten");
const playWassen = document.getElementById("buttonWassen");
const hintP = document.querySelector("#buttonWassen");



// -------------------- LET VARIABELEN --------------------
let UserName
let blijheid = 0;

// -------------------- ALLE FUNCTIES --------------------
function logInput () {
    UserName = nameInput.value;
    h2.textContent = UserName;
}

function aaien() {
    console.log("ik ben schoon")
    hond.src = "img/aaien.gif"; // bron gifje: https://media0.giphy.com/media/iRBoxl5hgDIQmiupGR/giphy.gif?cid=6c09b952felowj20u5u4wxh5cx7jfdyczkl7ovrrvjvdhtkl&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s

    if (blijheid < 100){
        blijheid += 20;
        updateBlijheid();
    } 
    else {
        hond.src = "img/confettihond.gif"; // bronnen gifje: confetti = https://i.pinimg.com/originals/e7/b9/f7/e7b9f765e3e589e4d445ec3f7069106a.gif en hond = https://i.pinimg.com/originals/6d/cf/4c/6dcf4c5b0dba1988fc02d0d5ea8a54fa.gif
        const audio = new Audio ("applaus.mp3"); // bron geluid: https://pixabay.com/nl/sound-effects/search/juichen/
        audio.play();

        const voltooidMessage = ("Level voltooid, je hond is helemaal blij met jou");
        document.getElementById("voltooid").textContent = voltooidMessage;

    }
}

function eten() {
    console.log("mmm lekker eten")
    hond.src = "img/pusheeneten.gif"; // bron gifje: https://media1.giphy.com/media/JnBeBhBEqGNW2NqzUN/giphy.gif?cid=6c09b9528tn6mghv2wasv93uxmhu1rfvuf4teox72qczeo4y&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s

    if (blijheid < 100) {
        blijheid +=20;
        updateBlijheid();
    }
    else {
        hond.src = "img/confettihond.gif"; // bronnen gifje: confetti = https://i.pinimg.com/originals/e7/b9/f7/e7b9f765e3e589e4d445ec3f7069106a.gif en hond = https://i.pinimg.com/originals/6d/cf/4c/6dcf4c5b0dba1988fc02d0d5ea8a54fa.gif
        const audio = new Audio ("applaus.mp3"); // bron geluid: https://pixabay.com/nl/sound-effects/search/juichen/
        audio.play();

        const voltooidMessage = ("Level voltooid, je hond is helemaal blij met jou");
        document.getElementById("voltooid").textContent = voltooidMessage;
    }
}

function spelen() {
    console.log("wat een vrijheid");
    hond.src = "img/vies.gif"; // bron gifje: https://media0.giphy.com/media/ene6dDcs3nuPeYwQbR/giphy.gif?cid=6c09b952topw8rjj1amnjxtl18h0fph89rbvsgaua3i6b6hh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s

    if (blijheid < 100) {
        blijheid +=20;
        updateBlijheid();
    }
    else {
        hond.src = "img/confettihond.gif"; // bronnen gifje: confetti = https://i.pinimg.com/originals/e7/b9/f7/e7b9f765e3e589e4d445ec3f7069106a.gif en hond = https://i.pinimg.com/originals/6d/cf/4c/6dcf4c5b0dba1988fc02d0d5ea8a54fa.gif
        const audio = new Audio ("applaus.mp3"); // bron geluid: https://pixabay.com/nl/sound-effects/search/juichen/
        audio.play();

        const voltooidMessage = ("Level voltooid, je hond is helemaal blij met jou");
        document.getElementById("voltooid").textContent = voltooidMessage;
    }
}


function wassen() {
    console.log("wat ben ik weer blij, dat ik schoon ben!");
    hond.src = "img/spelen.gif"; // bron gifje: https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3lyZ3d5ZXcxbW9mYnB2bng4cmNlcnZkanU3Y3V2dWE4azh3Z3dnMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/H2ZW02VFIvVS2OTMAF/giphy.gif

    if (blijheid < 100) {
        blijheid +=10;
        updateBlijheid();
    }
    else {
        hond.src = "img/confettihond.gif"; // bronnen gifje: confetti = https://i.pinimg.com/originals/e7/b9/f7/e7b9f765e3e589e4d445ec3f7069106a.gif en hond = https://i.pinimg.com/originals/6d/cf/4c/6dcf4c5b0dba1988fc02d0d5ea8a54fa.gif
        const audio = new Audio ("applaus.mp3"); // bron geluid: https://pixabay.com/nl/sound-effects/search/juichen/
        audio.play();
        
        const voltooidMessage = ("Level voltooid, je hond is helemaal blij met jou");
        document.getElementById("voltooid").textContent = voltooidMessage;
    }
}


//bron code geluid: https://youtu.be/3xlws5og44U?feature=shared

function muziek() {
    const audio = new Audio("eten.mp3"); // bron geluid: https://pixabay.com/sound-effects/search/munch/
    audio.play();
}

function bubbels() {
    const audio = new Audio("schoon.mp3"); // bron geluid: https://pixabay.com/sound-effects/search/bathtub%20bubbles/
    audio.play();
}

function showHint(){
    hintP.textContent = "Ik ben vies, wil je mij wassen?";
    setTimeout(hideHint, 5000);
}

function hideHint(){
    hintP.textContent = "Wassen";
}


function updateBlijheid() {
    const blijheidMessage = "Blijheid:" + blijheid + "%"; 
    document.getElementById("blijheidstatus").textContent = blijheidMessage;
    
}



// -------------------- EVENT LISTENERS --------------------
button.addEventListener("click", logInput);
buttonAaien.addEventListener('click' , aaien);
buttonEten.addEventListener('click', eten);
buttonSpelen.addEventListener('click', spelen);
playEten.addEventListener('click', muziek);
playWassen.addEventListener('click', bubbels);
buttonSpelen.addEventListener('click', showHint);
buttonWassen.addEventListener('click', wassen);




