document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const animatedElements = document.querySelectorAll("[data-animate]");

  animatedElements.forEach(el => {
    const direction = el.dataset.animate;
    const xValue = direction === "left" ? -100 : 100;

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: true // ← チェック用（仕上げ時に false に）
      },
      x: xValue,
      opacity: 0,
      duration: 1
    });
  });
});
