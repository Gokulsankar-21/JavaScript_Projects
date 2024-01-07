// interactive design

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

console.log(slides);

slides.forEach((slide,index)=>{
    slide.style.transform=`translateX(${index*100}%)`; // default pos
});

let currentSlide=0;
let maxSlide = slides.length-1; // index based order

nextBtn.addEventListener('click',(e)=>{
    console.log('clicked');
    e.preventDefault();

    if(currentSlide==maxSlide){
        currentSlide=0;// default pos
    }else{
        currentSlide++;
    }

    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-currentSlide)*100}%)`; // Each slide moves from staring
    });
}); // logical core - default pos + slides count vechi => 1st - -100% 0% -200% -300%


prevBtn.addEventListener('click',(e)=>{
    console.log('clicked');
    e.preventDefault();

    if(currentSlide==0){
        currentSlide=maxSlide;// default pos
    }else{
        currentSlide--;
    }

    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-currentSlide)*100}%)`; // Each slide moves from staring
    });
}); // reverse


