// Your JavaScript code here
document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data using FormData
    let formData = new FormData(event.target);

    // Convert FormData to a plain object
    let formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('formData', JSON.stringify(formDataObject));

    // Show modal on form submission
    showModal();
    event.target.reset();
});

// Function to show the modal
function showModal() {
    // Get the modal and overlay elements
    let modal = document.getElementById('myModal');
    let overlay = document.getElementById('overlay');
    let modalContent = document.getElementById('modalContent');

    // Get the close button inside the modal
    let closeModalBtn = document.getElementById('closeModal');

    // Retrieve data from local storage
    let storedData = JSON.parse(localStorage.getItem('formData'));

    // Display data in the modal
    // modalContent.innerHTML = "<p>Email: " + storedData.email + "</p>";
    modalContent.innerHTML = localStorage.getItem('formData');

    // Show the modal and overlay
    modal.style.display = 'block';
    overlay.style.display = 'block';

    // Close modal when the close button is clicked
    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };

    // Close modal if overlay is clicked
    overlay.onclick = function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    };
}