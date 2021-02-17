const cipher = {
  // ...
  encode: (n, string) => {
    let result = "";
    let code=0;
    //let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i=0; i<string.length; i++){
      
       code = string.charCodeAt(i);
       
        if(code>=65 && code<=90){
          code=(code-65+parseInt(n))%26+65;
        }
        if(code>=97 && code<=122){
          code=(code-97+parseInt(n))%26+97;
        }
        result += String.fromCharCode(code);
      }
          return result.toUpperCase();
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

