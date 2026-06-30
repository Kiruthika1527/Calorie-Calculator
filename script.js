function calculateCalories() {
    let gender = document.getElementById("gender").value;
    let age = parseInt(document.getElementById("age").value);
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(age) || isNaN(height) || isNaN(weight)) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    let calories;

    if (gender === "male") {
        calories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        calories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById("result").innerHTML =
        "Your daily calorie requirement is <b>" +
        Math.round(calories) +
        " kcal/day</b>";
}