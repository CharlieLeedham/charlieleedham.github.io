window.addEventListener("load", function (event) {
  const floor = document.getElementById("floor");
  const ctx = floor.getContext("2d");
  const w = (floor.width = document.body.offsetWidth);
  const h = (floor.height = document.body.offsetHeight);
  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  ctx.fillStyle = "#020202";
  ctx.fillRect(0, 0, w, h);

  function randomColor() {
    // Blend between blue and pink/red
    const t = Math.random();

    const blue = {
      r: 50,
      g: 120,
      b: 255
    };

    const pinkRed = {
      r: 255,
      g: 80,
      b: 150
    };

    const r = Math.floor(blue.r + (pinkRed.r - blue.r) * t);
    const g = Math.floor(blue.g + (pinkRed.g - blue.g) * t);
    const b = Math.floor(blue.b + (pinkRed.b - blue.b) * t);

    return `rgb(${r}, ${g}, ${b})`;
  }

  function matrix() {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);

    ctx.font = "15pt monospace";

    ypos.forEach((y, ind) => {
      ctx.fillStyle = randomColor();

      const text = String.fromCharCode(Math.random() * 128);
      const x = ind * 20;

      ctx.fillText(text, x, y);

      if (y > 100 + Math.random() * 10000) {
        ypos[ind] = 0;
      } else {
        ypos[ind] = y + 20;
      }
    });
  }

  setInterval(matrix, 50);
});