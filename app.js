// SETTINGS
const containerW = 1480;
const containerH = 700;

// initial WAVE
let count = 1;

setInterval(() => {
  if (count < 50) {
    addAnotherFlake();
    console.warn("INIT", count);
  }
}, 10);

function addAnotherFlake() {
  count++;
  let scale = randFloat(1.7);
  let f = new Flake(count, randCoord(0, containerW), 0, scale, scale);
  f.render(scene);
  f.fall(containerW, containerH, addAnotherFlake);
}
