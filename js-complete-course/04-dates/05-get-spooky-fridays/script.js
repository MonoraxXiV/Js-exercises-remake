/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


        var year = document.getElementById("year").value;

        document.getElementById("run").addEventListener("click", function () {
            //looping through the months
            for (i = 0; i < 12; i++) {
                var d = new Date(year, i, 13);
                if (d.getDay() === 5) {

                    console.log(d.toLocaleString('default', {month: 'long'}));
                }
            }
        })


})();
