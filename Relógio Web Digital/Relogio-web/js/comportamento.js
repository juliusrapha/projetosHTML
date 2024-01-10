
const horas = document.getElementById('horas'); //pegando o elemento span.horas
const minutos = document.getElementById('minutos'); //pegando o elemento span.minutos
const segundos = document.getElementById('segundos'); //pega o elemento span.segundos

//a funcao abaixo atualiza o relogio a cada segundo
const relogio = setInterval(function time() { 
    let dateToday = new Date(); //dateToday recebe o objeto Date()
    let hour = dateToday.getHours(); //'hour' recebe as horas do objecto Date() 
    let min = dateToday.getMinutes(); //'min' recebe os minutos do objecto Date()
    let sec = dateToday.getSeconds(); //'sec' recebe os segundos do objecto Date()
    
    //as condicoes abaixo concatenam o zero caso 'hour,min,sec' tenha somente um algarimo
    if (hour<10) hour = "0" + hour; 
    if (min<10) min = "0" + min;
    if (sec<10) sec = "0" + sec;

    //O codigo abaixo modifica os conteudos dos variaveis "hour,min,sec" e mostra na tela
    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = sec;
});