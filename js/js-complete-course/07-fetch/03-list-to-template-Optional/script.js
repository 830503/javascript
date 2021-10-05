/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


document.getElementById('run').addEventListener('click', function(){
    let target = document.getElementById('target');
    async function getAPI(){
        let response = await fetch('http://localhost:3000/heroes');
        let data = await response.json();
        
        for(i = 0; i < data.length; i++){
            let temp = document.getElementById('tpl-hero').content.cloneNode(true);

            temp.querySelector('.name').innerHTML = data[i].name;
            temp.querySelector('em.alter-ego').innerHTML = data[i].alterEgo;
            temp.querySelector('.powers').innerHTML = data[i].abilities;
            target.appendChild(temp);
        }
            
        
        
    }

getAPI();

})

})();
