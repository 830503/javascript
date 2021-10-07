/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var txt = document.getElementById('target');
    var test = txt.innerHTML;
    txt.innerHTML  = '';
    console.log(test);
    var i = 0;
    var max = 200;
    var min =0;

    function typeWriter(){
        if(i < test.length){
            var speed = Math.floor(Math.random() * (max - min));
            txt.innerHTML += test.charAt(i)
            i++;
            setTimeout(typeWriter, speed);
        }
        
    }
    typeWriter();


})();
