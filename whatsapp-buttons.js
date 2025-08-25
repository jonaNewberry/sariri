// whatsapp-buttons.js
document.addEventListener('DOMContentLoaded', () => {
    const defaultPhoneNumber = '5491162676675';
    const whatsappButtons = document.querySelectorAll('.whatsapp-button');

    if (!whatsappButtons.length) return;

    whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
            const message = button.getAttribute('data-message') || '';
            const url = `https://wa.me/${defaultPhoneNumber}?text=${encodeURIComponent(message)}&t=${Date.now()}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        });
    });
});