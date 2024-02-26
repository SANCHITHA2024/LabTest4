let no1 = parseInt(prompt("Enter the first No:", 0));
let no2 = parseInt(prompt("Enter the second No:", 0));

if (Number.isInteger(no1) == false || Number.isInteger(no2) == false) {
    alert("You must enter a valid number");
}
else if (no1 > no2) {
    alert("The first number should be smaller than the second number");
    document.body.style.backgroundColor = "red";
}
else {
    var result = 'The output is: <br><br>';
    var total = 0;
    for (i = no1; i <= no2; i++) {
        result = result + i + '<br><br>';
        total += parseInt(i);
    }
    result = result + 'Total : ' + total
    document.body.innerHTML = result;
    document.body.style.backgroundColor = "white";
}