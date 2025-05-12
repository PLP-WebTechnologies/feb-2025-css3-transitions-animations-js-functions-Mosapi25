// Load stored name on page load
window.onload = function () {
  const storedName = localStorage.getItem('username');
  if (storedName) {
    document.getElementById('username').textContent = storedName;
  }
};

// Store the name in localStorage
function storeName() {
  const name = document.getElementById('nameInput').value;
  if (name.trim() !== "") {
    localStorage.setItem('username', name);
    document.getElementById('username').textContent = name;
    alert("Name saved!");
  } else {
    alert("Please enter a valid name.");
  }
}

// Trigger animations
function triggerAnimation() {
  const card = document.querySelector('.card');
  const img = document.getElementById('greetingImage');

  // Reset animations
  card.classList.remove('animate');
  img.classList.remove('float-img');
  void card.offsetWidth;
  void img.offsetWidth;

  // Trigger animations
  card.classList.add('animate');
  img.classList.add('float-img');
}
