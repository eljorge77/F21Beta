const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3, // La imagen aparece cuando el 30% es visible
  }
);

observer.observe(document.getElementById("miImagen"));

// Scroll para los SubContenedores

const observerObjetos = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Observar todos los elementos con la clase 'scroll-animate'
document.querySelectorAll(".scroll-animate").forEach((element) => {
  observer.observe(element);
});
