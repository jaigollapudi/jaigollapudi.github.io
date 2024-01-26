// Accessing DOM elements
const contactButton = document.querySelector("#contactButton");
const contactForm = document.querySelector("#contactForm");
const submitButton = document.querySelector("#submitButton");

// Event listener for the 'contact' button to show the contact form
contactButton.onclick = () => {
  contactForm.style.display = 'block';
};

submitButton.onclick = () => {
  // Fetching values from the form inputs
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  // Alert to confirm message submission
  alert(`Thank you, ${name}! We've received your message.`);
};

// Toggle button
const toggleContentsButton = document.querySelector("#toggleContentsButton");
const futureContentsSection = document.querySelector("#futureContents");

// Function to toggle the visibility of the Future Contents section
function toggleFutureContents() {
  if (futureContentsSection.style.display === 'none') {
    futureContentsSection.style.display = 'block';
  } else {
    futureContentsSection.style.display = 'none';
  }
}

// Initially hide the Future Contents section when the page loads
futureContentsSection.style.display = 'none';
