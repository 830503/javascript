/* becode/javascript
 *
 * /05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

   document.getElementById('run').addEventListener('click', function(){

       /* let sum = people.reduce(redu, 0);
        function redu(previousValue, currentValue){
          return (previousValue + currentValue.age);
       }*/
       
       //Arrow 
       // let sum = people.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0);

       //by using .map Arrow

      //let sum = people.map(currentValue => currentValue.age).reduce((previousValue, val) => previousValue + val, 0); 

      //.map
      let sum = people.map(currentValue => currentValue.age).reduce(redu, 0);
      function redu(previousValue, val){
          return previousValue + val;
      }




       
        console.log(sum);
        
    
       });




})();
