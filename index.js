
const square = document.getElementById("square");
console.log(square.style.left, square.style.top);

const keyIndicators = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

document.addEventListener("keydown", function down(e) {
  let parsedDown = parseInt(square.style.top)
  if (e.key === keyIndicators[0] && parsedDown < 250){
    square.style.top = parsedDown + 10 + 'px'
  //  let updatedTop = square.style.top
  //  console.log(updatedTop)
  }
//});

//document.addEventListener("keydown", function left(e) {
  let parsedLeft = parseInt(square.style.left)
  if (e.key === keyIndicators[1] && parsedLeft > 0){
    square.style.left = parsedLeft - 10 + 'px';
  //  let updatedLeft = square.style.left
    //  console.log(updatedLeft) 
    character.src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Floyd-Mayweather-PNG-Transparent-Image-2.png"
  }
//});

//document.addEventListener("keydown", function right(e) {
  let parsedRight = parseInt(square.style.left)
    if (e.key === keyIndicators[2] && parsedRight < 250){
      // if 300px
      square.style.left = parsedRight + 10 + 'px';
    //  let updatedLeft = square.style.left
    //  console.log(updatedLeft)
      character.src = "https://www.freepngimg.com/thumb/floyd_mayweather/37638-3-floyd-mayweather-jr-photos.png"
    }
//});

//document.addEventListener("keydown", function up(e) {
  let parsedUp = parseInt(square.style.top)
    if (e.key === keyIndicators[3] && parsedUp > 0){
      // if 0px
      square.style.top = parsedUp - 10 + 'px';
   //   let updatedTop = square.style.top
    //  console.log(updatedTop)
    }
 //})
    let updatedTop = parseInt(square.style.top)
    let updatedLeft = parseInt(square.style.left)

// top is y
// left is x
      if (updatedLeft < parseInt(opponentCharacter.style.left) + parseInt(opponentCharacter.style.width) &&
           updatedLeft + parseInt(square.style.width) > parseInt(opponentCharacter.style.left) &&
           updatedTop < parseInt(opponentCharacter.style.top) + parseInt(opponentCharacter.style.height) &&
           updatedTop + parseInt(square.style.height)  > parseInt(opponentCharacter.style.top)) {
        //     // collision detected!
         console.log('good to go')
          gameDiv.removeChild(opponentCharacter)
          let score = document.querySelector("#score-keeper")
          let point = parseInt(score.innerText)
          point++
          score.innerText = point
          // console.log(point)
            setInterval(opponent, 2000)
      }
    });

    const gameDiv = document.querySelector("#game")
    const opponentCharacter = document.createElement("div")
    const character = document.querySelector("#player-character")

    function opponent(){
      opponentCharacter.id = "character"
      opponentCharacter.style.backgroundColor = 'white';
      opponentCharacter.style.position = 'absolute';
      opponentCharacter.style.top = `${Math.random()*100}px`;
      opponentCharacter.style.left = `${Math.random()*150}px`;
      opponentCharacter.style.width = '50px';
      opponentCharacter.style.height = '50px';
      gameDiv.appendChild(opponentCharacter)
    }

// left floyd
// https://www.freepngimg.com/thumb/floyd_mayweather/37638-3-floyd-mayweather-jr-photos.png
// square.addEventListener("click", () => {
//   square.style.backgroundColor = `rgb(${Math.floor(Math.random()*200)}, ${Math.floor(Math.random()*140)}, ${Math.floor(Math.random()*230)}`
// });

let illusionBackgrounds = [
 // "https://www.levistrauss.com/wp-content/uploads/2020/05/Black_Box.png",
  "https://image.shutterstock.com/image-illustration/hand-drawn-cartoon-sport-stadium-260nw-510159592.jpg",
  "https://thumbs.dreamstime.com/b/swirl-background-rotating-spiral-retro-starburst-sunburst-background-pattern-spiral-swirled-radial-striped-design-159777214.jpg",
  "https://wallpaperaccess.com/full/1187174.jpg",
  "https://cdn3.vectorstock.com/i/1000x1000/45/32/abstract-optical-illusion-twisted-background-vector-27254532.jpg",
  "https://toppng.com/uploads/preview/spiral-multicolored-optical-illusion-11569877820ynz5a1o9eu.jpg",
  "https://is5-ssl.mzstatic.com/image/thumb/Purple111/v4/38/bb/27/38bb2741-53e8-364d-8954-c9901d7a897a/source/512x512bb.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/05/3D-Moving-Illusion-Background.jpg",
]
var index = 0

function backgroundImgChanger(){
  const gameImage = document.querySelector("img")
  gameImage.src = illusionBackgrounds[index]
  gameImage.style.height = '380px'
  gameImage.style.width = '380px'

    if (index == 3){
      index = 0;
    } else {
      index++
    }
 setTimeout(backgroundImgChanger, 4000)
}

function timeKeeper(){
  const timer = document.querySelector("#time-keeper")
  let time = parseInt(timer.innerText);
  let countdown = setInterval(timeKeeper => {
    time--
    timer.innerText = time
   // console.log('timer started')
      if (time < 11){
        timer.style.color = "red"
      }
      if (time === 0){
        clearInterval(countdown);
      }
  }, 1000);
  backgroundImgChanger()
}

const startButton = document.querySelector("button")
startButton.addEventListener("click", () => {
  timeKeeper()
  opponent()
 // scoreKeeper()
  console.log('you started')
});

