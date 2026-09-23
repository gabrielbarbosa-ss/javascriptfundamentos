// FizzBuzz: Clássico — para números de 1 a 100, imprima "Fizz" se for múltiplo de 3, "Buzz"
// se for múltiplo de 5, "FizzBuzz" se for múltiplo dos dois, ou o próprio número.

let numero = 100;

for(let i=0;i<numero; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    } else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}