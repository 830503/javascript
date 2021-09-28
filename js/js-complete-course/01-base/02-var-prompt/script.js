/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person ==""){
        text ="User cancelled the prompt.";
    } else{
        text = "Hello, " + person + "!";
    }
        document.getElementById("demo").innerHTML = text;

})();
