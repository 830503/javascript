/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // get the reference for the body
    var body = document.getElementById('target');

    //creates a <table> element and a <tbody> element
    var tb1 = document.createElement('table');
    var tb1body = document.createElement('tbody');

    //creating cells
    for (let i = 0; i < 10; i++){
        //create row
        var row = document.createElement('tr');
        
        for (let j = 0; j <1; j++){
            //creat column
            var cell = document.createElement('td');
            
            row. appendChild(cell);
        }
        //add row to table body
        tb1body.appendChild(row);
    }
    //put <tbody> in the <table>
    tb1.appendChild(tb1body);
    //appends <table> into id"target"
    body.appendChild(tb1);




})();
