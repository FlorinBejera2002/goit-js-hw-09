"use strict";

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let countdownInterval;

startButton.addEventListener('click', () => {
  const countdownDate = new Date(datetimePicker.value).getTime();

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);

    if (distance < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
});

// Inițializarea calendarului Flatpickr
flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
});

function formatTime(time) {
  return time.toString().padStart(2, '0');
}