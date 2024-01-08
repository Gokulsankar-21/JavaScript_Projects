// interactive design

const stars = document.querySelectorAll('.star');
const ratings = document.querySelector('.ratings');
console.log(stars, ratings);

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        let current_star = index + 1;
        ratings.innerText = `${current_star} of 5`;

        stars.forEach((star, i) => {
            if (current_star >= i + 1) {
                star.innerHTML = "&#9733";
            }
            else {
                star.innerHTML = "&#9734";
            }//why else? => 5th star click pannita ellam fill agidum. but ipa vera star click panna 3rd star panna remaining 2star normal ah matha 
        });
    });
});
