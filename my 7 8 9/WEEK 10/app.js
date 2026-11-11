let nameInput = document.getElementById("nameInput");
let countInput = document.getElementById("countInput");
let greetBtn = document.getElementById("greetBtn");
let output = document.getElementById("output");

greetBtn.addEventListener("click", () => {
    let name = nameInput.value.trim();
    let count = Number(countInput.value);

    if (name === "") {
        output.innerText = "Please enter your name first.";
        output.classList.add("error");
    } else if (count < 1 || count > 20) {
        output.innerText = "Please enter a number from 1 to 20.";
        output.classList.add("error");
    } else {
        let message = "";
        for (let i = 0; i < count; i++) {
            message += "Hello, " + name + "! ";
        }
        output.classList.remove("error");
        output.innerText = message;
    }
});