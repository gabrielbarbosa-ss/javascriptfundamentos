// Conversor de temperatura

class Temperatura{
    static celsiusParaFahrenheit(c){
        return (c * 9/5 + 32)
        
    }
    static fahrenheitParaCelsius(f){
        return ((f - 32) * 5/9)
    }
}

console.log(Temperatura.celsiusParaFahrenheit(200))
console.log(Temperatura.fahrenheitParaCelsius(200))