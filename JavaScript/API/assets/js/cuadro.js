const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const $cards = document.getElementById('cards');



fetch(url).then(respuesta => respuesta.json()).then(datos => {
    console.log(datos[0]);

    datos.forEach(objeto => {
        $cards.innerHTML +=
            `
        <div class="col mb-4">
        <div class="card">
            <img src="${objeto.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${objeto.id}</h5>
                    <p class="card-text">${objeto.title}</p>
                </div>
            </div>
        </div>
    
        `
    })
});



