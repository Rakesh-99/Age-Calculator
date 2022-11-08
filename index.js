


let calculate = () => {
    
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    // console.log(date + '/' + month + '/' + year);

    if (date == 0 || date == '') {
        alert("date field can not be blancked !");
        return;
    }
    if (year == 0 || year == '') {
        alert('year field can not be blancked !');
        return;
    }

    let userDate = new Date();
    let dob = new Date(`${date} ${month} ${year}`);
    console.log(dob);

    let diffrence = (userDate - dob);
    console.log(diffrence);

    let finalAge = Math.floor(diffrence / (1000 * 60 * 60 * 24) / 365 );  
    console.log( finalAge);



}