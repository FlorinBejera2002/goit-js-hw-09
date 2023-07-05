function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function createPromises(initialDelay, step, amount) {
  let currentDelay = initialDelay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        displayResult(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        displayResult(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }
}

function displayResult(message) {
  const resultElement = document.getElementById('result');
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  resultElement.appendChild(messageElement);
}

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const initialDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  createPromises(initialDelay, step, amount);
});
