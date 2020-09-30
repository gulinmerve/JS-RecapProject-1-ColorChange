// Change The Colors!

const colors = ["red", "blue", "gray", "green", "purple"];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);
// randomColorButton.addEventListener("click", () => changeColors());
// randomColorButton.addEventListener("click", function () {
//   changeColors();
// });

// 1) Arrayden rastgele element seçmek
function changeColors() {
  const randomIndex = Math.floor(Math.random() * colors.length);

  document.querySelector("#colorName").textContent = colors[randomIndex];
  document.querySelector("body").style.backgroundColor = colors[randomIndex];
}

// 2) Kullanıcının girdiği string'i renk listesine eklemek ve arkaplanı o renk ile güncellemek
function addColor() {
  const userInput = document.querySelector(".colorInput");

  const colorData = userInput.value.split(":");
  console.log(colorData)

  if (colors.indexOf(userInput.value) == -1) {
  document.querySelector("body").style.backgroundColor = userInput.value;
  colors.push(userInput.value);
  userInput.value = ""
  userInput.focus();
  } else {
    alert("Renk zaten mevcut!");
  }
}
