const verificarLogin = new Promise((resolve, reject)=>{

    setTimeout(() => {
        reject("Login não realizado!")
    }, 2000);
    
})

verificarLogin.catch((retorno)=>{
        console.log(retorno)
})

console.log("Aguarde!")

// o .then() recebe o resolve e o .catch recebe o reject