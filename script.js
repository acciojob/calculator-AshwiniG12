//your code here
const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (this.id === "plus") {
      input.value += "+";
    } else if (this.id === "minus") {
      input.value += "-";
    } else if (this.id === "multiply") {
      input.value += "*";
    } else if (this.id === "divide") {
      input.value += "/";
    } else if (this.id === "ans") {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = error.message;
      }
    } else if (this.id === "clr") {
      input.value = "";
    } else {
      input.value += this.textContent;
    }
  });
});

