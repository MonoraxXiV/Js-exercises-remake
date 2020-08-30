/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var x = parseInt(document.getElementById("op-one").value);
    var y = parseInt(document.getElementById("op-two").value);

    var performOperation = function(operation) {
        switch (operation){
            case 'addition':
                var resultAdd= x+y;
                alert("the result is "+resultAdd);

                break;

            case 'substraction':
                var resultSub= x-y;
                alert("the result is "+resultSub);
                break;
            case 'multiplication':
;
                var resultMultiply= x*y;
                alert("the result is "+resultMultiply);
                break;
            case 'division':

                var resultDivide= x/y;
                alert("the result is "+resultDivide);
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();