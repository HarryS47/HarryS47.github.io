function clockUpdate(){
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

clockUpdate();
setInterval(clockUpdate, 1000);
