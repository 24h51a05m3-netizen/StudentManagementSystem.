function addBook() {
    var book = document.getElementById("book").value;
    var student = document.getElementById("student").value;

    if (book && student) {
        var item = document.createElement("li");
        item.innerText = book + " - " + student;

        document.getElementById("list").appendChild(item);
    } else {
        alert("Please enter all details");
    }
}
