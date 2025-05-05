

const initialPositions = {
  
    whatsapp: 90, 
    facebook: 160, 
};

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

   
    const whatsappIcon = document.querySelector(".whatsapp-icon");
    whatsappIcon.style.top = initialPositions.whatsapp + scrollPosition * 0.1 + "px";

   
    const facebookIcon = document.querySelector(".facebook-icon");
     facebookIcon.style.top = initialPositions.facebook + scrollPosition * 0.1 + "px";
       whatsappIcon.style.top = 90 + scrollPosition * 0.03 + "px";
       facebookIcon.style.top = 160 + scrollPosition * 0.03 + "px";
       
    
 
 const scrollUpIcon = document.querySelector(".scroll-up-icon");


window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  
  if (scrollPosition > 100) {
    scrollUpIcon.style.display = "flex";
    scrollUpIcon.style.bottom = 20 + scrollPosition * 0.1 + "px"; 
  } else {
    scrollUpIcon.style.display = "none";
  }
});


scrollUpIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
 

});
// Script para manejar el texto "Leer más/menos"
document.querySelectorAll('.collapse-link').forEach(link => {
  link.addEventListener('click', function() {
      this.textContent = this.textContent.includes('más') ? 'Leer menos' : 'Leer más...';
  });
});

// Script para mantener el resaltado después de la animación
document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash;
  if (hash) {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
          setTimeout(() => {
              targetSection.scrollIntoView({behavior: 'smooth'});
          }, 100);
      }
  }
});
document.getElementById('toggle-ados').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que el enlace recargue la página
  const details = document.getElementById('ados-details');
  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'inline'; // Muestra el contenido
    this.textContent = '... Leer menos'; // Cambia el texto del enlace
  } else {
    details.style.display = 'none'; // Oculta el contenido
    this.textContent = '... Leer más'; // Cambia el texto del enlace
  }
});document.querySelectorAll('.collapse-link').forEach(link => {
  link.addEventListener('click', function() {
    this.textContent = this.textContent === 'Leer más...' ? 'Leer menos...' : 'Leer más...';
  });
});

//whatsapp  //