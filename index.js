document.getElementById("run-button").addEventListener("click", function() {
  const contentElement = document.getElementById("Content");
  contentElement.textContent = "Running project...";

  // Simulate project output
  setTimeout(() => {
    contentElement.textContent = "Hello, World! This is the output of your Python project.";
  }, 1000);
});
