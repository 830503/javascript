/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener('click', function(){
        // 1. filter ---method creates a new array of elements that pass the conditional we provide.
       
        function removeDup(data){
            var ret = data.filter((value, index) => data.indexOf(value) === index);
            return ret;
        
        }
        
        //retrieve the value from duplicate

       /* function removeDup(data){
            var ret = data.filter((value, index) => data.indexOf(value) !== index);
            return ret;
        }*/

        // 2. set---that allows you to create collections of unique value

        /*function removeDup(data){
            return [...new Set(data)]
        }*/

        // 3. forEach

        /*function removeDup(data){
            let unique = [];
            data.forEach(element => {
                if (!unique.includes(element)){
                    unique.push(element)
                }
            });
            return unique;
        }*/

        // 4. reduce

       /* function removeDup(data){
            let unique = data.reduce(function(a, b){
                if (a.indexOf(b)<0)a.push(b);
                return a;
            }, [])
            return unique;
        }*/

        /*function removeDup(data){
            return data.reduce((pre, cur) => pre.includes(cur) ? pre : [...pre, cur], []);
        }*/

        // 5. add unique method
       /* Array.prototype.unique = function(){
            var unique = [];
            for(i=0; i<this.length; i++){
                var current = this[i];
                if(unique.indexOf(current) < 0) unique.push(current);
            }
            return unique;
        }
        console.log(fruits.unique());*/

       /* Array.prototype.unique = function(){
            return Array.from(new Set(this));
        }
        console.log(fruits.unique());*/

    

    console.log(removeDup(fruits));

    })
})();


