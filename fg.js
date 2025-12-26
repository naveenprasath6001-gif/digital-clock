const clock = document.getElementById('clock');

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zero for single digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    
    // Recursive update every second
    setTimeout(updateTime, 1000);
}

updateTime(); // Initial call
  

