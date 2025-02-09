// Select the toggle input
const toggleInput = document.getElementById('page-toggle');

// Add event listener for toggle
toggleInput.addEventListener('change', (e) => {
  if (e.target.checked) {
    alert('Switching to Verified Page');
    window.location.href = 'verified.html'; // Replace with your verified page URL
  } else {
    alert('Switching to Community Page');
    window.location.href = 'community.html'; // Replace with your community page URL
  }
});
