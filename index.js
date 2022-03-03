var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var start = document.getElementById("start");
var Lap = document.getElementById("lap");
var totalTime = 0;
let lapHtml = "";
let count = 1;
minute.style.fontSize = "100%";
second.style.fontSize = "100%";
hour.style.fontSize = "100%";
isTime = false;
timeId = false;
start.style.backgroundColor = "green";
start.addEventListener("click", run);

function run() {
    timeId = setInterval(function () {
        totalTime++;
        hour.innerHTML = "0" + parseInt(totalTime / 3600) + ":";
        if (parseInt(totalTime / 3600) > 9) {
            hour.innerHTML = parseInt(totalTime / 3600) + ":";
        }
        minute.innerHTML = "0" + parseInt((totalTime % 3600) / 60) + ":";
        if (parseInt((totalTime % 3600) / 60) > 9) {
            minute.innerHTML = parseInt((totalTime % 3600) / 60) + ":";
        }
        second.innerHTML = '0' + (totalTime % 60);
        if (second.innerHTML > 9) {
            second.innerHTML = (totalTime % 60);
        }
    }, 1000)
    start.innerHTML = "Stop";
    start.removeEventListener("click", run)
    start.style.backgroundColor = "#ff0000"
    Lap.innerHTML = "Lap";
    Lap.style.backgroundColor = "gray"
    Lap.style.color = "Black"
    start.addEventListener("click", stop);
    Lap.addEventListener("click", lap);
    console.log("run function")
}

function stop() {
    clearInterval(timeId);
    isTime = true;
    Lap.innerHTML = "Reset"
    Lap.removeEventListener("click", lap)
    Lap.addEventListener("click", reset);
    console.log("stop")
}

function lap() {
    let hour = "0" + parseInt(totalTime / 3600);
    if (hour > 9) {
        hour = parseInt(totalTime / 3600);
    }
    let minute = "0" + parseInt(totalTime / 60)
    if (minute > 9) {
        minute = parseInt((totalTime % 3600) / 60);
    }
    let second = "0" + totalTime % 60;
    if (second > 9) {
        second = (totalTime % 60);
    }
    let lapContainer = document.querySelector("#lapContainer");
    lapHtml += `<div> 
                   <pre>Lap-${count}     ${hour}:${minute}:${second}</pre>
                   <hr> 
                    </div>`
    count++;
    lapContainer.innerHTML = lapHtml;
}

function reset() {
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute");
    var second = document.getElementById("second");
    var start = document.getElementById("start");
    lapContainer.innerHTML = "";
    lapHtml = "";
    count=1;
    minute.innerHTML = "00:";
    second.innerHTML = "00";
    totalTime = 0;
    Lap.removeEventListener("click",reset)
    Lap.innerHTML="Lap";
    start.removeEventListener("click", stop)
    start.innerHTML = "start";
    start.style.backgroundColor = "green";
    clearInterval(timeId);
    start.addEventListener("click", run);
}