/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById('pass-one').addEventListener('keyup', function(){
        var pwinput = document.getElementById('pass-one').value;
        var loweCaseLetter = /[a-z]/g;
        var uperCaseLetter = /[A-Z]/g;
        var num = /[0-9]/g;
        var mynum = pwinput.match(num);
        if(pwinput.length < 8 || mynum.length < 2){
            document.getElementById('validity').innerHTML = "Not OK";
        } else{
            document.getElementById('validity').innerHTML = 'OK';
        };
      


    })

})();
