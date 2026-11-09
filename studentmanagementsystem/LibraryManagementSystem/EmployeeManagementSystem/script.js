
function addEmployee() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;

    if (name && id) {
        var item = document.createElement("li");
        item.innerText = name + " - " + id;

        document.getElementById("list").appendChild(item);
    } else {
        alert("Please enter all details");
    }
}
