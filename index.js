

 
    let btn = document.getElementById("btn");



    btn.addEventListener('click', function (e) {

        let dobDate = document.getElementById("date").value;
        let dobMonth = document.getElementById("month").value;
        let dobYear = document.getElementById("year").value;

     // date


    if (dobDate > 31 && dobDate > 0) {
        alert("Invalid date entered !");
    }



    if (dobDate == 0 || dobDate == "") {
        alert("date field can not be blancked !");
        return;
    }
    if (dobYear == 0 || dobYear == "") {
        alert("year field can not be blancked !");
        return;
    }
    if (dobMonth == "") {
        alert("please select a month !");
        return;
    } else if (dobMonth > 12) {
        alert("Enter a valid month !")
    }

    // year-------------------------------------------------------

    let currentYear = new Date().getFullYear();
    let yourAgeIs = currentYear - dobYear;


    // month------------------------------------------------------

    if (dobMonth <= 12 && dobMonth >=0) {
        let currentMonth = new Date().getMonth();
        if (currentMonth >= dobMonth) {
            let monthDifference = currentMonth - dobMonth;
            // alert(yourAgeIs + "Years" + monthDifference + "Months");
            document.getElementById('show').innerHTML = yourAgeIs + " " + "Years " + monthDifference + " " + "Months";

        } else {
            yourAgeIs--
            monthDifference = 12 + currentMonth - dobMonth;
            // alert(yourAgeIs +" " +"Years" + monthDifference+ " Months ");
            document.getElementById('show').innerHTML = yourAgeIs + " " + "Years " + monthDifference + " " + "Months";

        }
        }
        
        document.getElementById("date").value = " ";
        document.getElementById("month").value = " ";
        document.getElementById("year").value = " ";

        e.preventDefault();
   })


