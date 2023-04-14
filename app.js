const $btn = document.querySelector('.start-btn');
const $seconds = document.querySelector('.seconds');

let sec = 60;
$seconds.textContent = sec;

$btn.onclick = function (e) {
    e.target.parentNode.classList.toggle('hide');
    setTimeout(() => {
        e.target.parentNode.style.display = 'none';
    }, 1001);

    function TIMER(){
        PlAYTIME=setInterval(function(){
           if(sec>0){
                sec=sec-1;
                $seconds.textContent = sec;
            }
            if(sec===0){
                $seconds.textContent='0'
                
            }    
        },1000);
    }
    TIMER();
}

