// interactive design 

const modal = document.createElement('div');
console.dir(modal);
console.log(modal);
modal.id = "modal";
// modal.classList.add('active');

document.body.appendChild(modal);

const images = document.querySelectorAll('.img');
console.log(images);

images.forEach( image => {
    image.addEventListener('click', () => {
        console.log("works");
        const newImgElement = document.createElement('img');
        console.log(newImgElement);

        newImgElement.src = image.src; // techinal ideas
        newImgElement.id = 'img'; // only one image to be enlarge at that moment

        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
        };

        modal.appendChild(newImgElement);
        modal.classList.add('active');

    });
});

modal.addEventListener('click',()=>{
    modal.classList.remove('active');
});

/*
    Questions:
        programmatical ah oru elament ku mulitple id kuduka mudiyuma ?
        Because above code atha show pannuthu
        how?
        
    https://stackoverflow.com/questions/192048/can-an-html-element-have-multiple-ids
    asked : tvanfosson

*/




