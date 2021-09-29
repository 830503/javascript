/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

       var input = document.getElementById('number').value;

          if (input < 0){
               alert("error");
        
       } else if (input == 0 || input == 1){
           alert(1);
       } else {
           var ret = input * factorialize(input - 1);
           alert(ret);
       }


    });

})();

