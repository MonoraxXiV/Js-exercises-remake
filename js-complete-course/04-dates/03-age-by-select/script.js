/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var age;
    document.getElementById("run").addEventListener("click", function() {
        //getting the birthday of the input
        let dobDay = document.getElementById("dob-day").value;
        let dobMonth = document.getElementById("dob-month").value;
        let dobYear = document.getElementById("dob-year").value;

        var d = new Date();

        //Gets the values of today
        var dYear = d.getFullYear();
        var dMonth = d.getMonth();
        var dDate = d.getDate();

        //basically calculating the approximate age by first subtracting date of birth year by the year of today
        var yearsDiff = dYear - dobYear;
        //checking if the month is less than the current one
        if ( dMonth < dobMonth )
        {
            age = yearsDiff - 1;
            if ( dDate <= dobDay )
            {
                age = yearsDiff - 1;
            }
            else
            {
                age = yearsDiff;
            }
        }
        else if ( dMonth >= dobMonth )
        {
            age = yearsDiff ;
            if ( dDate <= dobDay )
            {
                age = yearsDiff - 1;
            }
            else
            {
                age = yearsDiff;
            }
        }


        alert("You are "+age+ " years old");


    })

})();
