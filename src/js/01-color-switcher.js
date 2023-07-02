"use strict"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  
  let intervalId = null;
  
  // Funcția de start a schimbării culorii
  function startColorChange() {
    startButton.disabled = true;
    stopButton.disabled = false;
  
    // Pornirea intervalului de schimbare a culorii la fiecare secundă
    intervalId = setInterval(() => {
      const randomColor = getRandomHexColor();
      document.body.style.backgroundColor = randomColor;
    }, 1000);
  }
  
  function stopColorChange() {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(intervalId);
  }
  
  startButton.addEventListener('click', startColorChange);
  stopButton.addEventListener('click', stopColorChange);