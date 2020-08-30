/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var numbers = document.getElementById("numbers").value;
    var NumbersArray= [numbers]

    document.getElementById("run").addEventListener("click", function () {

            // numberlog is for debugging to see if the issue is in the sort function or getting the array.
            let numberlog=[2, 4, 14, 10, 90, 23, 16]
            numberlog.sort(function (a, b) {
                return a - b
            });
        console.log(numberlog);
    });

})();
