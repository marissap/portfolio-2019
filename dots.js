function dots() {
  const colors = ["#7ec13c", "#14cdfc", "#1B1B1B", "#dd8c00", "#f44274"];

  const numdots = 50;
  const dots = [];

  for (let i = 0; i < numdots; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.background = colors[Math.floor(Math.random() * colors.length)];
    dot.style.left = `${Math.floor(Math.random() * 100)}vw`;
    dot.style.top = `${Math.floor(Math.random() * 100)}vh`;
    dot.style.transform = `scale(${Math.random()})`;
    dot.style.width = `${Math.random()}em`;
    dot.style.height = dot.style.width;
    
    dots.push(dot);
    document.body.append(dot);
  }

  // Keyframes
  dots.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
      {
        duration: (Math.random() + 1) * 2000, // random duration
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });
}