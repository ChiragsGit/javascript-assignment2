// Constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imageDisplay = document.getElementById("images");
const studentIdDisplay = document.getElementById("myStudentId");

// Function to change background color from user input and add student id
function changeCustomColor() {
  const userInput = parseInt(customNumberInput.value);

  if (isNaN(userInput) || userInput < 0 || userInput > 100) {
    document.body.style.backgroundColor = "red";
  } else if (userInput >= 0 && userInput <= 20) {
    document.body.style.backgroundColor = "green";
  } else if (userInput <= 40) {
    document.body.style.backgroundColor = "blue";
  } else if (userInput <= 60) {
    document.body.style.backgroundColor = "orange";
  } else if (userInput <= 80) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "yellow";
  }

  studentIdDisplay.textContent = "Your Student ID: 200538042";
}

// Function to change background color from random number
function changeRandomColor() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  customNumberInput.value = randomNum;
  changeCustomColor();
}

// Function to generate options for select list
function addList() {
  const imageNames = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
  ];

  for (const imageName of imageNames) {
    const option = document.createElement("option");
    option.value = imageName;
    option.textContent = imageName;
    imageSelect.appendChild(option);
  }
}

// Function to change image
function changeImage() {
  const selectedImage = imageSelect.value;
  imageDisplay.src = `img/${selectedImage}`;
}

// Event listeners for click events
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Generate options for select list on page load
addList();
