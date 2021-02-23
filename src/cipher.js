const cipher = {
  // ...
  encode: (n, string) => { //Función flecha para codificar n(numero) y string(cadena);
    let result = "";//Declarando una variable de resultado;
    let code=0;//Declarando la codificación;
    //let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i=0; i<string.length; i++){ //bucle for para recorrer el largo de la cadena.
      
       code = string.charCodeAt(i);//aplicando charCodeAt para asignar código ASCII a la cadena.
                                  // Declarando la variable code. 
       
        if(code>=65 && code<=90){ //Condicionando los números asignados a las letras en codigo ASCII.
          code=(code-65+parseInt(n))%26+65; //Aplicando fórmula en el caso de que la condición se cumpla. 
        }
        if(code>=97 && code<=122){
          code=(code-97+parseInt(n))%26+97;
        }
        result += String.fromCharCode(code); //Definiendo el resultado
                                            // Aplicando fromCharcode para retornar la cadena en letras segun ASCII.
      }
          return result.toUpperCase(); // Retornando resultado en mayúsculas.  
  },
  
    decode: (n, string) => {
      let result = "";
      let code=0;
      //let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
      for(let i=0; i<string.length; i++){
        
         code = string.charCodeAt(i);
         
          if(code>=65 && code<=90){
            code=(code+65-parseInt(n))%26+65;
          }
          if(code>=97 && code<=122){
            code=(code+33-parseInt(n))%26+97;
          }
          result += String.fromCharCode(code);
        }
            return result.toUpperCase();
  }
  }
export default cipher

