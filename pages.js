//js for menu

var MenuItems = document.getElementById("MenuItems");
        var menuHamb = document.getElementById("menu-icon");
        var menuClose = document.getElementById("menu-icon-x");
        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight = "400px";
                menuClose.classList.toggle('active');
                menuHamb.classList.toggle('active');
            } else {
                MenuItems.style.maxHeight = "0px";
                menuHamb.classList.toggle('active');
                menuClose.classList.toggle('active');
            }
        }


//Projects pages
// Abre el modal y muestra la imagen seleccionada
// Obtener elementos
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Mostrar modal al hacer clic en la imagen
document.querySelectorAll(".grid-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

//Contact by WhatsApp

popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
  
    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })
    
    btnOpenPopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
       popup.style.animation = "fadeIn .6s 0.0s both";
    })
    
    sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");
       
     window.open('https://wa.me/573162597578?text='+relmsg, '_blank'); 
    
    });
  }
  
  popupWhatsApp();