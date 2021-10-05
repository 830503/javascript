/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 
    
    document.getElementById('run').addEventListener('click', function(){
        let id_input = document.getElementById('hero-id').value;  
        let target = document.getElementById('target');
        async function getAPI(){
            let response = await fetch("http://localhost:3000/heroes");
            let data  = await response.json();
        for(i = 0; i < data.length; i++){
            let xman = document.getElementById('tpl-hero').content.cloneNode(true);
            if(data[i].id == id_input){
                xman.querySelector('.name').innerHTML = data[i].name;
                xman.querySelector('em.alter-ego').innerHTML = data[i].alterEgo;
                xman.querySelector('.powers').innerHTML = data[i].abilities;
                target.appendChild(xman);
            }
        }   
            
        
        }

    getAPI();

    })




 
    


})();
