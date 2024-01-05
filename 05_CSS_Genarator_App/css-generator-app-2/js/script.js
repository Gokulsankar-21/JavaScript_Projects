// Interactive Design

document.addEventListener('DOMContentLoaded', () => {

    const horizondalElement = document.querySelector('#horizondal');
    const horizondalText = document.querySelector('#hori_txt');

    const verticalElement = document.querySelector('#vertical');
    const verticalText = document.querySelector('#verti_txt');

    const blurElement = document.querySelector('#blur');
    const blurText = document.querySelector('#blur_txt');

    const spreadElement = document.querySelector('#spread');
    const spreadText = document.querySelector('#spread_txt');

    const shadowColor = document.querySelector('#shadow_col');
    const shadowColorOpacity = document.querySelector('#shadow_col_op');
    const opacityText = document.querySelector('#op_txt');

    const insetBtn = document.querySelector('#inset_btn');

    const outputBox = document.querySelector('#output_box');
    const codeBox = document.querySelector('#code_box');
    const btnCopy = document.querySelector('#btn_copy');


    var horiz_value = 5;
    var verti_value = 5;
    var blur_value = 1;
    var spread_value = 5;
    var color = 'red';
    var opacity = 0;
    var rgba = 'red';
    var inset;

    function allBoxShadowUpdate() {
        horiz_value = horizondalElement.value;
        horizondalText.innerText = horiz_value + 'px';

        verti_value = verticalElement.value;
        verticalText.innerText = verti_value + 'px';

        blur_value = blurElement.value;
        blurText.innerText = blur_value + 'px';

        spread_value = spreadElement.value;
        spreadText.innerText = spread_value + 'px';

        color = shadowColor.value; // ithu podamaten
        console.log(color);
        opacity = (shadowColorOpacity.value) / 100;  // for 0.01 to 1 opacity values
        opacityText.innerText = opacity;

        rbga = hexToRgba(color, opacity); // rbga ah mathi than poduven

        codeBox.innerText = coding();
        outputBox.style.cssText = coding();
    };

    function coding() {
        if (inset) {
            return `box-shadow:${horiz_value}px ${verti_value}px ${blur_value}px ${spread_value}px ${rbga} inset;
                    -webkit-box-shadow:${horiz_value}px ${verti_value}px ${blur_value}px ${spread_value}px ${rbga} inset;
                    -moz-box-shadow:${horiz_value}px ${verti_value}px ${blur_value}px ${spread_value}px ${rbga} inset;`;
        }
        else {
            return `box-shadow:${horiz_value}px ${verti_value}px ${blur_value}px ${spread_value}px ${rbga};
                    -webkit-box-shadow:${horiz_value}px ${verti_value}px ${blur_value}px ${spread_value}px ${rbga};
                    -moz-box-shadow:${horiz_value}px ${verti_value}px ${blur_value}px ${spread_value}px ${rbga};`;
        }
    };

    // hex to rbga | simple understanding is enough | src:stackoverflow
    function hexToRgba(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16), // 16 base of the number=> number^2 number^10 | number^16
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return `rgba(${r},${g},${b},${alpha})`;
        }
        else {
            return `rgba(${r},${g},${b})`;
        }
    }

    allBoxShadowUpdate();
    horizondalElement.addEventListener('mousemove', allBoxShadowUpdate);
    horizondalElement.addEventListener('change', allBoxShadowUpdate);

    verticalElement.addEventListener('mousemove', allBoxShadowUpdate);
    verticalElement.addEventListener('change', allBoxShadowUpdate);

    blurElement.addEventListener('mousemove', allBoxShadowUpdate);
    blurElement.addEventListener('change', allBoxShadowUpdate);

    spreadElement.addEventListener('mousemove', allBoxShadowUpdate);
    spreadElement.addEventListener('change', allBoxShadowUpdate);

    shadowColor.addEventListener('mousemove', allBoxShadowUpdate);
    shadowColor.addEventListener('change', allBoxShadowUpdate);

    shadowColorOpacity.addEventListener('mousemove', allBoxShadowUpdate);
    shadowColorOpacity.addEventListener('change', allBoxShadowUpdate);


    btnCopy.addEventListener('click', () => {
        codeBox.select();
        document.execCommand('copy');
        btnCopy.innerText = 'copied';
        btnCopy.style.cssText = 'background-color:#ff6348c6;'
    });
    insetBtn.addEventListener('click', () => {
        insetBtn.classList.toggle('active');
        if (insetBtn.innerText == 'OFF') {
            insetBtn.innerText = 'on';
            inset = 1;
        }
        else {
            insetBtn.innerText = 'off';
            inset = 0;
        }
        allBoxShadowUpdate();
    })

});

/*
   Mistakes :
     execCommand() la copy podama vituten
     struggle to how to search about display off-screen 
     try ti reduce your mistakes with smile
   done
*/