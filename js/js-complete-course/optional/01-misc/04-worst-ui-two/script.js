/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let btn1 = document.getElementById('part-one');
    let btn2 = document.getElementById('part-two');
    let btn3 = document.getElementById('part-three');
    let btn4 = document.getElementById('part-four');
    let target = document.getElementById('target');
    let buttons = [btn1, btn2, btn3, btn4];

    buttons.forEach(myFunction);
    function myFunction(button){
        button.addEventListener('click', function(){
            let min = button.getAttribute('data-min');
            let max = button.getAttribute('data-max');
            let input = parseInt(button.innerHTML) + 1;
            if(input > max){
                input = min;
            }else if (input < 10){
                button.innerHTML = '0' + input;
            } else {
                button.innerHTML = input.toString();
            }
            target.innerHTML = '+' + btn1.innerText + btn2.innerText + btn3.innerText + btn4.innerText;
        })

    }

})();
