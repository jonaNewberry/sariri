

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
