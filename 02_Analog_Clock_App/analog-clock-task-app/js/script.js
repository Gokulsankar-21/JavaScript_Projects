// interactive design 

const needle_hrs = document.querySelector('.needle-hrs')
const needle_min = document.querySelector('.needle-min')
const needle_sec = document.querySelector('.needle-sec')

function currentTime(){
    const time = new Date();
    const seconds = time.getSeconds()/60;
    const minutes = (seconds+time.getMinutes())/60;
    const hours = (minutes+time.getHours())/12; // 1.42 = > 1 na 1 360deg

    needle_hrs.style.setProperty(`--rotation`,hours*360);
    needle_min.style.setProperty(`--rotation`,minutes*360);
    needle_sec.style.setProperty(`--rotation`,seconds*360);
    console.log(hours,minutes,seconds);
}
currentTime();
setInterval(currentTime,1000);