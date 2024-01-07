// interactive design

const buttons = document.querySelectorAll('.btn');
const searchBox = document.querySelector('#search');
const boxes = document.querySelectorAll('.box');  // box img-addtofavuorite

console.log(buttons, searchBox, boxes);

/* Search Box Fucntionality */
searchBox.addEventListener('keyup', (e) => {
    e.preventDefault();

    console.log('works');
    console.log(e);
    console.dir(e.target);
    console.log();

    searchText = e.target.value.toLowerCase().trim();

    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    })
    buttons[0].classList.add('btn-clicked');

    boxes.forEach((box) => {
        // console.dir(box);
        console.dir(box.dataset);
        if (box.dataset.item.includes(searchText)) {
            box.style.display = 'block';
        }
        else {
            box.style.display = 'none';
        }
    });

});

/* Buttons Fucntionality */
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", (e) => {
        e.preventDefault();

        activateBtn(e);
        const bntfilter = button.dataset.filter;
        console.log(bntfilter);

        boxes.forEach((box) => {
            const boxItem = box.dataset.item;
            if (bntfilter == 'all') {
                box.style.display = 'block';
            }
            else {
                if (bntfilter == boxItem) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none'
                }
            }
        });
    });
});


function activateBtn(e) {
    buttons.forEach(btn => btn.classList.remove('btn-clicked'))
    e.target.classList.add('btn-clicked');
}


const icons = document.querySelectorAll('.icon');
console.log(icons);

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.dir(e.target);

        if (e.target.localName == 'ion-icon') {
            if (e.target.name == 'heart-outline') {
                console.log("yes");
                addToFavorite(e.target);
            } else {
                removeFromFavuorite(e.target);
            }

        } else {
            const modal = document.createElement('div');
            const img = document.createElement('img');

            document.body.appendChild(modal);
            modal.appendChild(img);
            modal.classList.add('modal-style');
            modal.id = 'modal';
            modal.style.height = document.body.clientHeight;
            console.log(modal);

            // console.log(e.target);
            // img.src=e.target.src;

            img.src = box.children[1].src;
            img.classList.add('img-style');
            /*
                   const addToFavorite =
                   `<div class="icon">
                       <ion-icon name="heart-outline"></ion-icon>
                    </div>`;
                   modal.innerHTML+=addToFavorite;
                   modal.childNodes[1].style.cssText='z-index:1000; top:45%; right:30%;';
                   */
            modal.addEventListener('click', (e) => {
                console.dir(e.target);
                if (e.target.id == 'modal') {
                    modal.firstChild.remove();
                    modal.classList.remove('modal-style');
                }
            });
        }
    });
});


let boxId = null;
boxes.forEach(box => {
    boxId++;
    box.id = boxId;
    console.log(box);
});


const getAppStorage = JSON.parse(localStorage.getItem('photo-gallery-app') || '[]');
console.log(getAppStorage);

getAppStorage.forEach(boxObj => { // staring la entha data ila, so ithu work agala, error um show agala. need more info
    boxes.forEach(box => {
        if (boxObj.id == box.id) {
            console.log("works");
            box.children[0].children[0].name = 'heart';
            box.children[0].children[0].style.color = 'red';
        }
    });
});
console.log("executed");


function addToFavorite(target) {
    target.name = "heart";
    target.style.color = 'red';

    let parentElement = target.parentElement.parentElement;
    console.log(parentElement);

    let boxObj = {
        id: parentElement.id,
        category: parentElement.dataset.item,
    }
    console.log(boxObj);

    let updatedAppStorage = JSON.parse(localStorage.getItem('photo-gallery-app') || '[]');// dynamic ah get panren
    updatedAppStorage.push(boxObj);

    saveToLocalStorage(updatedAppStorage);
}


function removeFromFavuorite(target) {
    target.name = 'heart-outline';
    target.style.color = 'white';

    let parentElement = target.parentElement.parentElement;
    console.log(parentElement);

    console.log(getAppStorage);

    let updatedAppStorage = JSON.parse(localStorage.getItem('photo-gallery-app') || '[]'); // dynamic ah get panren
    updatedAppStorage = updatedAppStorage.filter(boxObj => {
        console.log(boxObj);
        if (boxObj.id != parentElement.id) {
            return boxObj;
        }
    });
    console.log(updatedAppStorage);

    saveToLocalStorage(updatedAppStorage);
}

function saveToLocalStorage(AppStorage) {
    localStorage.setItem('photo-gallery-app', JSON.stringify(AppStorage));
}

// done


/* Mistake:

block ku pathila ah none potuten
forEach la addventlistner maari click kiduthuten
    e.preventDefault() search ku potuten actully ithu buttons ku matum podanum
.toLowerCase().trim() podala

so, 30% always making mistakes 
try 100% presents, focus


e.target mistake - children[0]- undefined - reason i know
localStorage la getItem podala
localStorage la major mistakes pannen
e.target pathila target kuduthen
kuty kuty mistakes pannen
 e.target.style -> inga  e.target.style.color kudukanum
*/