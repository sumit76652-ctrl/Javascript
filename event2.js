// setTimeout(function() {
//     console.log("sumit");
    
// }, 2000)

// const changeText = function(){
//     document.querySelector('h1').
//     innerHTML = "best js series"
    
    
// }

// const changeMe = setTimeout(changeText, 2000)

// document.querySelector('#stop').addEventListener
// ('click', function() {
//     clearTimeout(changeMe)
//     console.log("stopped")
// })

// const sayDate = function() {
//     console.log("sumit", Date.now);
    
// }

// const intervalId = setInterval(sayDate,1000);

// clearInterval(intervalId)

let interval;

const startId = function() {
    console.log("start");
}


 document.querySelector('#start').addEventListener
('click', function(){
  if(!interval){
    interval = setInterval(startId, 1000);
  }
    
})

document.querySelector('#stop').addEventListener
('click', function(){
    clearInterval(interval);
    interval = null;
    console.log("stop");
    
})

// const startI = setInterval(start, 1000)

