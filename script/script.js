const graficos = document.querySelectorAll('.grafico-coluna')
const total = document.querySelector('.balanco-total-mes h2')
console.log(total);
const graficosConjuntos = document.querySelector('.grafico')
const graficoValor = document.querySelectorAll('.grafico-valor')




async function grafico(){
    const promiseDados = await fetch('../data.json');
    const dadosJson = await promiseDados.json();

graficos.forEach((coluna,index)=>{
    coluna.style.height = dadosJson[index].amount*2+'px';

    coluna.addEventListener("mouseover",()=>{
        setSpan(dadosJson,index,coluna)
    })
})

setTotal(dadosJson)
}


const setTotal = function(json){
  const totalValores =  json.reduce((anterior,mes)=>{
 return mes.amount + anterior
   },0)

total.innerText ='R$ '+totalValores
}



const setSpan = function(json,index){
   valorMes = json[index].amount;
    graficoValor[index].innerText = valorMes;
}



grafico()