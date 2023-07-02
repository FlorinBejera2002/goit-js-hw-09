import Notiflix from 'notiflix';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const delayInput = document.querySelector('input[name="delay"]');
    const stepInput = document.querySelector('input[name="step"]');
    const amountInput = document.querySelector('input[name="amount"]');

    const delay = Number(delayInput.value);
    const step = Number(stepInput.value);
    const amount = Number(amountInput.value);

    if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
      alert('Please enter valid numbers!');
      return;
    }

    createPromises(delay, step, amount);
  });

  function createPromises(initialDelay, step, amount) {
    let currentDelay = initialDelay;

    for (let i = 1; i <= amount; i++) {
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
        return;

      currentDelay += step;
    }
  }

  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
});