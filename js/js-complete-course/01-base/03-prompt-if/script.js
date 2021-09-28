/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  let text;
  let person = prompt("Would you like some cake?", "");
  if (person == "Yes" || person == "yes"){
      text = "Congratulate!";
  } else{
    text = "More cake for me then :p !";
  }
  document.getElementById("demo").innerHTML = text;

})();