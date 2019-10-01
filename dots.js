function dots() {
  const colors = ["#7ec13c", "#14cdfc", "#1B1B1B", "#dd8c00", "#f44274"];

  const numdots = 50;
  const dots = [];

  // setting up the css of the dots
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

  // Keyframes
  dots.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11), // distance to move along x-axis
      y: Math.random() * 12 // distance to move along y-axis
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" }, // starting position is from css values
        { transform: `translate(${to.x}rem, ${to.y}rem)` } // use randomly calculated values to set distance of movement
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate", // go back and forth
        fill: "both",
        iterations: Infinity, // animation occurs forever
        easing: "ease-in-out" // slow movement
      }
    );
  });
}