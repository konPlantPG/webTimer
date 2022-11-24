"use strict"

function startaction(){
    let startTime = Date.now();
    console.log(startTime);
}

const sb = document.getElementById("start");
sb.addEventListener("click", startaction)
