
// Accessing Control Buttons using DOM
document.getElementById("startPause").addEventListener("click", startPause);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);

// Initializing  variables of Timer
let timer;
let isRunning = false;
let clearTimer = false;
let seconds = 0, minutes = 0, hours = 0;

// Control Button Logic (StartPause, Stop and Reset)

function startPause() {
    // Logic for Pause Control Button
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").textContent = "Resume";
    }
    // Logic for Resetting Values after Stop Button is clicked 
    else if (clearTimer && !isRunning) {
        seconds = -1;
        minutes = 0;
        hours = 0;
        updateDisplay();
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startPause").textContent = "Pause";
        clearTimer = false;
    }
    // Logic for Start Control Button
    else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startPause").textContent = "Pause";

    }
    isRunning = !isRunning;
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    clearTimer = true;
    document.getElementById("startPause").textContent = "Start";
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = -1;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startPause").textContent = "Start";

}

// Update Timer Display
function updateDisplay() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    // Display Updated Timer on Screen
    let displayString = `${calcTime(hours)}:${calcTime(minutes)}:${calcTime(seconds)}`;
    document.getElementById("displayTime").textContent = displayString;
}

function calcTime(number) {
    return (number < 10) ? "0" + number : number;
}
