/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //get the value of target attribute
    var image = document.getElementById('source').getAttribute('data-image');
    
    //creat new element
    var att = document.createElement('img');
    att.setAttribute('src', image);

    var eltarget = document.getElementById('target');
    eltarget.appendChild(att);

        //document.getElementById('target').appendChild(att);

    //remove old one

       
    document.getElementById('source').remove();

    

})();
