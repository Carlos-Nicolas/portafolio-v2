window.addEventListener('scroll' , function () {
 let animacion = document.getElementById("card-presentation");
 let posicionObj1 = animacion.getBoundingClientRect().top;
 console.log(posicionObj1);
 let tamañoDepantalla =  window.innerHeight/3;

 if (posicionObj1< tamañoDepantalla){
     animacion.style.animation ="mover 1s ease-out";
 }

})


window.addEventListener("scroll",function () {
    let animacion2 = document.getElementsByClassName("timeline-item");
    let posicionObj2 = animacion2.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/3;

    if(posicionObj2 < tamañodepantalla){
        animacion2.style.animation = " mover2 1s ease-out "
    }

})