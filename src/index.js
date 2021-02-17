import cipher from './cipher.js';
/*b1 = botón 1,
  b2 = botón 2,
  t1 = texto1,
  t2 = texto2,*/

//definiendo el botón 1
let cifrar = document.getElementById("b1");

//Creando función flecha anónima dentro de un evento click del botón "cifrar"  
cifrar.addEventListener("click", () => {
    let texto1 = document.getElementById("t1").value;
    let desplazar = document.getElementById("n1").value;
    let textoCodificado = cipher.encode(desplazar, texto1);
    document.getElementById("t2").innerHTML = textoCodificado;
});

//definiendo el botón 2
let descifrar = document.getElementById("b2");

//Creando función flecha anónima dentro de un evento click del botón "descifrar"
descifrar.addEventListener("click", () => {
    let texto2 = document.getElementById("t2").value;
    let desplazar = document.getElementById("n1").value;
    let textoDecodificado = cipher.decode(desplazar, texto2);
    
    document.getElementById("t1").innerHTML = textoDecodificado;
});