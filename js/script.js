// Example of a simple JavaScript function to show an alert when the button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.about-text button');
    downloadButton.addEventListener('click', function() {
        alert('CV Download button clicked!');
    });
});
