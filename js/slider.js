/*
const slideContainer = document.querySelector('.autoslider');
const slider = document.querySelector('.slider');

let isPressedDown = false;
let cursorXSpace;

slideContainer.addEventListener('mousedown', (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - slider.offsetLeft;
});

window.addEventListener('mouseup', () => {
    isPressedDown = false;
})

slideContainer.addEventListener('mousemove', (e) => {
    if(!isPressedDown) return;
    e.preventDefault();
    slider.style.left = `${e.offsetX - cursorXSpace}px`;
});
*/