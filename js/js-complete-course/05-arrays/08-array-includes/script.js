/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

  document.getElementById('run').addEventListener('click', function(){
    var newfruit = "apple";
    fruits.includes(newfruit) === false ? fruits.push(newfruit) : console.log("Apple already exist.");
    console.log(fruits);
//can use "indexOf(newfruit) === -1 ? " to replace .include...

  })

})();
