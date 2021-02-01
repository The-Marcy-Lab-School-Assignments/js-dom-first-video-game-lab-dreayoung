
const square = document.getElementById("square");
console.log(square.style.left, square.style.top);

const keyIndicators = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

document.addEventListener("keydown", function down(e) {
  let parsedDown = parseInt(square.style.top)
  if (e.key === keyIndicators[0] && parsedDown < 300){
    square.style.top = parsedDown + 10 + 'px'
  }
  if (parsedDown > 300){
    document.removeEventListener("keydown", down);
  }
});

document.addEventListener("keydown", function left(e) {
  let parsedLeft = parseInt(square.style.left)
  if (e.key === keyIndicators[1] && parsedLeft > 0){
    square.style.left = parsedLeft - 10 + 'px';
  }
  else if (parsedLeft < 0){
    document.removeEventListener("keydown", left);
  }
});

document.addEventListener("keydown", function right(e) {
  let parsedRight = parseInt(square.style.left)
    if (e.key === keyIndicators[2] && parsedRight < 300){
      // if 300px
      square.style.left = parsedRight + 10 + 'px';
    }
    else if (parsedRight > 300){
      document.removeEventListener("keydown", right);
    }
});

document.addEventListener("keydown", function up(e) {
  let parsedUp = parseInt(square.style.top)
    if (e.key === keyIndicators[3] && parsedUp > 0){
      // if 0px
      square.style.top = parsedUp - 10 + 'px';
    }
    else if (parsedUp < 0){
      document.removeEventListener("keydown", up);
    }
});

square.addEventListener("click", () => {
  square.style.backgroundColor = `rgb(${Math.floor(Math.random()*200)}, ${Math.floor(Math.random()*140)}, ${Math.floor(Math.random()*230)}`
});