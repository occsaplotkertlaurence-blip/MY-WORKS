let student = document.getElementById("studentInput");
let score = document.getElementById("scoreInput");
let output = document.getElementById("output");

document.getElementById("checkBtn").addEventListener("click", () => {
    let name = student.value.trim();
    let points = Number(score.value);

    if (name === "" || score.value === "" || points < 0 || points > 100) {
        output.innerText = "Please enter a name and a score from 0 to 100.";
        output.className = "error";
        return;
    }

    let letter = "F";
    if (points >= 90) letter = "A";
    else if (points >= 80) letter = "B";
    else if (points >= 70) letter = "C";
    else if (points >= 60) letter = "D";

    let passed = points >= 60;
    output.innerText = name + " scored " + points + " (" + letter + "). " +
        (passed ? "Passed!" : "Needs improvement.");
    output.className = passed ? "passed" : "failed";
});