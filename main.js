let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let value = this.innerHTML;

    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "C") {
      display.value = "";
    } else {
      display.value += value;
    }
  });
}