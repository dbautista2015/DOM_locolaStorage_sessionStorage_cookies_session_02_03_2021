

window.onload = function(){

    let object = new Object({
        name : "Diana",
        lastname : "Bautista",
        Saludar : function(){
            return `Hola ${this.name} ${this.lastname} te saluda en Cache`; 
        }
    })
    
    // localStorage.setItem("response-data", JSON.stringify({mensaje: "sucess", data: object.Saludar()}));

    











    let nombre = "data";
    // const frame = document.createDocumentFragment();
    caches.open(nombre).then(function(cache) {
        cache.add("Cache/app.js");
        cache.match("Cache/app.js").then(function(info){
            info.text().then(function(variable){
                const nodo = document.createElement("script");
                const text = document.createTextNode(variable);
                nodo.appendChild(text);
                document.head.appendChild(nodo);
                object.edad = 23;
                object.Miedad = function(){
                    return `${this.nombre} ${this.apellido} tiene ${this.edad} años`;
                };
                object.Saludar = function(){
                    return `Hola ${this.nombre} ${this.apellido} te saluda en Chache`; 
                }
                
                response.success = object.Saludar();
                response.mensaje = object.Miedad();

                localStorage.setItem("respuesta", JSON.stringify(response))
                
            })
        });
    });
    
    





    










    // let lista = [];
    // lista["Nombre"] = "Miguel";

    // let data = new Object({
    //     nombre : "Miguel Angel",
    //     apellido : "Castro Escamilla",
    //     edada : 23
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