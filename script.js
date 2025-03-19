const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

setTimeout(() => {
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
}, 3500);

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill out all fields before submitting.");
    }
  });

const button = document.getElementById("glowButton");
let stars = [];

button.addEventListener("mouseover", () => {
  removeStars();
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("div");
    star.classList.add("stars");
    if (Math.random() > 0.5) star.classList.add("large");

    // Append stars inside the button
    button.appendChild(star);

    let buttonRect = button.getBoundingClientRect();
    let startX = Math.random() * buttonRect.width;
    let startY = Math.random() * buttonRect.height;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;

    setTimeout(() => {
      let angle = Math.random() * 2 * Math.PI;
      let distance = Math.random() * 30 + 10; // Reduced distance to stay closer
      let moveX = Math.cos(angle) * distance;
      let moveY = Math.sin(angle) * distance;
      star.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`;
      star.style.opacity = "1";
    }, 50);

    stars.push(star);
  }
});

button.addEventListener("mouseleave", () => {
  removeStars();
});

function removeStars() {
  stars.forEach((star) => {
    star.style.opacity = "0";
    setTimeout(() => star.remove(), 500);
  });
  stars = [];
}

document.getElementById("glowButton").addEventListener("click", function () {
  window.location.href = "https://piyush-resume-request.onrender.com/";
});
document.getElementById("glowButton").addEventListener("click", function () {
  const button = this; // Reference the button itself
  button.disabled = true; // Disable the button
  button.innerText = "Please wait....."; // Change text to "Please wait....."

  // Redirect after a short delay (optional)
  setTimeout(() => {
    window.location.href = "https://piyush-resume-request.onrender.com/";
  }, 1000); // Delay for UX enhancement
});


var typed = new Typed('#element', {
    strings: ['Full Stack Dev' ,'Tech Enthusiast' , 'Problem Solver','Traveller...', '  '],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });



  document.addEventListener("scroll", function () {
    const statsSection = document.querySelector(".text-3xl");
    const fadeInText = document.getElementById("fade-in-text");

    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
        fadeInText.classList.add("visible");
        setTimeout(() => {
            fadeInText.classList.remove("visible");
        }, 3000); // Text will appear for 3 seconds
    }
});
