const daysScreen = document.querySelector('#days')
const hoursScreen = document.querySelector('#hours')
const minutesScreen = document.querySelector('#minutes')
const secondsScreen = document.querySelector('#seconds')
const spinnerLoading = document.querySelector('#loading')
const container = document.querySelector('#container')
const arrival = new Date("February 10 2023 00:00:00");

const getTime = item => item < 10 ? "0" + item  : item

const insertContainerValues = ({days, hours, minutes, seconds}) => {
    daysScreen.textContent = getTime(days)
    hoursScreen.textContent =   getTime(hours)
    minutesScreen.textContent =  getTime(minutes)
    secondsScreen.textContent =  getTime(seconds)
}

const updateCoutdown = () => {
  const currentTime = new Date();
  const difference = arrival - currentTime;

  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
  const minutes = Math.floor(difference / 1000 / 60 )  % 24
  const seconds = Math.floor(difference / 1000 )  % 24

  insertContainerValues({days, hours, minutes, seconds})

};

const handleContainerDisplay = () => {
    spinnerLoading.remove()
    container.style.display = "flex"
}

setTimeout( handleContainerDisplay,1000)

setInterval(updateCoutdown, 1000)
