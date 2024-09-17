function lunghezza(num) {
        if ( num > 99 && num < 1000)
            {
            console.log(`Il numero contiene 3 cifre.`);
        } 
        else if (num > 9 && num < 100) {
            console.log(`Il numero contiene 2 cifre.`);
        }
        else if (num > 0 && num < 10){
            console.log(`il numero contiene 1 cifra`);}
            else{
                console.log(`valore inseirto non valido, inserire numero da a 9999.`);
            }
    }
    
    lunghezza(0)
    
    
    