// interactive design

const btnPrev = window.document.getElementById('btn-prev');
const btnNext = window.document.getElementById('btn-next');
const tabContainer= window.document.getElementById('tab-list');
console.log(btnPrev, btnNext,tabContainer);

btnNext.addEventListener('click', () => {

    moveForward();
});

btnPrev.addEventListener('click', () => {
    moveBackward();
});

let pixel=30;
let count=0;
var moveForward = () => {
    console.log('forward');
    count++;
    tabContainer.style=`transform:translateX(${pixel*count}px)`;
    console.log(tabContainer.style.transform);
}


var moveBackward = () => {
    console.log('backward');
    count--;
    tabContainer.style=`transform:translateX(-${pixel*count}px)`;
    console.log(tabContainer.style.transform);
}

