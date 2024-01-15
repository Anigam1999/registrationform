// setting required attribute in required input tags
document.querySelector("input[type='submit']").addEventListener('click', addRequired);
function addRequired(){
    const inputs = document.querySelectorAll('input[data-control="required"]')
    for(let i=0; i<inputs.length; i++){
        inputs[i].setAttribute("required", "");
    }
}

const x = document.querySelectorAll(".details input");

for (let i = 0; i < x.length; i++) {
    if (x[i].type === "text") {
        x[i].addEventListener("input", warnAlpha);
        x[i].addEventListener("change", revertBack);
    }
}

function warnAlpha() {
    if (this.value.length === 0) {
        return;
    }

    const isValid = this.value.at(-1).match(/[a-zA-z,.\s]/);
    const ptags = this.parentNode.querySelectorAll("p");

    if (isValid === null) {
        this.value = this.value.substr(0, this.value.length - 1);
        const textnode = document.createTextNode(this.name + " should contain only alphabets");
        const node = document.createElement("p");
        node.appendChild(textnode);

        if (ptags.length === 0) {
            this.parentNode.appendChild(node);
            node.style.display = "block";
        }
    } else if (ptags.length === 1) {
        this.parentNode.removeChild(ptags[0]);
    }
}

function revertBack() {
    const ptags = this.parentNode.querySelectorAll("p");

    if (ptags.length === 1) {
        this.parentNode.removeChild(ptags[0]);
    }
}
    
