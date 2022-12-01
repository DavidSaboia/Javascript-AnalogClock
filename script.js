// Analog Clock

let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

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
    // Working with the second clock pointer.
    let sDeg = ((360 / 60) * second) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;

    // Working with the minute clock pointer.
    let mDeg = ((360 / 60) * minute) - 90;
    mElement.style.transform = `rotate(${mDeg}deg)`;

    // Working with the hour clock pointer.
    let hDeg = ((360 / 12) * minute) - 90;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

// Fixing the hour, minute and second formats.
function fixZero(time) {

    return time < 10 ? `0${time}`: time;

}

// Making the timer works.
setInterval(updateClock, 1000);
updateClock();
