"use strict"

//スタートボタンを押した時の処理
function startaction(){
    let leftTime = document.getElementById("time");
    let minute = document.getElementById("minute").value;
    let second = document.getElementById("second").value;
    leftTime.innerText = String(Number(minute))+"分" + String(Number(second))+"秒";
    
    setInterval(() => {
        //最初0秒だった時の処理
        if (second !== -1){
            second = second -1;
        }

        //0秒になった後の処理
        if (second == -1 && minute !== 0) {
            minute = minute -1;
            second = 59
        }
        //タイムアップの処理
        if (second==-1 && minute==0){
            leftTime.innerText = "タイムアップ";
        } else {
            leftTime.innerText = String(Number(minute))+"分" + String(Number(second))+"秒";
            console.log(second)
            console.log(minute)
        }
    }, 1000)
}

const sb = document.getElementById("start");
sb.addEventListener("click", startaction)
