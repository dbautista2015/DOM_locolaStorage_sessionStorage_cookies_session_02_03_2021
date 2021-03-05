

window.onload = function(){

    let object = new Object({
        name : "Diana",
        lastname : "Bautista",
        Saludar : function(){
            return `Hola ${this.name} ${this.lastname} te saluda en Cache`; 
        }
    })
    
    //localStorage.setItem("response-data", JSON.stringify({mensaje: "sucess", data: object.Saludar()}));

    // let name = "data";

    // caches.open(name).then(function(cache) {
    //     cache.add("Cache/app.js");
    //     // console.log(cache.keys());
    //     fetch('Diana_Bautista_dbautista2015/Cache/app.js')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // });

    // let lista = [];
    // lista["name"] = "Diana";

    // let data = new Object({
    //     name : "Diana Patricia",
    //     lastname : "Bautista Otálora",
    //     age : 38
    // });
    // sessionStorage.setItem("Informacion", JSON.stringify(data));
    // console.log(JSON.parse(sessionStorage.getItem("Informacion")));



    // const medioId = document.getElementById("inpu_nombre2");
    // // console.log(medioId.innerHTML);   //Tomamos los datos de la etiqueta con los nodos ("Las etiquetas hijos")
    // // console.log(medioId.innerText);   //Tomamos los datos de la etiqueta sin los nodos ("Las etiquetas hijos")
    // // console.log(medioId.textContent); //Tomamos los datos de la etiqueta sin los nodos ("Las etiquetas hijos") con su espaciado
    // const medioClass = document.getElementsByClassName("pequeño");
    // // medioId.classList.add("pequño"); //Agregamos un clase
    // // medioId.classList.remove("grande") //Removemos un clase
    // // medioId.classList.toggle("pequeño", true); //Agregamos y removemos una clase siempre y cuando no de pasemos el segundo valor (true, false)
    // // medioId.classList.replace("extraGrande", "pequeño"); //Remplazamos un clase existente dentro del nodo por otra

    // const nodo = $(".extraGrande");
    // console.log(nodo.classList);
}

// function $(id){
//     return document.querySelector(id);
// }