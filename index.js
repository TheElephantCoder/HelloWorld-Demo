document.getElementById("run-button").addEventListener("click", function() {
  const contentElement = document.getElementById("Content");
  contentElement.textContent = "...";

  // Simulate project output
  setTimeout(() => {
    contentElement.textContent = "Hello World!";
  }, 1000);
});
