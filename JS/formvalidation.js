// setting required attribute in required input tags
document.querySelector("input[type='submit']").addEventListener('click', addRequired);
function addRequired(){
    const inputs = document.querySelectorAll('input[data-control="required"]')
    for(let i=0; i<inputs.length; i++){
        inputs[i].setAttribute("required", "");
    }
}

// displaying warning for input tags
const x = document.querySelectorAll(".details input");
for(let i=0; i<x.length; i++){
    if(x[i].type === "text"){
        x[i].addEventListener("input", warnAlpha);
        function warnAlpha() {
            if(x[i].value.length === 0)
                return 
            // x[i].parentNode.style.height = "40px"
            const isValid = x[i].value.at(-1).match(/[a-zA-z,.\s]/)
            const ptags = x[i].parentNode.querySelectorAll("p")
            if(isValid === null){
                x[i].value = x[i].value.substr(0, x[i].value.length - 1);
                const textnode = document.createTextNode(x[i].name + " should contain only alphabets");
                const node = document.createElement("p");
                node.appendChild(textnode);
                if(ptags.length === 0){
                    x[i].parentNode.appendChild(node);
                    node.style.display = "block";
                }
            } else if(ptags.length === 1){
                x[i].parentNode.removeChild(ptags[0]);
            }
        }
        x[i].addEventListener("change", revertBack);
        function revertBack(){
            const ptags = x[i].parentNode.querySelectorAll("p")
        //     x[i].parentNode.style.height = "auto";
            if(ptags.length === 1){
                x[i].parentNode.removeChild(ptags[0]);
            }
        }
    }
}
    
