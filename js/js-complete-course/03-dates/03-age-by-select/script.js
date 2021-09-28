/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', function(){
       const day = document.getElementById('dob-day').value;
       const month = document.getElementById('dob-month').value;
       const year = document.getElementById('dob-year').value;
    function person(dob) {
        const diff = Date.now() - dob.getTime();
        const age = new Date(diff);
        
        return Math.abs(age.getUTCFullYear() - 1970);
    }

    alert (person(new Date(year, month, day)));
    });
})();
