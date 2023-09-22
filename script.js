const loader = document.querySelector('#loader');
const container = document.querySelector('#container');


window.addEventListener('load', ()=> {

    if(window.matchMedia("(max-width:1024px)").matches) {
        loader.style.display = 'none';
        container.style.display = 'block';
    }
    else {

    container.style.display = 'none';
    loader.style.display = 'flex';

    setTimeout(() => {
        loader.classList.add('fondu-out');
        container.style.display = 'block';
    }, 3000);

    setTimeout(() => {
        loader.style.display = "none";
    }, 4000);
}
    
});

let interval;
let secondes = 0;
let countdown = document.querySelector('#countdown');

function start() {
    interval = setInterval('decompte()', 30)
};
function decompte() {
    secondes = secondes + 1;
    if (secondes <= 99) {
        countdown.textContent = '0' + secondes;
    } else {
        countdown.textContent = 100;
    };
};

window.addEventListener('load', start);





