// DOM Manipulation

document.addEventListener("DOMContentLoaded", () => {
    const allValueElement = document.getElementById('all_value');
    const allValueText = document.getElementById('all_value_txt');
    const codeElement = document.getElementById('code');
    const containerElement = document.getElementsByClassName('container');
    const copyBtn = document.querySelector('.copy-btn');
    const borderStyleElement = document.querySelector('#border_style');
    const borderSizeElement = document.querySelector('#border_size');
    const BorderSizeTxt =document.querySelector('#Border_Size_txt');
    const borderColorElement = document.querySelector('#border_color');

    // temporary variables - 2 purpose => reuse pandrom
    var all_values = 40;
    var coding = "border-radius:10px;";
    var borderStyle = 'double'; // dynamic ah mathuvom
    var borderSize =5;
    var borderColor='red';

    function allBordersUpdate() {

        // 1- All border-radius
        all_values = allValueElement.value;
        allValueText.innerText = all_values + 'px';

        borderSize = borderSizeElement.value;
        BorderSizeTxt.innerText=borderSize+'px';

        // here temp var is used
        coding = 
        `border-radius:${all_values}px;
        border:${borderSize}px ${borderStyle} ${borderColor};`

        codeElement.innerText = coding;
        containerElement[0].style.cssText = coding;

        
    };
    allBordersUpdate();

    allValueElement.addEventListener('mousemove', allBordersUpdate);
    allValueElement.addEventListener('change', allBordersUpdate);

    copyBtn.addEventListener("click", () => {
        codeElement.select();
        document.execCommand('copy');
        copyBtn.innerText = 'copied';
    });

    borderStyleElement.addEventListener('change',()=>{
        borderStyle= borderStyleElement.value;
        allBordersUpdate();
    });

    borderSizeElement.addEventListener('mousemove', allBordersUpdate); // mouse move aga move aga call agum
    borderSizeElement.addEventListener('click',allBordersUpdate) // once after click

    borderColorElement.addEventListener('change',()=>{
        borderColor=borderColorElement.value;
        allBordersUpdate();
    })
});

/* getElementsByClassName : returns HTMLCollection [array] */
/* execCommand - depricated - ctrl+c | copy opt pannu bothellam intha command than execute agum*/
/*
    Mistakes :
        AddeventListner podama mistakes pante... atha podama values mattum maathi iruken
        so again 30% la main core mistakes pandren
        enaku innum focused ah work pannanum

        Every feature kondu varum bothu atha seriya work agutha nu verify panu
*/

