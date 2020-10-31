// inedx.js
// 载入paint模块
CSS.paintWorklet.addModule("./src/paintworklet.js");
const wave = document.querySelector("#wave");
let tick = 0;
requestAnimationFrame(function raf (now) {
  tick += 1;
  wave.style.cssText = `--animation-tick: ${tick};`;
  requestAnimationFrame(raf);
  console.log(tick);
});
