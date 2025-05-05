// whatsapp-buttons.js

document.addEventListener('DOMContentLoaded', () => {
    const defaultPhoneNumber = '542215038029';
    const whatsappButtons = document.querySelectorAll('.whatsapp-button');
  
    if (!whatsappButtons.length) return; // No hay botones, salimos
  
    whatsappButtons.forEach(button => {
      button.addEventListener('click', () => {
        const message = button.getAttribute('data-message') || '';
        const url = `https://wa.me/${defaultPhoneNumber}?text=${encodeURIComponent(message)}&t=${Date.now()}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    });
  });
  