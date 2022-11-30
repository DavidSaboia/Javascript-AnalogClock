// Analog Clock

let digitalElement = document.querySelector('.digital');
let sElement = document.queryCommandIndeterm('.p_s');
let mElement = document.queryCommandIndeterm('.p_m');
let hElement = document.queryCommandIndeterm('.p_h');

// Lets creat a timer that updates every seconds.
// Function for the timer.
function updateClock() {

    // Getting the actual data.
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // For the digital clock
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // For the analog clock
    

}

// Fixing the hour, minute and second formats.
function fixZero(time) {

    return time < 10 ? `0${time}`: time;

}

// Making the timer works.
setInterval(updateClock, 1000);
