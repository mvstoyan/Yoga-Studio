const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
    document.querySelector('#player').play();
    document.querySelector('#myVideo').play();
})

//minutes
const timer = 3;
//seconds
let amountTime = timer * 60;

function  calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    countdown.textContent =`${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime < 0) {
        stopTimer();
        amountTime = 0;
    }

function stopTimer() {
    clearInterval(timeID);
}

}

let timeID = setInterval(calculateTime, 1000);