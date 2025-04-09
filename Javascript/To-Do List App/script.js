const Data = document.querySelector(".Data");
const Button = document.querySelector(".btn");
const text = document.querySelector("#text");

// Add new item
function evenhanded() {
  const input_text = text.value.trim();
  if (input_text !== "") {
    Data.innerHTML += `<p class="text_data">${input_text}<span class="delete">X</span></p>`;
    text.value = "";
  }
}

Button.addEventListener("click", evenhanded);

// Delete item using event delegation
Data.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
