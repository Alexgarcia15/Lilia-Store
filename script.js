const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ==========================
// BUSCADOR DE PRODUCTOS
// ==========================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const filtro = searchInput.value.toLowerCase();

  const productos = document.querySelectorAll(".producto");

  productos.forEach((producto) => {
    const nombreProducto = producto
      .querySelector("h3")
      .textContent.toLowerCase();

    if (nombreProducto.includes(filtro)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});

// ==========================
// ANIMACIÓN AL HACER SCROLL
// ==========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("mostrar");
      }
    });
  },
  
);

document.querySelectorAll(".producto").forEach((card) => {
  observer.observe(card);
});

// ==========================
// MENSAJE DE BIENVENIDA
// ==========================

console.log("✨ Bienvenido a Lilia Fashion & Home ✨");

// ==========================
// CARRUSEL AUTOMÁTICO
// ==========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function cambiarSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}

setInterval(cambiarSlide, 3000);

console.log("Carrusel cargado");
