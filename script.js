
// DARK MODE TOGGLE WITH LOCAL STORAGE
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");

  modeToggle.textContent = isLight ? "🌞" : "🌙";
}

// LOAD THEME ON PAGE LOAD
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    modeToggle.textContent = "🌞";
  }
});

// FORM VALIDATION
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    showMessage("Please enter your name", "error");
    return;
  }

  if (!email.includes("@")) {
    showMessage("Please enter a valid email address", "error");
    return;
  }

  if (message.length < 10) {
    showMessage("Message must be at least 10 characters", "error");
    return;
  }

  showMessage("Message sent successfully!", "success");
  form.reset();
}

// REUSABLE MESSAGE FUNCTION
function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.style.color = type === "success" ? "#22c55e" : "#ef4444";
}