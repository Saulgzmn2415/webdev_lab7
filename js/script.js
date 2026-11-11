function init() {
  // Get references to the elements
  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  // Add event listener to the red "Alert Me" box
  button.addEventListener("click", function() {
    // Get the text from the input field
    const message = input.value;

    // Show alert with my name + colon + message
    alert("Saul Guzman: " + message);

    // Change the headline below the button
    output.textContent = message;
  });
}

window.addEventListener("load", init);
