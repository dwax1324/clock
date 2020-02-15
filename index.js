const test = document.querySelector("#eq");
const circle = document.querySelector("#circle");
const second = document.querySelector("#second");
const minute = document.querySelector("#minute");
const hour = document.querySelector("#hour");
const clock = document.querySelector("#clock2");
const clock2 = document.querySelector("#clock2-1");

init = () => {
    setInterval(() => {
        const haha = new Date();
        let milsec = haha.getMilliseconds();
        // sec
        let sec = haha.getSeconds();

        if (sec === 59) {
        } else if (sec === 60) {
        }
        second.style.transform = `rotate(${sec * 6 + 180 + milsec / 170}deg)`;

        // min
        let min = haha.getMinutes();
        minute.style.transform = `rotate(${min * 6 + 180 + sec / 10}deg)`;
        // hour
        let hours = haha.getHours();

        hour.style.transform = `rotate(${hours * 30 + 180 + min / 2}deg)`;
        //clock2
        clock.innerHTML = `${hours < 10 ? `0${hours}　　` : `${hours}　　`}`;
        clock2.innerHTML = `${min < 10 ? `0${min}` : `${min}`}`;
    }, 1);
};

init();
