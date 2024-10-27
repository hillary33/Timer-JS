const getStartSeconds = (second) => {
    const data = new Date(second * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
};

const relogio = document.querySelector('.relogio');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let second = 0
let timer;
// 

function startRelogio() {
    timer = setInterval(function () {
        second++;
        relogio.innerHTML = getStartSeconds(second);
    }, 1000);
}

start.addEventListener('click', function (e) {
    clearInterval(timer);
    startRelogio();
});

pause.addEventListener('click', function (e) {
    clearInterval(timer);
});

reset.addEventListener('click', function (e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    second = 0;
});
