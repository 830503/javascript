/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let letters = document.getElementById('target').innerHTML;
    let wave = "";
    let size = ['2','4','6','8','6','4','2'];
    for(let i = 0; i < letters.length; i++){
        let character = letters.charAt(i).fontsize(size[i%7]);
        wave += character;
        console.log(wave);
    }
    document.getElementById('target').innerHTML = wave;

  /*var running = true;
    var letter = document.getElementById('target').value;
    
    document.addEventListener('visibilitychange', function(){
        console.log (running);
        running = !document.hidden;
        if(!running) clerarQueues();
    })
    console.log(running);

    $(function(){
        var newLetter = "";

        for(var i = 0; i < letter.length; i++){
            newLetter += '<span>'+letter[i]+'</span>';
        }
        $('.material').html(newLetter);
        animateLetter();
    })


    function clerarQueues(){
        $('.materia').each(function(){
            var that = $(this);
            that.finish();
            that.clerarQueues();
        });   
    }
    function animateLetter(){
        var animateTime = 1500;
        if(running){
            $('.material').each(function(){
                var that = $(this);
                setTimeout(function(){
                    that.animate({
                        top:'-10px'
                    }, animateTime / 2)
                    .animate({
                        top: '10px'
                    }, animateTime / 2);
                }, that.index() * 100);
            });
            window.setTimeout(function(){
                animateLetter();
            },animateTime);
        } else {
            window.setTimeout(function(){
                animateLetter();
            },100);
        }
    }*/

})();
