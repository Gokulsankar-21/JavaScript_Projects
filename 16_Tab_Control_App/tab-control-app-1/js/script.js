// interactive design 

const navTab = document.getElementById('nav-tab');
console.log(navTab);

navTab.addEventListener('click',tabClick);

function tabClick(event){
    console.log('clicked');
    console.log(event.target);

    const activeTabs = document.querySelectorAll('.active');

    activeTabs.forEach(tab=>{
        tab.classList.remove('active');
    });

    const pages =document.querySelectorAll('.page-active');
    console.log(pages);

    pages.forEach(page=>{
        page.classList.remove('page-active');
    })

    event.target.parentElement.className+='active';

    let page = event.target.href.split('#')[1]
    document.getElementById(page).classList.add('page-active');
    console.log();
};