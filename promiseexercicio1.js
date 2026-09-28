//Crie uma função chamada verificarLogin() que retorna uma Promise.

//Ela deve:

//Depois de 2 segundos, resolver a Promise com "Login realizado!".
//Antes disso, a Promise fica pendente.
//Use setTimeout().

//O resultado esperado no console: Login realizado!


const verificarLogin = new Promise((resolve, reject)=>{

    setTimeout(() => {
        then("Login não realizado!")
    }, 2000);
    
})

verificarLogin.then((retorno)=>{
        console.log(retorno)
})

console.log("Aguarde!")

// o .then() recebe o resolve e o .catch recebe o reject