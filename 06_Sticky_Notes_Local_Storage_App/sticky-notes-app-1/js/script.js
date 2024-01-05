// Interactive Design - local storage

const containerElement = document.getElementById('container');
const btnAdd = document.getElementsByClassName('btn-add')[0];
console.log(btnAdd);


function getAppStorage() {
    console.log(localStorage.getItem('gokul-app')); //Manual Adding Element from localstorage 
    console.log(JSON.parse(localStorage.getItem('gokul-app')));
    return JSON.parse(localStorage.getItem('gokul-app'));
};

// defalut template - get from local storage : tab close pannita ellam local storage la store agidum. so atha again open panna local storage la ena puthusa iruko atha eduthutu varum 
getAppStorage().forEach((element) => {
    const textElement = createTextElement(element.id, element.content);
    containerElement.insertBefore(textElement, btnAdd);

    console.log(element);
    console.log(element.id);
    console.log(element.content);
});

function createTextElement(id, content) {
    const textElement = document.createElement('textarea');
    textElement.classList.add('sticky');
    textElement.value = content;
    textElement.placeholder = 'Enter Your Notes';

    textElement.addEventListener('change', () => {
        console.log("changing");
        updateNotes(id, textElement.value);// static ah id set pandrom
    });
    textElement.addEventListener('dblclick', () => {
        console.log("double clicked");
        const check = confirm("Do you want delete?");
        if(check){
            console.log(id); // athoda id ah static ahassign pannidrom
            deleteNotes(id,textElement);
        };
    });

    return textElement;
}

function addSticky() {
    const notes = getAppStorage();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    }
    const textElement = createTextElement(noteObject.id,noteObject.content);
    containerElement.insertBefore(textElement, btnAdd);

    console.log(notes);
    notes.push(noteObject); // here an element obj not JSON
    saveNotes(notes);

    console.log(notes[0]);
    console.log(notes[4]);
    console.log(noteObject.id);
    console.log(noteObject.content);
}

btnAdd.addEventListener('click', addSticky);


function saveNotes(notes) {
    console.log(JSON.stringify(notes));
    localStorage.setItem('gokul-app', JSON.stringify(notes));
}

function updateNotes(id, content) {
    const notes = getAppStorage();
    const updateElement = notes.filter((note) => note.id == id)[0]; // name ilatha array : Need to know more ! || normal == expression
    // return ;
    // 0x7030  : maybe live server port moolima save agalam
    // console.log(updateElement[0]);
    updateElement.content = content;
    saveNotes(notes);
}

function deleteNotes(id,textElement) {
    const notes = getAppStorage().filter(note => note.id != id);
    saveNotes(notes);
    containerElement.removeChild(textElement);
}


/*
    array like object [{…}, {…}, {…}, {…}]
    array => key:val 
    obj => key:val maybe

    Explain:
        filter((note)=>note.id==id) ==> [10,10][0] => a[0] : maybe

    New Learnings:
    JSON
    defalut template - get from local storage :
         tab close pannita ellam local storage la store agidum. 
        so atha again open panna local storage la ena puthusa iruko atha eduthutu varum

    Mistakes:
        localstorage.setItem - syntax
        oru padi thaavitae irukom, atha koraikiren | 2 times
        template.content instead of template.value
        huge mistakes in a updateNote speacifically filter
        textElement ku addEventListner pathi sollum bothu listen pannala. this is huge mistakes
        
        Now look you mistakes.
*/

