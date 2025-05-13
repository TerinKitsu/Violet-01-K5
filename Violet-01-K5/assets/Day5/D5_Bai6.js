function timer(startValue, step) {
    let currentValue = startValue;
    let intervalId = null;

    function startTimer() {
        if (intervalId !== null) {
            console.log("Timer is already running!");
            return;
        }

        intervalId = setInterval(() => {
            console.log(currentValue);
            currentValue += step;
        }, 1000);
    }

    function stopTimer() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
            console.log("Timer stopped.");
        }
    }

    return {
        startTimer,
        stopTimer
    };
}

//Gọi hàm
const timerInstance = timer(100, 10);
timerInstance.startTimer();
setTimeout(() => {
    timerInstance.stopTimer();
}, 7000);