var dueDate = new Date('Aug 1, 2021 00:00:00').getTime();

const launchDayCounter = () => {
    let now = new Date().getTime();
    gap = dueDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / second);

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}
setInterval(() => {
    launchDayCounter();
}, 1000)