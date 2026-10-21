function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var college = document.getElementById('college').value;
    var dept = document.getElementById('dept').value;
    var year = document.getElementById('year').value;
    var event = document.getElementById('event').value;

    if (name && email && phone && gender && college &&
        dept && year && event) {

        document.getElementById('confirmation').innerText =
            'Thank you, ' + name + '! You have registered successfully.';

        console.log('Registration Details:', {
            Name: name,
            Email: email,
            Phone: phone,
            Gender: gender,
            College: college,
            Department: dept,
            Year: year,
            Event: event
        });

    } else {
        alert('Please fill all the fields.');
    }
}
