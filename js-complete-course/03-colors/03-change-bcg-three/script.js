/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var button = document.getElementById("run");
    button.onclick = function() {
        function random_bg_color() { //defines the function
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            //randomizes rgb values and adds them together to form a color
            console.log(bgColor);

            document.body.style.background = bgColor;
        }

        random_bg_color(); //runs the function
    }

})();
