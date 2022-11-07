var salario = parseFloat(prompt("Qual valor do seu salario"))
var ferias = 12000 / 3
var decimoterceiro = salario
var rescisao = 40000
var recebera = ferias + decimoterceiro + rescisao
 
alert(`receberá R$ ${recebera}`)

var elementoValor = document.getElementById("valor");
elementoValor.innerText= `total da recisão é R$ ${recebera}`
elementoValor.style.color = 'red';
localStorage.setItem
("valor", total)