// this is also right but this is old.

// document.getElementById('owl').onclick = function () {
//     alert("owl clicked")
// }

// self study...

//types of event , timeStamp, defaultPrevented
//target, toElement, srcElement, currentTarget,
//clientx, clienty, screenx, screeny, altkey, ctrlkey,
//shiftkey, keycode. 

// this one fomous.

// document.getElementById('images').addEventListener('click', function(e)  {
//     // alert("owl is clicked")
//     console.log("clicked inside the url "); 
    
//  }, false)

//  document.getElementById('owl').addEventListener('click',function(e) {
//     console.log("owl clicked ");
    
//  }, false)

//  document.getElementById('google').addEventListener('click', function(e) {
//     e.preventDefault();
//     e.stopPropagation()
//     console.log(("google clicked "));
    
//  })

// here we solving when i click on image that image is remove 

document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target);
         let removeIt = e.target.parentNode
         removeIt.remove()
        
    }
   
    //this thss first method 

    // second method..
    // removeIt.parentNode.removeChild(removeIt)
    
},false)
