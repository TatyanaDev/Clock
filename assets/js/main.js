let timerId;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clock = document.getElementById("clock");

const updateClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clock.textContent = `${hours}:${minutes}:${seconds}`;
};

startButton.addEventListener("click", () => {
  clearInterval(timerId);

  timerId = setInterval(updateClock, 1000);
});

stopButton.addEventListener("click", () => clearInterval(timerId));
