let calculate = () => {
    let date = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    
    if (date == 0 || date == "") {
        alert("Date field can not be blancked !");
        return;
    }
    if (year == 0 || year == "") {
        alert("Year field can not be blancked !");
        return;
    }

    let currentDate = new Date();
    let dob = new Date(`${date}  ${month} ${year}`);
    
    let diffrence = (currentDate - dob);

    let ageIs = Math.round(diffrence / (1000 * 60 * 60 * 24) / 365);
    alert(`Your age is ${ageIs}`);
}