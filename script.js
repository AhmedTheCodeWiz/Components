const background = document.getElementById('background');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Calculate opacity based on the scroll position and proximity to the bottom
  const maxScroll = document.body.clientHeight - window.innerHeight;
  const scrollPercentage = scrollPosition / maxScroll;
  const opacity = Math.min(1, scrollPercentage); // Maximum opacity is set to 1
  
  // Apply a darker background gradient based on scroll position
  background.style.background = `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, 1))`;
});















const positionsY = ['10vh','25vh','10vh','30vh','50vh','80vh','100vh','150vh','200vh','250vh',      '10vh','70vh','110vh','170vh','230vh','261vh']; // vertical
const positionsX = ['14vw','35vw','60vw','80vw','10vw','2vw', '18vw', '8vw',  '20vw', '4vw',        '90vw','75vw','90vw','80vw','70vw',  '90vw']; // horziontal

const numberOfCubes = 16;
const container = document.querySelector('.main');

for (let i = 0; i < numberOfCubes; i++) {
  const cube = document.createElement('div');
  cube.classList.add('cube');

  for (let j = 0; j < 6; j++) {
    const face = document.createElement('div');
    face.classList.add('face');
    face.classList.add(['top', 'bottom', 'right', 'left', 'front', 'back'][j]);
    cube.appendChild(face);
  }
  let rng = getRandomInt(1, 4); // Generates a random integer between 1 and 10
  
  if(rng == 1){
    cube.style.animation = `spin1 20s infinite linear`;
  } else if(rng == 2){
    cube.style.animation = `spin2 25s infinite linear`;
  } else if(rng == 3){
    cube.style.animation = `spin3 20s infinite linear`;
  } else{ cube.style.animation = `spin4 15s infinite linear`; 
  }
  

  if (parseInt(positionsX[i]) > 400) {
    cube.style.background = 'green';
  }
  if (parseInt(positionsX[i]) > 1000) {
    cube.style.background = 'red';
  }

  cube.style.top = `${positionsY[i]}`;
  cube.style.left = `${positionsX[i]}`;
  container.appendChild(cube);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}