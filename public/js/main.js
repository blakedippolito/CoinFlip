

let heads = document.querySelector('#heads');
let tails = document.querySelector('#tails');

const flipCoin = () => {
    const result = Math.random();
    if (result < 0.5) {
        heads.style.display = "flex";
        tails.style.display = "none";
    } else {
        heads.style.display = "none";
        tails.style.display = "flex";
    }
};

document.querySelector('button').addEventListener('click', flipCoin);