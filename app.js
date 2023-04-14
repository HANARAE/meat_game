const grill = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false
}

const $btn = document.querySelector('.start-btn');
const $seconds = document.querySelector('.seconds');
let sec = 60;
$seconds.textContent = sec;
const $box = document.querySelectorAll('.box > img');

//고기생성함수
function randomMeat(e) {
    let meatNum = Math.floor(Math.random() * 8 + 1);
    if (!grill[meatNum]) {
        grill[meatNum] = true;
        $box[meatNum-1].classList.toggle('show');
    } else {
        meatNum = Math.floor(Math.random() * 8 + 1);
    }
}

//고기익기함수

//고기태우기함수


$btn.onclick = function (e) {
    e.target.parentNode.classList.toggle('hide');
    setTimeout(() => {
        e.target.parentNode.style.display = 'none';
    }, 1001);


    //시작버튼 누르면 
    function TIMER() {

        //랜덤하게 고기 생성
        const func2 = setInterval(function () {
            randomMeat();
        }, Math.floor(Math.random() * 2 + 1) * 1000);

        //남은시간 60초에서 0초까지 줄어듦
        const func = setInterval(function () {
            if (sec > 0) {
                sec = sec - 1;
                $seconds.textContent = sec;
            }
            if (sec === 0) {
                $seconds.textContent = '0'
            }
        }, 1000);






    }
    TIMER();



}



// const func = setInterval(function() {

// }
// }, 300);