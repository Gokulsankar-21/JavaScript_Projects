// interactive design

const containerElement = document.querySelector('#container');
const addBtn = document.querySelector('#btn-add');

var titleCount = 0;
console.log(containerElement, addBtn);


function getAppStorage() {
    console.log(localStorage.getItem('sticky-notes'));
    console.log(JSON.parse(localStorage.getItem('sticky-notes')));
    return JSON.parse(localStorage.getItem('sticky-notes'));
};

const appStorage = getAppStorage();
console.log(appStorage);

appStorage.forEach(note => {
    createElement(note);
    console.log(note);
});


function createElement(note) {
    console.log(note);
    ++titleCount;
    console.log(titleCount);

    const divElement = document.createElement('div');
    const headingElement = document.createElement('input');
    const textElement = document.createElement('textarea');
    const cancelBtnElement = document.createElement('i');

    headingElement.type = 'text';
    setAttributes(headingElement, textElement);

    divElement.classList.add('sticky');
    headingElement.classList.add('title');
    textElement.classList.add('notes');
    cancelBtnElement.classList.add('cancel-btn', 'fa-solid', 'fa-circle-xmark');

    divElement.appendChild(headingElement);
    divElement.appendChild(textElement);
    divElement.appendChild(cancelBtnElement);

    cancelBtnElement.onclick = () => {
        const check = confirm("do you want delete?");
        if (check) {
            --titleCount;
            deleteNotes(note.id, divElement);// refrence ah delete pannu - enga na container la easy
        }
        console.log(note.id); // id ah matha theva ila
    }


    headingElement.value = `Title-${titleCount}`; // maybe 
    textElement.value = note.content;
    textElement.placeholder = 'Enter your notes';

    console.log(note.id);

    headingElement.addEventListener('input', () => { // input better
        console.log(' heading changing');
        updateNotes(note.id, headingElement.value, textElement.value); // update(1001,dynamic);
    });
    textElement.addEventListener('change', () => {
        console.log(' text changing');
        updateNotes(note.id, headingElement.value, textElement.value); // update(1001,dynamic);
    });

    containerElement.insertBefore(divElement, addBtn);
    console.log(note);
}

function setAttributes(headingElement, textElement) {
    headingElement.setAttribute("contenteditable", 'true');
    headingElement.setAttribute("spellcheck", 'false');
    textElement.setAttribute("spellcheck", 'false');
}

addBtn.addEventListener('click', () => {
    const noteObject = {
        id: Math.floor(Math.random() * 10000),
        title: ``,
        content: '',
    };

    console.log(noteObject);
    createElement(noteObject);

    const notes = getAppStorage();
    notes.push(noteObject);
    saveNotes(notes);
});

function updateNotes(id, heading, content) {
    console.log(id);
    const notes = getAppStorage();
    updateElement = notes.filter(note => note.id == id); // instead of [10,20][0] 
    console.log(updateElement);
    updateElement[0].title = heading;
    updateElement[0].content = content;
    saveNotes(notes);
};

function deleteNotes(id, divElement) {
    const notes = getAppStorage();
    const newNotes = notes.filter((note) => note.id != id);
    saveNotes(newNotes);

    containerElement.removeChild(divElement);
}

function saveNotes(newNotes) {
    localStorage.setItem('sticky-notes', JSON.stringify(newNotes));
};


/*
    '[]' =json string fmt

    need to verify
    function Note(){
    const id=Math.floor(Math.random()*1000);
    return id;
}


    huge Mistake:
        li use panni na event add panniten
        but inga change event ethukulam support pannum b uoru rules iruku | syntax
        so, ithu limitation ithu teriyama na try pannitu irunthen

        so to know the characteristics

    new learnings: 
        change input - DOM event

*/
