// interactive design

document.addEventListener('DOMContentLoaded', () => {
    const mainFrame = document.querySelector('#main-frame');
    console.log(mainFrame);

    const thumbnailFrames = document.querySelectorAll('.thumbnail');
    console.log(thumbnailFrames);

    thumbnailFrames.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainFrame.src = thumbnail.src;
        });
    });
});


// done