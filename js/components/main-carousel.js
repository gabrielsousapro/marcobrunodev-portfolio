const btnRight = document.querySelector('.btn-arrow.-right');
const btnLeft = document.querySelector('.btn-arrow.-left')
const elements = document.querySelector('.elements');
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
});