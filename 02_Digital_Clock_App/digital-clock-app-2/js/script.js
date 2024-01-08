// Time - Regular Time - 12 hours - Format

const h=document.querySelectorAll(".h");
const m=document.querySelectorAll(".m");
const s=document.querySelectorAll(".s");
var text = document.querySelector('.text');
console.log(text);

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

   // hrs -> number[defalut] => after belove statement => string if condion satisfied - string | what if fails - number
   // so number la array concept use panni oru char eduka mudiyathu
   hrs = hrs<10?'0'+hrs :hrs; // num or string
   min = min<10?'0'+min :min;
   sec = sec<10?'0'+sec :sec;
   
   hrs=hrs.toString();
   h[0].innerHTML=hrs[0]; // hrs is num so => undifined when we try to get string
   h[1].innerHTML=hrs[1];
   min=min.toString();
   m[0].innerHTML=min[0]; // hrs is num so => undifined when we try to get string
   m[1].innerHTML=min[1];
   sec=sec.toString();
   s[0].innerHTML=sec[0]; // hrs is num so => undifined when we try to get string
   s[1].innerHTML=sec[1];
   
   text.innerHTML = periods;

}

setInterval(currenTime,1000);

// Done