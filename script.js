function clockUpdate(){
  const now = newDate();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();
document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
