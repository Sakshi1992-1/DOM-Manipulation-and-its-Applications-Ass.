// Get the modal login and signup buttons
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.getElementById("signupBtn");

// Get the login and signup modals
var loginModal = document.getElementById("loginModal");
var signupModal = document.getElementById("signupModal");

// Get the <span> element that closes the modals
var closeBtns = document.getElementsByClassName("close");

// When the user clicks the login or signup button, open the corresponding modal
loginBtn.onclick = function () {
  loginModal.style.display = "block";
};
signupBtn.onclick = function () {
  signupModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function () {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
};
//task 2:-
const categoryButtons = document.querySelectorAll(".show-category-btn");
const restaurantCards = document.querySelectorAll(".card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove "active" class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));

    // Add "active" class to clicked button
    button.classList.add("active");

    // Get selected category
    const category = button.dataset.category;

    restaurantCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// Show all category on "All" button click
const allButton = document.querySelector('[data-category="all"]');
allButton.addEventListener("click", () => {
  restaurantCards.forEach((card) => {
    card.style.display = "block";
  });
});
