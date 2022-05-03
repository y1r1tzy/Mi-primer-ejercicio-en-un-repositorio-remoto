
/* 
setTimeout(()=>{

   console.log("ejecuando despues de 3 segundos");

},3000)

console.log("Hola"); */

/* const datos = [

    {

        nombre:"Jonathan",
        edad: 23,
    }
    {
    
        nombre:"Luis",
        edad: 32,
    }
    {
    
        nombre:"Saul",
        edad: 18,
    }

]

function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
        
resolve(datos)
        
        }, 3000);

    })
    
}

obtenerDatos() */


async function obtenerDatosAsync (){

const datosObtenidos =await obtenerDatos()

console.log(datosObtenidos);

}

obtenerDatosAsyn()