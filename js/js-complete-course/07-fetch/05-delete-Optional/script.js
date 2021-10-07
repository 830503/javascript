/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    document.getElementById('run').addEventListener('click', function(){
    async function getAPI(){
        let response = await fetch('http://localhost:3000/heroes');
        let data = await response.json();
        let idRemove = document.getElementById('hero-id').value;
        if(idRemove <= data.length && idRemove > 0){
            const newData = data.splice((idRemove - 1), 1);
            console.log(data);
        } else {
            console.log('error');
        }
            
        
        
       
        
    }
    
        getAPI();
   })

   
})();
