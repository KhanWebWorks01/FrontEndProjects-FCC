document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button");
  
    // Add click event listener to each button
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        handleButtonClick(button.textContent);
      });
    });
  
    // Function to handle button click
    function handleButtonClick(value) {
      switch (value) {
        case "=":
          calculateResult();
          break;
        case "C":
          clearInput();
          break;
        default:
          addToInput(value);
      }
    }
  
    // Function to add value to input
    function addToInput(value) {
      input.value += value;
    }
  
    // Function to clear input
    function clearInput() {
      input.value = "";
    }
  
    // Function to calculate and display result
    function calculateResult() {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
    }
  });
  