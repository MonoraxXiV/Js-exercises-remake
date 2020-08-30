/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var x= parseInt(document.getElementById("op-one").value);
    var y= parseInt(document.getElementById("op-two").value);
    document.getElementById("addition").addEventListener("click", function() {

    var add=x+y;
    alert("the result is "+ add);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var subtract= x-y;
        alert("the result is "+ subtract);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var multiply= x*y;
        alert("the result is "+ multiply);
    });

    document.getElementById("division").addEventListener("click", function() {
        var divide= x/y;
        alert("the result is "+ divide);
    });
})();
