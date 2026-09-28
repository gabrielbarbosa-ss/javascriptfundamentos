// Simulação de login com promise usando .then() e .catch()

const senhaCorreta = 1234;
const senhaDigitada = 2234;

const resultado = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(senhaDigitada === senhaCorreta){
            resolve("Login realizado!")
        }else{
            reject("Senha incorreta!")
        }

    }, 2000)
});

resultado.then((retorno)=>{
    console.log(retorno)
}  
).catch((retorno)=>{ // usando o catch encadeado junto com o then
    console.log(retorno)
}).finally(()=>{
    console.log("Processo encerrado!")
})


console.log("Aguarde...")