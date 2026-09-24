// Husk fra dag 1: skriv "use strict" herunder


// Nyt i dag: document.getElementById henter det HTML-element, der har den angivne id-attribut.
// Husk fra HTML/CSS: en id-attribut er unik og identificerer ét bestemt element - det er præcis den værdi, vi bruger her.
// Vi henter knappen og billedet ved hjælp af deres id, så vi kan styre dem med JavaScript herunder.
const changeImgBtn = document.getElementById("changeImage");
const getImage = document.getElementById("imagePlaceholder");

// Nyt i dag: addEventListener "lytter" efter en bestemt handling (her: klik på knappen).
// Funktionen herinde bliver kørt, hver gang der klikkes på knappen.
changeImgBtn.addEventListener("click", function() {

    // Husk fra dag 1: skriv if/else-strukturen selv herunder.
    //
    // "this" er den knap, der blev klikket på.
    // this.textContent er teksten, der står på knappen lige nu.
    // getImage.src er billedets kilde (hvilket billede der vises).
    //
    // Hvis this.textContent er "Before", så:
    //   - sæt getImage.src til "img/before.png"
    //   - sæt this.textContent til "After"
    // Ellers:
    //   - sæt getImage.src til "img/after.png"
    //   - sæt this.textContent til "Before"

});
