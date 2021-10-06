/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById('run').addEventListener('click', function(){
        async function getAPI(){
            var response = await fetch('http://localhost:3000/heroes');
            var data = await response.json();
    
            let names = document.getElementById('hero-name').value;
            let alter_Ego = document.getElementById('hero-alter-ego').value;
            let power = document.getElementById('hero-powers').value;
    
            let newData = {
                id: data.length +  1,
                name: names,
                alterEgo: alter_Ego,
                abilities: power
            }
            data.push(newData);
            console.log(data);
        }
      
        getAPI();
    })



})();
