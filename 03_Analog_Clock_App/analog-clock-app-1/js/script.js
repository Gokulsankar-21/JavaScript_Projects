// Interactive Design  - current time

var hrs = document.querySelector('.hrs');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
console.log(hrs);

function currentTime() {
    const time = new Date();

    /*
        Note :
            we have the time in numbers - not timestamp 
            But How we can indicat the time?
                => through needle so needle deals with degree
                => Now we would to convert the time into the rotate"
                */

    const seconds = time.getSeconds()/60; // 1/60 min
    const minutes = (seconds+time.getMinutes())/60 ; // 1/60hrs
    const hours = (minutes+time.getHours())/12;         // 1/24 days => 1/12 | 12hrs format

    console.log(hours , minutes, seconds);

    sec.style.setProperty(`--rotation-2`,seconds*360);
    min.style.setProperty(`--rotation-2`,(minutes*360));
    hrs.style.setProperty(`--rotation-2`,(hours*360));
    console.log(hours , minutes, seconds);

}
currentTime();
setInterval(currentTime, 1000);

/* My Mistake:

    Inga na 360deg ala multiply panne... 
    ana ellame 0deg la irunthichu
    ena nu congif panna 360deg ala normal ah multipy panna atha 360 tables la thaan varum
    Ex:
        7*360 = 2520
        2520%360 =0 | /-7
    ithu check panni terinjika try pannen...
    
    Fraction la itukuratha thaan 360deg matha multiply pandrom
*/




