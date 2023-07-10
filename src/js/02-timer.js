import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')

}
const { input, btnStart, days, hours, minutes, seconds } = refs;

btnStart.addEventListener('click', handlerStartTimer);
btnStart.disabled = true;

const currentDate = new Date();
let userDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
      userDate = selectedDates[0];
      if (currentDate > userDate) {
          Notiflix.Notify.success('Please choose a date in the future');
          btnStart.disabled = true;
      } else {
          btnStart.disabled = false;
      }
  },
};
flatpickr(input, options);

function handlerStartTimer() {
    const id = setInterval(() => {
        const currentDate = new Date();
        const timeTimer = convertMs(userDate - currentDate);
        if (timeTimer.seconds >= 0) {
            days.textContent = addLeadingZero(timeTimer.days);
            hours.textContent = addLeadingZero(timeTimer.hours);
            minutes.textContent = addLeadingZero(timeTimer.minutes);
            seconds.textContent = addLeadingZero(timeTimer.seconds);
        }
        else {
            clearInterval(id);
            Notiflix.Notify.success('Time is over!');
        }
    })
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

 function addLeadingZero(value) {
     return value.toString().padStart(2, '0');
};