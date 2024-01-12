import showModal from "./modal";
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

    showModal();

});