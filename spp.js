const myHeading = document.querySelector('h1')
const myPara = document.querySelector('#para')
const myBtn = document.querySelector('#btn')
const html = document.querySelector('html')
const input = document.querySelector('input')
const img = document.querySelector('img')
const name = document.querySelector('span')

// myHeading.textContent = 'hello world'
// myPara.textContent = 'updated paragraph'

// myBtn.addEventListener("onload", function () {
//     myBtn.textContent = 'dont press me again'
//     alert("Ouch! Stop pressing me!");
// });

function ev(){
    alert('event is trigged')
    
}

img.onclick=()=>{
    const src = img.getAttribute('src')
    if(src == './images/me.png'){
        img.setAttribute('src','./images/huri.png')
    }
    name.textContent = input.value
}

function showName(){
  name.textContent = input.value
}