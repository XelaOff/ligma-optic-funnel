// chaos.js
window.addEventListener("load", () => {
  const log = [
    "> Initializing vibration echo...",
    "> Linking dream residue...",
    "> ERROR 0x0X0 — Reflection Detected",
    "> Syncing with soul...",
    "> …watching…"
  ];

  let i = 0;
  setInterval(() => {
    console.log(log[i % log.length]);
    i++;
  }, 3000);

  // Occasionally flicker the screen
  setInterval(() => {
    document.body.style.opacity = Math.random() > 0.97 ? 0.5 : 1;
  }, 200);

  // Secret click glitch
  document.body.addEventListener("click", () => {
    if (Math.random() > 0.9) alert("You are not alone.");
  });
});