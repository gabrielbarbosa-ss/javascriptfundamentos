// Condicionais: Crie classificarIdade(idade) que retorne "criança", "adolescente", "adulto" ou "idoso".

const classificarIdade = (idade) => {
    if(idade < 0){
        console.log("Não existe idade menor que zero")
    } else if(idade>0 && idade<12){
        console.log("Criança")
    }else if(idade>=12 && idade<18){
        console.log("Adolescente")
    }else if(idade>=18 && idade<60){
        console.log("Adulto")
    }else{
        console.log("Idoso")
    }

};

classificarIdade(-1)
classificarIdade(2)
classificarIdade(12)
classificarIdade(13)
classificarIdade(18)
classificarIdade(19)
classificarIdade(62)