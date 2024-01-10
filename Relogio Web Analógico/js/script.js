const hourHand = document.getElementsByClassName('hour-hand')[0];
const minuteHand = document.getElementsByClassName('minute-hand')[0];
const secondHand = document.getElementsByClassName('second-hand')[0];


const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

setInterval(() => {
    const { seconds , minutes, hours } = getTime();

    secondHand.style.transform = `translateY(-120px) rotate(${seconds*6}deg)`;
    minuteHand.style.transform = `translateY(-100px) rotate(${minutes*6}deg)`;
    hourHand.style.transform = `translateY(-75px) rotate(${hours*30}deg)`;
}, 1000);