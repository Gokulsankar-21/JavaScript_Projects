// stop clock - custom timer

const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');
const milliseconds = document.querySelector('.ms');
console.log(hours);

const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs = min = sec = ms = 0, starter, check = 0;


// btn event listener
btnStart.addEventListener('click', () => {
    btnStart.classList.add('start-disable'); // easy peasy
    btnStop.classList.remove('stop-disable');

    check++;
    starter = setInterval(() => {
        ms++;
        if (ms == 100) { //counting - simple logic
            ms = 0;
            sec++;
        }
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hrs++;
        }
        updateDisplay();
    }, 10);
});


btnStop.addEventListener('click', () => {
    if (check >= 1) {
        btnStop.classList.add('stop-disable');
        btnStart.classList.remove('start-disable');

        clearInterval(starter); // Freeze
        updateDisplay();
        console.log("works");
        console.log(check);
    }
    else {
        showPopUp();   // to show popup
    }
});

btnReset.addEventListener('click', () => {

    if (check > 0) {
        clearInterval(starter);
        hrs = min = sec = ms = 0;

        btnStop.classList.remove('stop-disable');
        btnStart.classList.remove('start-disable');

        updateDisplay();
        console.log(check);
    }
    else {
        showPopUp();
    }

});


// display custom time
function updateDisplay() {
    hours.innerText = hrs < 10 ? '0' + hrs : hrs;
    minutes.innerText = min < 10 ? '0' + min : min;
    seconds.innerText = sec < 10 ? '0' + sec : sec;
    milliseconds.innerText = ms < 10 ? '0' + ms : ms;
};
updateDisplay();


// Done