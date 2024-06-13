// creo una griglia 10x10 qunado l'utente clicca un bottone, ogni casella che viene cliccata cambia colore e mostra il suo numero
// collego elemento bottone e elemento container
const btnPlay = document.getElementById("play");
const squareContainer = document.querySelector(".row");
// aggiungo evento click 
btnPlay.addEventListener ('click',
    function () {

        // ciclo da 100 giri
        for (let i = 1; i <= 100; i++) {
            // creo un elemento "quadrato"
            let square = document.createElement("div");
            square.classList.add("square");
            
            // aggiungo click all'elemento per dare classe e far apparire il numero index
            square.addEventListener('click', 
                function () {
                    square.classList.toggle("clicked");

                    console.log(square);
                }
            )
            console.log(square);
            squareContainer.append(square);
        } 
    }
)









