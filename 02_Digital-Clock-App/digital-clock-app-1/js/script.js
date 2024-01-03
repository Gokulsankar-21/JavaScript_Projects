// Time - Regular Time - 12 hours - Format

const clock = document.querySelector('.clock');

function currenTime(){

    var hrs = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var periods = 'AM';

    if(hrs>12){   // railways time - 24hours format
        hrs=hrs-12;
        periods="PM";
    }else if(hrs==0){
        hrs=12;
        periods="AM";
    }else if(hrs==12){
        hrs=12;
        periods='PM';
    }


   hrs = hrs<10?'0'+hrs :hrs;
   min = min<10?'0'+min :min;
   sec = sec<10?'0'+sec :sec;

    clock.innerHTML= `${hrs} : ${min} : ${sec} ${periods} `;
    console.log();
}

setInterval(currenTime,1000);

/* Mistakes : Property ku assign pannanum = > atha na method ah nenachi ags pass paniten
   clock.innerHTML= (`${hrs} : ${min} : ${sec}`);
   clock.innerHTML= `${hrs} : ${min} : ${sec}`;

*/

// Done