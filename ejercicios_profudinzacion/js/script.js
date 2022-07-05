"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."

/* Comienza a escribir su código aquí */

const botonPlanta = document.querySelector(".planta");
botonPlanta.addEventListener("click", function(){
    console.log(botonPlanta);
    if("planta"){
        const titulo=document.querySelector(".header");
        botonPlanta.classList.add("planta");
        titulo.innerText="Tipo Planta";
        const parrafo=document.querySelector("p");
        parrafo.innerText="Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
        const image=document.querySelector(".planta img");
        image.src="./images/grass_type.png";
        
    }
});

const boton1 = document.querySelector("#btnAgua");
boton1.addEventListener("click", function(){
    console.log(boton1);
    if ("agua"){
        btnAgua.classList="agua";
        const titulo=document.querySelector(".header");
        titulo.innerHTML="Tipo Agua";
        const parrafo=document.querySelector("p");
        parrafo.innerText="Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
        const image=document.querySelector(".planta img");
        image.src="./images/water_type.png";
    
    }
});
    
const botonElectricidad = document.querySelector(".electricidad");
botonElectricidad.addEventListener("click", function(){
     console.log(botonElectricidad);
     if ("electricidad"){
        const titulo=document.querySelector(".header");
        botonElectricidad.classList.add("electricidad");
        titulo.innerHTML="Tipo Electricidad";
        const parrafo=document.querySelector("p");
        parrafo.innerText="Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
        const image=document.querySelector(".planta img");
        image.src="./images/electric_type.png";
     }
})

const botonNormal = document.querySelector(".normal");
botonNormal.addEventListener("click", function(){
     console.log(botonNormal);
     if ("normal"){
        const titulo=document.querySelector(".header");
        botonNormal.classList.add("normal");
        titulo.innerHTML="Tipo Normal";
        const parrafo=document.querySelector("p");
        parrafo.innerText="Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
        const image=document.querySelector(".planta img");
        image.src="./images/normal_type.png";
     }
})

const botonFuego = document.querySelector(".fuego");
botonFuego.addEventListener("click", function(){
     console.log(botonFuego);
     if ("fuego"){
        const titulo=document.querySelector(".header");
        botonFuego.classList.add("fuego");
        titulo.innerHTML="Tipo Fuego";
        const parrafo=document.querySelector("p");
        parrafo.innerText="Los Pokémon de tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."
        const image=document.querySelector(".planta img");
        image.src="./images/fire_type.png";
     }
})




