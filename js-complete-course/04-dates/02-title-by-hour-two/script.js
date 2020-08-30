/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var total=hours+minutes;

//basically making this into a total number to compare. do not use &&30 or it will say good evening after half hour has passed.
    if (total > 1730) {
        document.getElementById("target").innerHTML = "Good evening";
    }
    else{
        document.getElementById("target").innerHTML = "hello";
    }
})();
