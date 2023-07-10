"use strict";
function receiveStars(stars) {
    if (typeof (stars) === "number") {
        if (stars == 1) {
            console.log("Você avaliou com 1 estrela.");
        }
        else if (stars == 2) {
            console.log("Você avaliou com 2 estrelas.");
        }
        else if (stars == 3) {
            console.log("Você avaliou com 3 estrelas.");
        }
        else if (stars == 4) {
            console.log("Você avaliou com 4 estrelas.");
        }
        else if (stars == 5) {
            console.log("Você avaliou com 5 estrelas.");
        }
    }
    else if (typeof (stars) === "boolean") {
        if (stars === false) {
            console.log("Você preferiu não avaliar!");
        }
        else {
            console.log("Valor inválido");
        }
    }
}
receiveStars(5);
receiveStars(4);
receiveStars(3);
receiveStars(2);
receiveStars(1);
receiveStars(false);
receiveStars(true);
