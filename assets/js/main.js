const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const clock = document.getElementById("clock");

let timerId;

const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

const updateClock = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  clock.textContent = `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}:${formatTimeUnit(seconds)}`;
};

startButton.addEventListener("click", () => {
  clearInterval(timerId);

  timerId = setInterval(updateClock, 1000);
});

stopButton.addEventListener("click", () => clearInterval(timerId));
