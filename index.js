function animate(element, amplitude, speed = 150, maxAmplitude = 100) {
    let x = 0;
    let y = 0;
    let z = 0;
    const mouve = () => {
        const deltaX = Math.random() * amplitude * 2 - amplitude;
        const deltaY = Math.random() * amplitude * 2 - amplitude;
        const deltaZ = Math.random() * amplitude * 2 - amplitude;
      let delay = 30;
      if (
        Math.pow(x + deltaX, 2) +
          Math.pow(y + deltaY, 2) + 
          Math.pow(z + deltaZ, 2) <
        Math.pow(maxAmplitude, 2)
      ) {
        x += deltaX;
        y += deltaY;
        z += deltaZ;
        delay =  
          Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)) * speed;
        element.style.transitionDuration = delay + "ms";
        element.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
      }
      setTimeout(mouve, delay);
    };
    mouve();
  }
  
let names = [
    document.getElementById("Element1"),
    document.getElementById("Element2"),
    document.getElementById("Element3")
] 
window.addEventListener("load", (event) => {
    animate(names[0], 60, 60);
    animate(names[1], 30);
    animate(names[2], 60, 60);
});
