const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
const data = new Date()
const dia = document.querySelector("#dia")
const mes = document.querySelector("#mes")
const ano = document.querySelector("#ano")
const hora = document.querySelector("#hora")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const comunicacao = document.querySelector("#comunicacao")

if (data.getHours() >= 5 && data.getHours() <= 12){
    comunicacao.textContent = "Bom Dia!!"
} else if (data.getHours() >= 13 && data.getHours() <= 17){
    comunicacao.textContent = "Boa Tarde!!"
} else {
    comunicacao.textContent = "Boa Noite!!"
}
dia01.textContent = zeroFill(data.getDate())
mes01.textContent = zeroFill(data.getMonth() + 1)
ano01.textContent = data.getFullYear()
horas.textContent = zeroFill(data.getHours())
minutos.textContent = zeroFill(data.getMinutes())
segundos.textContent = zeroFill(data.getSeconds())
}, 1000)