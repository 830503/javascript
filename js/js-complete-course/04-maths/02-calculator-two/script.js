/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    

    var performOperation = function(operation) {
        var a = document.getElementById('op-one').value;
        var b = document.getElementById('op-two').value;
       switch(operation){
           case 'addition' :
              var result = Number(a) + Number(b);
               break;
            case 'substraction' :
               var result = Number(a) - Number(b);
                break;
            case 'multiplication' :
               var result = Number(a) * Number(b);
                break;
            case 'division':
               var result = Number(a) / Number(b);
                break;
                
       }
       alert(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
