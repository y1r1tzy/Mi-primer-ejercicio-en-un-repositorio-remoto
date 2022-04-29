const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector("form");

/* console.log(formulario); */

const inputs = document.querySelectorAll("input");

/* console.log(inputs); */

const nombreError = document.querySelector("#errorNombre");

const apellidoError = document.querySelector("#errorApellido");

const emailError = document.querySelector("#errorEmail");

const passwordError = document.querySelector("#errorPassword");

const telefonoError = document.querySelector("#errorTelefono");

/* console.log(nombreError); */

const statusInf = {
nombre: false, 
apellido: false, 
email: false,
password: false, 
telefono:false,


}


inputs.forEach((input) => {
	console.log(input);
	input.addEventListener("keyup", (e)=>{

	/* console.log();(e.target.name); */

  
	switch(e.target.name){

case "nombre":
/* 	console.log(e.target.value); */

if (expresiones.nombre.test(e.target.value)){
/* console.log("nombre correcto"); */
statusInf.nombre = true
nombreError.textContent = ""

}
else{
	/* /* /* console.log("nombre  incorrecto") */
	statusInf.nombre = false
	nombreError.textContent = "error"

}
break


case "apellido":
	/* console.log(e.target.value); */

	if (expresiones.nombre.test(e.target.value)){
		console.log("apellido correcto");
		apellidoError.textContent = ""
		}
		else{
			console.log("apellido incorrecto");
		}
break


case "email":
/* console.log(e.target.value); */

if (expresiones.email.test(e.target.value)){
	console.log("email correcto");
	emailError.textContent = ""
	}
	else{
		console.log("email incorrecto");
	}
break


case "password":

	/* console.log(e.target.value); */

	if (expresiones.password.test(e.target.value)){
		console.log("password correcto");
		passwordError.textContent = ""
		}
		else{
			console.log("password incorrecto");	
		}
break



case "telefono":
	/* console.log(e.target.value); */

	if (expresiones.telefono.test(e.target.value)){
		console.log("telefono correcto");
		telefonoError.textContent = ""
		}
		else{
			console.log("telefono incorrecto");
			
		}
break

		}



	})
});





formulario.addEventListener("submit", (e) => {
	e.preventDefault();
  /* console.log(object.values(statusInf)); */
  console.log(object.values(statusInf).includes(false));

  if(!console.log(object.values(statusInf).includes(false))){

	console.log("enviado");

  }
else{

console.log("no enviado")

document.querySelector(".alert-danger").style.display = "none"

}





}
     



})




