/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var name = prompt("Name: ", "");
    var age = prompt("Aage: ", "");
    var adress = prompt("Adress:", "");
    if (name == null || age == null || adress == null ){
        text ="User cancelled."; 
    } else{
        confirm("My name is " + name + ". " + "I'am " + age + ". " + "I live in " + adress + ". ");
    }
   
   
})();
