// Get the input element
var input = document.getElementById("profile-input");
// Add an onchange event listener
input.addEventListener("change", function () {
    // Get the selected file
    var file = this.files[0];
    // Create a new FileReader object
    var reader = new FileReader();
    // Add an onload event listener
    reader.onload = function () {
        // Get the image element
        var image = document.getElementById("profile-image");
        // Set the src attribute to the base64 encoded image data
        image.src = this.result;
    };
    // Read the file as a data URL
    reader.readAsDataURL(file);
});