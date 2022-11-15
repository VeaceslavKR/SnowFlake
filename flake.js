class Flake {
  // Apear
  constructor(n, left, top, speed, size) {
    this.n = n;
    this.left = left;
    this.top = top;
    this.speed = speed;
    this.size = size;
    console.info(`FLAKE ${this.n}: APPEARED`);
  }

  // faza caderii

  fall(cw, ch, cb) {
    this.timerId = setInterval(() => {
      this.top += this.speed;
      console.log(`FLAKE ${this.n}: FALL`, this);

      // facem update rendered div
      this.update();

      if (this.top >= ch) {
        this.disappear(cb);
      }
    }, 20);
  }

  // DISAPPEAR
  disappear(cb) {
    clearInterval(this.timerId);
    console.log(`FLAKE ${this.n}: DISAPPEARED`, this);
    window[`flake_${this.n}`].style.display = `none`;
    cb();
  }

  update() {
    // SEARCH THE div of the current
    window[`flake_${this.n}`].style.top = `${this.top}px`;
  }

  // PRESENTATION
  render(root) {
    root.innerHTML += `<div id="flake_${this.n}" class="flake" style="transform: scale(${this.size});left: ${this.left}px; top: ${this.top}px;">${this.n}</div>`;
  }
}
