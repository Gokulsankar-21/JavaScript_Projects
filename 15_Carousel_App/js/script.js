// interactive design


const sliders = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

console.log(sliders, btnNext, btnPrev);

// global variable
let sliderPosition = 0;
const totalLength = sliders.length;
console.log("total length", totalLength);

// click event
btnPrev.addEventListener('click', function () {
    console.log('previous btn');
    previousSlide();
});

btnNext.addEventListener('click', function () {
    console.log('next');
    nextSlide();
});


// simple_workflow
function updatePosition() {
    sliders.forEach(slider => {
        slider.classList.remove('active');
    });

    dots.forEach(dots => {
        dots.classList.remove('dot-active');
    })

    sliders[sliderPosition].classList.add('active');
    dots[sliderPosition].classList.add('dot-active');
}
console.log("current slide", sliderPosition);

// if previous btn clicked
function previousSlide() {

    // core logics
    if (sliderPosition == 0) {
        sliderPosition = totalLength - 1;
    } else {
        sliderPosition--;
    }
    console.log("current slide", sliderPosition);
    updatePosition();
}

// if next btn clicked
function nextSlide() {
    /*
    if (sliderPosition == totalLength - 1) {  // same logic point
        sliderPosition = 0;
    } else {
        sliderPosition++;
    }
    */

    // own logic
    // if nextBtn clicked then checked the current slide position
    // then only update sliderPosition
    if (sliderPosition < totalLength - 1) {  // same logic point
        sliderPosition++;
    } else {
        sliderPosition = 0;
    }
    console.log("current slide", sliderPosition);
    updatePosition();
}

// dot functionality
const dotContainer = document.querySelector('#dots');
console.log(dotContainer);

sliders.forEach(slider => {
    const dotElement = document.createElement('div');
    dotElement.classList.add('dot');
    console.log(dotElement);

    dotContainer.appendChild(dotElement);
});

const dots = document.querySelectorAll('.dot');
dots[sliderPosition].classList.add('dot-active'); // indicator

// click event for dots
dots.forEach((dot, index) => {
    dot.onclick = () => {
        console.log('dot clicked');
        sliderPosition = index;  // key point
        updatePosition();  // key point
    }
})


// automatic carousel
setInterval(() => {
    if (sliderPosition == totalLength - 1) {
        sliderPosition = 0;
    }
    else {
        sliderPosition++;
    }
    updatePosition();
}, 50000);



// dot functionality - 100%
// setInterval functionality - 100%
//  own logic - 100%


// done