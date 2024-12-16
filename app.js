const time = document.querySelector(".time");
const cal = document.querySelector(".cal");

const timer = function () {
  const now = new Date();
  const timeFormat = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);

  time.innerHTML = timeFormat;

  const calFormat = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "numeric",
    weekday: "long",
  }).format(now);
  cal.innerHTML = calFormat;
};

setInterval(timer, 1000);
