// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Change navigation bar background on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.backgroundColor = '#333'; // Add background color on scroll
  } else {
    nav.style.backgroundColor = 'transparent'; // Remove background color at top of page
  }
});

// Contact form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = form.querySelector('input[placeholder="Your Name"]').value;
  const email = form.querySelector('input[placeholder="Your Email"]').value;
  const message = form.querySelector('textarea[placeholder="Your Message"]').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Success message or submit logic here
  alert('Message sent successfully!');
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Scroll to Top button functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
