function dots() {
  const colors = ["#7ec13c", "#14cdfc", "#1B1B1B", "#dd8c00", "#f44274"];

  const numdots = 50;
  const dots = [];

  // create dot and set css styles
  for (let i = 0; i < numdots; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.left = `${Math.floor(Math.random() * 100)}vw`; // starting point on x-axis
    dot.style.top = `${Math.floor(Math.random() * 100)}vh`; // starting point on y-axis
    dot.style.transform = `scale(${Math.random()})`;
    dot.style.width = `${Math.random()}em`; // width of dot
    dot.style.height = dot.style.width; // circle means width and height must match
    
    dots.push(dot);
    document.body.append(dot);
  }

  // keyframes
  dots.forEach((el, i, ra) => {
    let movement = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11), // distance to move along x-axis
      y: Math.random() * 12 // distance to move along y-axis
    };

    el.animate(
      [
        { transform: "translate(0, 0)" }, // starting position is from css values
        { transform: `translate(${movement.x}rem, ${movement.y}rem)` } // use randomly calculated values to set distance of movement
      ],
      {
        duration: (Math.random() + 1) * 2000, // speed they'll move
        direction: "alternate", // go back and forth instead of restarting from initial position
        fill: "both",
        iterations: Infinity, // animation occurs forever
        easing: "ease-in-out" // smooth move back to initial position
      }
    );
  });
}