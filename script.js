const colorOne = document.getElementById("color-a");
const colorTwo = document.getElementById("color-b");
let currDirection = 'to bottom';
let generateBtn = document.getElementById("generate");
let outputCode = document.getElementById("code");

let copyBtn = document.getElementById("copy");

function setDirection(value,_this) {
    let directions = document.querySelectorAll(".buttons button");

    for(let i of directions) {
        i.classList.remove("active"); 
    }

    _this.classList.add("active");
    currDirection = value;
}


function generateCode() {
    if (!/^#[0-9A-F]{6}$/i.test(colorOne.value) || !/^#[0-9A-F]{6}$/i.test(colorTwo.value)) {
        alert("Please enter valid hex colors!");
        return;
    }
    outputCode.value = `background: linear-gradient(${currDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.body.style.background = `linear-gradient(${currDirection}, ${colorOne.value}, ${colorTwo.value})`;
}


function copyText() {
    navigator.clipboard.writeText(outputCode.value)
    .then(() => {
            alert("Gradient Copied!");
        });
}

generateBtn.addEventListener("click", () => {
    generateCode();
});

colorOne.addEventListener('input', generateCode);
colorTwo.addEventListener('input', generateCode);

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateCode();
    }
});

copyBtn.addEventListener("click", () => {
    copyText();
});

outputCode.addEventListener("click", () => {
    outputCode.select();
});
