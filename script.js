"use strict"

console.log("hi");

const sonido = document.createElement("audio");
document.body.appendChild(sonido);

/* //elimino imagen del iframe
sonido.height= "0";
sonido.width= "0"; */



//añado evento al click
window.addEventListener("load", function(){
    document.querySelector("#crashwav").addEventListener("click", temporizarCrash)
})

//añado sonido 
function sonarCrashWav(){   
    sonido.setAttribute("src", "./recursos/sounds/crash.wav");
    sonido.play ();
    }

//Añado retraso 1s
function temporizarCrash(){
    setTimeout(sonarCrashWav,1000)
}


//añado pulsar en teclas del teclado qwertyuio:
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyQ"){
    console.log("has apretado la q");
    temporizarCrash(e)
    } 
})

//2
window.addEventListener("load", function(){
    document.querySelector("#hihatclosewav").addEventListener("click", temporizarHihatclose)
})
function sonarHithatclose(){
    sonido.setAttribute("src", "./recursos/sounds/hihat-close.wav");
    sonido.play ();
}

function temporizarHihatclose(){
    setTimeout(sonarHithatclose,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyW"){
    temporizarHihatclose(e)
    } 
})

//3
window.addEventListener("load", function(){
    document.querySelector("#hihatopenwav").addEventListener("click", temporizarHithatopen)
})
function sonarHithatopen(){
    sonido.setAttribute("src", "./recursos/sounds/hihat-open.wav");
    sonido.play ();
    
}
function temporizarHithatopen(){
    setTimeout(sonarHithatopen,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyE"){
    temporizarHithatopen(e)
    } 
})
//4
window.addEventListener("load", function(){
    document.querySelector("#kickwav").addEventListener("click", temporizarKick)
})
function sonarKick(){
    sonido.setAttribute("src", "./recursos/sounds/kick.wav");
    sonido.play ();
    
}
function temporizarKick(){
    setTimeout(sonarKick,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyR"){
    temporizarKick(e)
    } 
})
//5
window.addEventListener("load", function(){
    document.querySelector("#ridewav").addEventListener("click", temporizarRide)
})
function sonarRide(){
    sonido.setAttribute("src", "./recursos/sounds/ride.wav");
    sonido.play ();
}
function temporizarRide(){
    setTimeout(sonarRide,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyT"){
    temporizarRide(e)
    } 
})
 
//6
window.addEventListener("load", function(){
    document.querySelector("#snarewav").addEventListener("click", temporizarSnare)
})
function sonarSnare(){
    sonido.setAttribute("src", "./recursos/sounds/snare.wav");
    sonido.play ();
    
}
function temporizarSnare(){
    setTimeout(sonarSnare,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyY"){
    temporizarSnare(e)
    } 
})
//7
window.addEventListener("load", function(){
    document.querySelector("#tomhighwav").addEventListener("click", temporizarTomhigh)
})
function sonarTomhigh(){
    sonido.setAttribute("src", "./recursos/sounds/tom-high.wav");
    sonido.play ();
    
}
function temporizarTomhigh(){
    setTimeout(sonarTomhigh,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyU"){
    temporizarTomhigh(e)
    } 
})
//8
window.addEventListener("load", function(){
    document.querySelector("#tomlowwav").addEventListener("click", temporizarTomlow)
})
function sonarTomlow(){
    sonido.setAttribute("src", "./recursos/sounds/tom-low.wav");
    sonido.play ();
    
}
function temporizarTomlow(){
    setTimeout(sonarRide,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyI"){
    temporizarTomlow(e)
    } 
})
//9
window.addEventListener("load", function(){
    document.querySelector("#tommidwav").addEventListener("click", temporizarTommid)
})
function sonarTommid(){
    sonido.setAttribute("src", "./recursos/sounds/tom-mid.wav");
    sonido.play ();
    
}
function temporizarTommid(){
    setTimeout(sonarRide,1000)
}
document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "KeyO"){
    temporizarTommid(e)
    } 
})


