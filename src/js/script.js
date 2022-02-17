


// entrada de derecha al centro de card
window.addEventListener('scroll' , function () {
 let animacion = document.getElementById("card-presentation");
 let posicionObj1 = animacion.getBoundingClientRect().top;
 console.log(posicionObj1);
 let tamañoDepantalla =  window.innerHeight/3;

 if (posicionObj1< tamañoDepantalla){
     animacion.style.animation ="mover 1s ease-out";
 }

})
// entrada de izquierda al centro  carrer
window.addEventListener('scroll', function (odd) {
    let animacion2 = document.getElementsByClassName("timeline-item:nth-child(odd)")
    let posicionObj2 = animacion.getBoundingClientRect().top;
    console.log(posicionObj2);
    let tamañoDepantalla = window.innerHeight/3;

    if(posicionObj2 < tamañoDepantalla){
        animacion2.style.animacion ="mover 1s ease-out"
    }
})


// entrada de derecha al centro carrer 
window.addEventListener("scroll",function () {
    let animacion3 = document.getElementsByClassName("timeline-item:nth-child(event)");
    let posicionObj3 = animacion2.getBoundingClientRect().top;
    let tamañodepantalla = window.innerHeight/3;
    console.log("objeto3 "+posicionObj3);
    
    if(posicionObj3 < tamañodepantalla){
        animacion2.style.animation = " mover 1s ease-out "
    }

})