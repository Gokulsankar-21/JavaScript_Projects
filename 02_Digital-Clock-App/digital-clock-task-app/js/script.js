// Interactive Alarm Clock
const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');
const mo=document.querySelectorAll('.mo');
const da=document.querySelectorAll('.da');
const p=document.querySelector(".periods");

console.log(h,m);

function currenTime(){
    var hrs= new Date().getHours();
    var min= new Date().getMinutes();
    var sec= new Date().getSeconds();
    var month= new Date().getMonth()+1;
    var date= new Date().getDate();
    var periods = 'AM';
    console.log(hrs,min,sec,month);

    // Converting 24hrs to 12hrs format
    if(hrs==0){
        hrs=12;
        periods = 'AM';
    }else if(hrs==12){
        periods = 'PM';
    }else if(hrs>12){
        hrs=hrs-12;
        periods = 'PM';
    }
    console.log(hrs,min,sec);
    
    // Double Digit Setup
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    console.log(hrs,min,sec);

    //--------DOM Manipulation - Using JS-----//

    //Convering to string type
    hrs=hrs.toString();
    min=min.toString();
    sec=sec.toString();
    month=month.toString();
    date=date.toString();
    console.log(typeof(hrs),min,sec);

    h[0].innerHTML=hrs[0];
    h[1].innerHTML=hrs[1];

    m[0].innerHTML=min[0];
    m[1].innerHTML=min[1];

    s[0].innerHTML=sec[0];
    s[1].innerHTML=sec[1];

    mo[0].innerHTML=month[0];
    mo[1].innerHTML=month[1];

    da[0].innerHTML=date[0];
    da[1].innerHTML=date[1];


    p.innerHTML=periods;


}

setInterval(currenTime,1000);

// Done-Remaining iruku