// Your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const line = document.getElementById('line');

  if (line) {
    let rotation = 0;

    setInterval(() => {
      rotation += 5;
      line.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }, 50);
  } else {
    console.error("Element with ID 'line' not found.");
  }
});
