import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  daysCounter: document.querySelector('[data-days]'),
  hoursCounter: document.querySelector('[data-hours]'),
  minCounter: document.querySelector('[data-minutes]'),
  secCounter: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateHandler(selectedDates[0]);
  },
};

function dateHandler(date) {
  const currentTime = new Date().getTime();
  const futureTime = date.getTime();
  const timeOut = futureTime - currentTime;
  
  if (timeOut <= 0) {
    // window.alert('Please choose a date in the future');
    Notify.failure('Please choose a date in the future');
    return
  }

  refs.startBtn.disabled = false;

  refs.startBtn.addEventListener('click', () => {
    setClock(timeOut - 1000);

    intervalId = setInterval(() => {
      const timeToEndEverySec = futureTime - new Date().getTime();
      if (timeToEndEverySec <= 0) {
        clearInterval(intervalId);
        return
      }
      setClock(timeToEndEverySec);
    }, 1000);
  })
}

function setClock(ms) {
  const numbersOfUnits = convertMs(ms);
  const numbersForCounters = addLeadingZero(numbersOfUnits);
  const { days, hours, minutes, seconds } = numbersForCounters;
  refs.daysCounter.textContent = days;
  refs.hoursCounter.textContent = hours;
  refs.minCounter.textContent = minutes;
  refs.secCounter.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  days = days.toString();
  if (days.length <= 2) {
    days = days.padStart(2, '0');
  }
  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);

