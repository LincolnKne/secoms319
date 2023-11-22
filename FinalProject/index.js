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

// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the JSON data to update image elements
    data.forEach(image => {
      // Get the image element by its ID, which matches the name in the JSON
      const imgElement = document.getElementById(image.name.replace(" ", ""));
      
      // Set the src attribute to the image URL from JSON
      if (imgElement) {
        imgElement.src = image.url;
      }
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
