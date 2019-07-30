var now = new Date()
const moveHourHand = (hours) => {
    let degrees = hourRotation(hours)
    document.getElementById("hour").style.transform = 'rotate('+degrees+'deg)'
}
const moveMinuteHand = (minutes) => {
    let degrees = minuteRotation(minutes)
    document.getElementById("minute").style.transform = 'rotate('+degrees+'deg)'

}
const moveSecondHand = (seconds) => {
    let degrees = secondRotation(seconds)
    document.getElementById("second").style.transform = 'rotate('+degrees+'deg)'

}
const secondRotation = (seconds) => {
    return (seconds/60) * 360
}
const minuteRotation = (minutes) => { 
    return (minutes/60) * 360
}
const hourRotation = (hours) => {
    return(hours/12) * 360
}
const updateClock = () => {
    var now = new Date()
    moveSecondHand(now.getSeconds())
    moveMinuteHand(now.getMinutes())
    moveHourHand(now.getHours())

}
const setClock = () => {
    var now = new Date()
    moveSecondHand(now.getSeconds())
    moveMinuteHand(now.getMinutes())
    moveHourHand(now.getHours())
}
const startClock = () => {
    console.log('Clock starting')
    setInterval(updateClock, 1000)
}

document.addEventListener("DOMContentLoaded", startClock)
