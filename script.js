function simularPagamento(){
 let n = 1
 let n2 = 2 
 let cliente = window.Number(prompt(`Digite ${n} para o pagamento á vista ou ${n2} para pagamento parcelado.`))

/* verifica se o valor foi corespondente com a variavel n2, para funcionar esse if e else*/ 
 if (n2 == cliente ) {
  let parcelas= window.Number(prompt('em quantas parcelas deseja dividir (até 12x)?'))
  let valorjuros2 = 5
  let valor1 = 12.500
  let parcela = (valor1 * valorjuros2) / 100
  let resultado = valor1 + parcela
  let nP = resultado / parcelas
let res = window.document.getElementById('resultado').innerHTML
res = window.prompt(`O seu notebook ficará em ${parcelas} parcelas de R$${nP} reais.`)
 
 }
/* ta aparecendo 11.25, entretando seria 11.250, ja tentei de N formas, mas me falta capacidade*/ 
  else { 
 let valorjuros = 10
 let valor1 = 12.500
 let cal = (valor1 * valorjuros) / 100
 let final = valor1 - cal
 let res = window.document.getElementById('resultado').innerHTML
 res = window.prompt(`Excelente escolha! com 10% de desconto, o seu notebook sai por apenas R$${final} .`)

}



}