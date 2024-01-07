// interactive design

const imgSelect = document.querySelectorAll('.img-select a');
const mainImageDiv = document.querySelector('.main-image')

const btnMinus = document.querySelector('.minus');
const btnPlus = document.querySelector('.plus');
const quantity = document.querySelector('#qty');


console.log(imgSelect);

let imgId=null;

imgSelect.forEach(img =>{
    img.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log("clicked");
        console.log(img.dataset.id);
        imgId=img.dataset.id;

        moveImage();
       
    })
});

function moveImage(){
    let imgWidth = mainImageDiv.clientWidth;
    console.log(imgWidth);

    // logic 
    let movingWidth=(imgId-1)*imgWidth;
    console.log(movingWidth);
    mainImageDiv.style.transform=`translateX(${-movingWidth}px)`;
    console.log(mainImageDiv.clientWidth);
}

let qtyValue = quantity.value;

btnMinus.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(qtyValue);

    if(qtyValue>1){
        qtyValue--;
    }
    quantity.value=qtyValue;
});

btnPlus.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(qtyValue);

    if(qtyValue>=1 && qtyValue<5){ // limit 1-5
        qtyValue++;
    }

    quantity.value=qtyValue;

})

//  done

/*
    Mistakes:
        main-image ku querySelectorAll kuduthuten but querySelector kudukanum
        imgid ku pathila imgWidth kuduthuten

*/