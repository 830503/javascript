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
    //use if function
    /*function factorialize(input){
        if(input < 0){
            return -1;
        } else if (input == 1 ){
            return 1;
        } else {
            return (input * factorialize(input - 1));
        }
    };*/
    
    //using while loop
    /*    function factorialize(input){
        var result = input;
        if(input == 0 || input == 1){
            return 1;
        }  while (input > 1){
            input--;
            result *= input;
        }
        return result;
    } */

    //using for loop
    function factorialize(input){
        if (input == 0 || input ==1){
            return 1;
        } for(let i = input -1; i > 1; i--){
            input *= i;
        }
        return input;
    }

    document.getElementById("run").addEventListener("click", function() {

       var input = document.getElementById('number').value;
           document.getElementById('number').value = factorialize(input);
       }

       
    );

})();

