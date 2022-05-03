/* const url = "https://api.thecatapi.com/v1/images/search"

const imagen = document.getElementById("imagenPerrito1")
const imagen2 = document.getElementById("imagenPerrito2")

//opcion 1
fetch(url).then(respuesta => respuesta.json()).then(datos => {

    console.log(datos.message);
    imagen.src = datos.message
})



//opcion2

async function obtenerPerrito (){

const infoPerritos =await fetch (url)
 const perrito = await infoPerritos.json()
console.log(perrito);
imagen2.src = perrito.message

}

obtenerPerrito() */

const url = "https://dog.ceo/api/breeds/image/random"
const imagen = document.getElementById('imagenPerrito');
const imagen2 = document.getElementById('imagenPerrito2');


// con fetch podemos hacer una peticion y nos retona una promesa
// fetch(url).then(respuesta => respuesta.json()).then(datos =>{
//     console.log(datos);
//     imagen.src = datos.message;
// });

async function obtenerPerrito(){
    const infoPerritos = await fetch(url);
    console.log(infoPerritos);
    const perrito = await infoPerritos.json();
    console.log(perrito);
    imagen.src= perrito.message;
    
    const infoPerritos2 = await fetch(url);
    console.log(infoPerritos2);
    const perrito2 = await infoPerritos2.json();
    console.log(perrito2);
    imagen2.src= perrito2.message;
}

obtenerPerrito();