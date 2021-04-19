const btnRight = document.querySelector('.btn-arrow.-right');
const elements = document.querySelector('.elements');
let pixels = 10;

btnRight.addEventListener('click', function() {
    pixels = pixels + 20;
    elements.style = `transform: translateX(${pixels})`;
})