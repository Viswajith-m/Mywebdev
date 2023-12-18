const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop() {
if(isRunning){
    clearInterval(timer);
    elapsedTime=Date.now-starttime;
    isRunning=false;
}
}

function reset() {
    clearInterval(timer);
    starttime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - starttime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10);
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    ms = String(ms).padStart(2, "0");
    display.textContent = `${hours}:${minutes}:${sec}:${ms}`;
}