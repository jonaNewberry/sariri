
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  // === 1. Manejo de íconos flotantes (WhatsApp, Facebook, Scroll Up) ===
  const whatsappIcon = document.querySelector(".whatsapp-icon");
  const facebookIcon = document.querySelector(".facebook-icon");
  const scrollUpIcon = document.querySelector(".scroll-up-icon");

  const initialPositions = {
    whatsapp: 90,
    facebook: 160,
  };

  // Validar que los elementos existan antes de manipularlos
  if (!whatsappIcon || !facebookIcon || !scrollUpIcon) {
    console.warn("Algunos íconos no se encontraron en el DOM.");
  }

  // === 2. Efecto de paralaje en íconos flotantes ===
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (whatsappIcon) {
      whatsappIcon.style.top = initialPositions.whatsapp + scrollPosition * 0.03 + "px";
    }

    if (facebookIcon) {
      facebookIcon.style.top = initialPositions.facebook + scrollPosition * 0.03 + "px";
    }

    // Mostrar/Ocultar flecha de subir
    if (scrollUpIcon) {
      if (scrollPosition > 100) {
        scrollUpIcon.style.display = "flex";
        scrollUpIcon.style.bottom = "20px"; // Posición fija o ajustable
      } else {
        scrollUpIcon.style.display = "none";
      }
    }
  });

  // === 3. Scroll hacia arriba suave ===
  if (scrollUpIcon) {
    scrollUpIcon.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // === 4. Toggle de texto "Leer más/menos" ===
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-link')) {
      event.preventDefault();
      const details = event.target.previousElementSibling?.querySelector('.toggle-details');
      const link = event.target;

      if (!details) return;

      if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'inline';
        link.textContent = '... Leer menos';
      } else {
        details.style.display = 'none';
        link.textContent = '... Leer más';
      }
    }
  });

  

  // === 6. Suavizar scroll a secciones con hash ===
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});




  document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarText');
    const icon = navbarToggler.querySelector('i');

    if (!navbarToggler || !navbarCollapse || !icon) return;

    // Escuchar el evento de Bootstrap
    navbarCollapse.addEventListener('shown.bs.collapse', () => {
      icon.classList.replace('fa-bars', 'fa-times');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      icon.classList.replace('fa-times', 'fa-bars');
    });

    // También permitir cerrar al hacer clic en el botón si está abierto
    navbarToggler.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(toggle => {
      toggle.addEventListener('shown.bs.dropdown', function () {
        const icon = this.querySelector('i.fas');
        if (icon) icon.classList.replace('fa-caret-down', 'fa-caret-up');
      });

      toggle.addEventListener('hidden.bs.dropdown', function () {
        const icon = this.querySelector('i.fas');
        if (icon) icon.classList.replace('fa-caret-up', 'fa-caret-down');
      });
    });
  });
