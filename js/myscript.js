// creo una griglia 10x10 qunado l'utente clicca un bottone, ogni casella che viene cliccata cambia colore e mostra il suo numero
// collego elemento bottone e elemento container
const btnPlay = document.getElementById("play");
const squareContainer = document.querySelector(".row");

// aggiungo evento click 
btnPlay.addEventListener ('click',
    function () {
        
        // ciclo da 100 giri
        for (let i = 0; i < 100; i++) {
            // creo un elemento "quadrato"
            square = document.createElement("div");
            square.classList.add("square");
            squareContainer.append(square);
        }
    }
)
    

        

        // aggiungo click all'elemento per dare classe e far apparire il numero index

