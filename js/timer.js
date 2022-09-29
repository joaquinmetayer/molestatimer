// declarando variables
let inputs, clock, alarm, hours, minutes, seconds, repeater;

// espero que cargue el documento para ejecutar
window.addEventListener('load', () => {
    // busco los inputs
    inputs = Array.from(document.getElementsByClassName('number'));
    // busco reloj
    clock = document.querySelector('.clock'); 
    // genero la alarma
    alarm = new Audio('sound/alarm.mp3');
});

// funcion principal
function startTimer() { 
    // busco y transformo los valores del input a numeros
    parseTime();
    // seteo el timer visualmente
    setTimer();
    // arranco el contador
    countdown();
}

// funcion para convertir el string del input a numeros 
function parseTime() {
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

// funcion para cambiar el timer en la pantalla y en la pestaña
function setTimer() {
    // cambio la hora en pantalla
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p>
                       <span>hs</span>
                       <p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p>
                       <span>min</span>
                       <p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p>
                       <span>sec</span>`;
    // cambio la hora en la pestaña
    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

// funcion que arranca el contador
function countdown() {
    repeater = setInterval(runner,1000);
}

// funcion que cuenta
function runner() {
    // si tengo más de 0 segundos, restá segundos
    // si tengo 0 segundos pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos
    // si tengo 0 segundos, 0 minutos pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas
    // sino arranca la alarma
    
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0 ) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
            }
        }
    }
    setTimer();
}

// funcion para detener el timer
function stopTimer(){
    clearInterval(repeater);
    location.reload();
}