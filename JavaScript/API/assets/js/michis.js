/* const url = "https://dog.ceo/api/breeds/list/all"

const lista = document.querySelector("ul")
fech (url).then(resp => )


const (arregleTiposTerrier);
arregleTiposTerrier
});
    
});
    
});

const template = `<li class="list-group-item"` */

const url = "https://api.thecatapi.com/v1/images/search"
const imagen = document.getElementById('imagenPerrito');
const btnMichi = document.querySelector('.btn-michi');
// console.log(btnMichi);


btnMichi.addEventListener('click',(e)=>{
    e.preventDefault;
    fetch(url).then(respuesta => respuesta.json()).then(datos =>{
        imagen.src = datos[0].url;
    });
});