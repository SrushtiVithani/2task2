const display = document.querySelector('.display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  display.textContent = '00:00:00.000';
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

  milliseconds = milliseconds.toString().padStart(3, '0');
  seconds = seconds.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  hours = hours.toString().padStart(2, '0');

  display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds};`
}