// pop-up feature

const blurActive = document.querySelector('.blur');
const popUp = document.querySelector('.pop-up');
const btnCancel = document.querySelector('.cancel');
console.log(popUp, btnCancel);

function showPopUp() {
    blurActive.classList.add('blur-active');
    popUp.classList.add('pop-up-active');
    console.log("works popup");
}

btnCancel.addEventListener('click', () => {
    blurActive.classList.remove('blur-active');
    popUp.classList.remove('pop-up-active');
    console.log('works');
});

/* Mistakes:
    inga add and remove la na minstake panniten.
    classList la claas than add pannuvom so class name 
    mattumpota pothum
    Ex: 
        Correct => pop-up-active 
        My mistaks => .pop-up-active
    
    Again proved 30% simple basics la mistakes pandra..

    but inga na solla vaniyathu mistakes ah find pannathuku aprm,atha veriyfy pannama 
    udanae atha 100% verify pannama write pannathu... so first verify
   
    verify always :) simple
*/


// Done