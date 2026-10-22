// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select the button
  const button = document.querySelector("button");

  // Add a click event listener
  button.addEventListener("click", () => {
    alert("Button clicked! 🎉");
  });

  // Change heading color when hovered
  const heading = document.querySelector("h1");
  heading.addEventListener("mouseover", () => {
    heading.style.color = "tomato";
  });
  heading.addEventListener("mouseout", () => {
    heading.style.color = "#2c3e50";
  });
});
