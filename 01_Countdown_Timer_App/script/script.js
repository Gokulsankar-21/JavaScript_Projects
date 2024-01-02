// Interactive - Dynamic Web Design 

// JS DOM :

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const updateTime = ()=> {
    const currentYear = new Date();
    console.log(currentYear.getFullYear());
    const nextYear = new Date(`1 jan ${currentYear.getFullYear() + 1} 00:00:00`);
    const difference = nextYear - currentYear;

    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor((difference / 1000 / 60 / 60) % 24);
    const m = Math.floor((difference / 1000 / 60) % 60);
    const s = Math.floor((difference / 1000) % 60);

    days.innerHTML = 10 > d ? '0' + d : d;
    hours.innerHTML = 10 > h ? '0' + h : h;
    minutes.innerHTML = 10 > m ? '0' + m : m;
    seconds.innerHTML = 10 > s ? '0' + s : s;

}

setInterval(updateTime, 1000);

// Done




