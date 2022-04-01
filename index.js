var hoverOnBanner = document.getElementById('banner-h1')

var randomColorOne = Math.floor(Math.random().toFixed(2)*100)
var randomColorTwo = Math.floor(Math.random().toFixed(2)*100)
var randomColorThree = Math.floor(Math.random().toFixed(2)*100)
var randomRgb = 'rgb'+'('+ randomColorOne +','+ randomColorTwo +','+ randomColorThree+ ')'

hoverOnBanner.addEventListener("mouseover", function (event) {
    event.target.style.color =  randomRgb
})

