const body = document.querySelector('body')
const hourLine = document.querySelector('.hour')
const minuteLine = document.querySelector('.minute')
const secondLine = document.querySelector('.second') 


const updateTime = () => {
    let date = new Date()
    let seconds = (date.getSeconds() / 60) * 360
    let minutes = (date.getMinutes() / 60) * 360
    let hours = (date.getHours() / 12) * 360

    secondLine.style.transform = `rotate(${seconds}deg)`
    minuteLine.style.transform = `rotate(${minutes}deg)`
    hourLine.style.transform = `rotate(${hours}deg)`
}


setInterval(updateTime, 1000)