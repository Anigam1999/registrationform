// Function to show the modal
const showModal = () => {
    // Get the modal and overlay elements
    let modal = document.getElementById('myModal');
    let overlay = document.getElementById('overlay');
    let modalContent = document.getElementById('modalContent');

    // Get the close button inside the modal
    let closeModalBtn = document.getElementById('closeModal');

    // Retrieve data from local storage
    let storedData = JSON.parse(localStorage.getItem('formData'));

    // Display data in the modal
    // modalContent.innerHTML = "<p>Name: " + storedData.name + "</p><p>Email: " + storedData.email + "</p>";
    modalContent.innerHTML = "Hello HTML";

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

export default showModal;