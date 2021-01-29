//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['DarkSalmon', 'Aquamarine', 'BurlyWood', 'CornflowerBlue', 'DarkKhaki', 'purple']

body.style.backgroundColor = 'GoldenRod'
button.addEventListener('click', changeBgColor)

function changeBgColor(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}