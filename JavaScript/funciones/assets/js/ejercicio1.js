/* const invertir =(palabra="")=> {

    if (palabra.length <= 1) return console.warn(`no ingresaste texto `);
    if(typeof(palabra) !==`string`) return console.error("el valor ingredaso no es una palabra");


let arreglo = palabra.split("");
let reverso = arreglo.reverse();
let unir = reverso.join("");

return console.log(unir);;


}

invertir ("Hola mundo" ); */

//EJERCICIO 1
const palindromo = (word) => {
    let volteada;
    nospaces = word.replace(/\s/g, '');
    volteada = nospaces.split('').reverse().join('')
      if (volteada.toLowerCase() == nospaces.toLowerCase()) {
      return true
    } else {
      return false
    }
  }
  
  console.log(palindromo('salas'));
  
//ejercicio2

const repetir = (word, num) => {
    let phrase = [];
    for (let i = 0; i < num; i++) {
      phrase.push(word)
    }
    return phrase.join(' ');
  }
  
  console.log(repetir('Adiós mundo',3))
  
//ejercicio 3
const recorte = (word, num) => {
    if (word.length < num) {
      return console.error('No hay suficientes caracteres')
    } else {
      return word.substring(0,num);
    }
  }
  
  console.log(recorte('Adiós mundo', 5));
  
/* //ejericicio 4
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(factorial(5));
 */


//ejercicio4

// 4
const factorial = (n) => {
    if (n >= 0) {
      var total = 1; 
      for (i=1; i<=n; i++) {
        total = total * i; 
      }
      return total;
    } else {
      console.error('Introduce un número mayor o igual a cero');
    }
  }
  
  console.log(factorial(5));

  
  
