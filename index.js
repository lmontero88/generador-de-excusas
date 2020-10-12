
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    function onLoad(){
        
        // 1. generar numero aleatorio de cada arreglo.
        let quien = parseInt(Math.random() * (who.length+1 - 1) + 1);
        let verbo = parseInt(Math.random() * (action.length+1 - 1) + 1);
        let que = parseInt(Math.random() * (what.length+1 - 1) + 1);
        let cuando = parseInt(Math.random() * (when.length+1 - 1) + 1);
        // 2. Concatenar cada posición del arreglo.
        let concatenacion = who[quien-1] + " " +  action[verbo-1] + " "+ what[que-1]+ " " + when[cuando-1];
        // 3. Retornar la variable donce se alamacena concatenacion.
        return concatenacion;
    }

    document.getElementById("excuse").innerText=onLoad();


