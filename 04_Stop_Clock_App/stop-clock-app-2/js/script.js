// Custom Time - Logic

const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');
const milliseconds = document.querySelector('.ms');

let hrs = min = sec = ms = 0, starter;

btnStart.addEventListener('click', () => {
    btnStart.classList.add('start-disable');

    btnStop.classList.remove('stop-disable'); // works after click stop 1st time
    // simple logic
    starter = setInterval(() => {
        ms++;
        if (ms == 100) {
            ms = 0;
            sec++;
        }
        if (sec == 60) { // common logic
            sec = 0;
            min++;
        }
        if (min == 60) { // common logic
            min = 0;
            hrs++;
        }
        updateDisplay();
    }, 10);// logics got

    console.log('clicked and started');
});
btnStop.addEventListener('click', () => {
    btnStart.classList.remove('start-disable');
    btnStop.classList.add('stop-disable');
    clearInterval(starter);
    updateDisplay();
    console.log("destroyed");

});
btnReset.addEventListener('click', () => {
    hrs = min = sec = ms = 0;
    btnStop.classList.remove('stop-disable'); // works after click stop 1st time
    btnStart.classList.remove('start-disable');
    updateDisplay();
    console.log("reseted");
});

function updateDisplay() {
    hours.innerText = hrs < 10 ? '0' + hrs : hrs;
    minutes.innerText = min < 10 ? '0' + min : min;
    seconds.innerText = sec < 10 ? '0' + sec : sec;
    milliseconds.innerText = ms < 10 ? '0' + ms : ms;
};


