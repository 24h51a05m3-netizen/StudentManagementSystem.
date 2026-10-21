
function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;

    if (name && roll) {
        var student = document.createElement("li");
        student.innerText = name + " - " + roll;

        document.getElementById("list").appendChild(student);

        document.getElementById("name").value = "";
        document.getElementById("roll").value = "";
    } else {
        alert("Please enter all details.");
    }
}
