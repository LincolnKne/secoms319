/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
function setProgressBar(taskElement, percentage) {
  const progressBarFilled = taskElement.querySelector('.progress-bar-filled');
  progressBarFilled.style.width = `${percentage}%`;
}
