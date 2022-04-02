var hoverOnBanner = document.getElementById('banner-h1')

//var randomColorOne = Math.floor(Math.random().toFixed(2)*100)
//var randomColorTwo = Math.floor(Math.random().toFixed(2)*100)
//var randomColorThree = Math.floor(Math.random().toFixed(2)*100)
//var randomRgb = 'rgb'+'('+ randomColorOne +','+ randomColorTwo +','+ randomColorThree+ ')'
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 



const colorFun = (event) => {
    event.target.style.color =  randomColor()
}
const reset = (event) => {
    event.target.style.color = ""
}

hoverOnBanner.addEventListener("mouseover", colorFun)
hoverOnBanner.addEventListener("mouseout", reset)
