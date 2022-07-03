let time = 2000
let currentImageIndex = 0 
let images = document.querySelectorAll("#slider img")
let max = images.length 

function start(){
  setInterval(()=> {
    nextImage()
  }, time)
}

function nextImage(){
  if (currentImageIndex > 0){
    images[currentImageIndex - 1].classList.remove("selected")
  }

  if (currentImageIndex >= max){
    currentImageIndex = 0
  }
  
  images[currentImageIndex].classList.add("selected")
  currentImageIndex++
}

window.addEventListener('load', start)