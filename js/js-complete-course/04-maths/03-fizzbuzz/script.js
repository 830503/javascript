/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   
    var num = [];

    for(let i=0; i<100; i++) {
        if((i % 3 )== 0){
            num.push('fizz');
        } else if((i % 5) == 0){
             num.push('buzz');
            } else if((i % 3) == 0 && (i % 5) == 0){
                num.push('fizzbuzz')
            }
            else {
                num.push(i);
            }
        console.log(num);
    }
   
})();
