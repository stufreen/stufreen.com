function onIntersection(entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      if (index > 0) {
        entry.target.style.animationDelay = `${index * 200}ms`;
      }
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

window.addEventListener(
  "load",
  () => {
    const observer = new IntersectionObserver(onIntersection, options);

    const targets = Array.from(
      document.getElementsByClassName("scroll-into-view")
    );

    targets.forEach((target) => observer.observe(target));
  },
  false
);
