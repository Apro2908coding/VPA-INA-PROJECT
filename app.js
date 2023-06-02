const textDisplay = document.getElementById('text')
const phrases = ['The INA was founded by Netaji Shubash Chandra Bose in 1942']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

var audio1 = new Audio('typewriter-1.mp3');
var audio2 = new Audio('typewriter-backspace-1.wav');


function loop () {
  
  isEnd = false
  textDisplay.innerHTML = currentPhrase.join('')

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      audio1.play()
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      audio2.play()
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true
      isDeleting = true
      audio1.pause();
    }

    if (isDeleting && j === 0) {
      currentPhrase = []
      isDeleting = false
      audio2.pause()
      i++
      if (i === phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 -20) + 5
  const normalSpeed = Math.random() * (300 -100) + 3
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop()






