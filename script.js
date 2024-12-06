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

// Ajustar desplazamiento para evitar que el encabezado tape el título
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Calcula la altura del encabezado
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        // Calcula la posición de desplazamiento
        const targetPosition = targetElement.offsetTop - headerHeight;

        // Realiza el desplazamiento suave
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Cierra el menú después del clic
        MenuItems.style.maxHeight = "0px";
        menuHamb.classList.remove('active');
        menuClose.classList.remove('active');
    });
});


//method Section
const container = document.getElementById('metody');

container.addEventListener('click', (e) => {
    const toggleContainer = e.target.closest('.toggle-container');
    if (toggleContainer) {
        const listItem = toggleContainer.closest('.list');
        
        // Alternar la clase 'scale' para la transición de despliegue
        listItem.classList.toggle('scale');
    }
});


//Parallax Efects
new Pageable("#container-col");
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);
var scene2 = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene3);
AOS.init();

/* JavaScript para manejar el botón de leer más / leer menos */
let seeMoreMoreOpened = false;
document.getElementById('see-more').addEventListener('click', function(event) {
    event.preventDefault();

    const readMore = document.getElementById('read-more');
    if (!seeMoreMoreOpened) {
        readMore.classList.add('expanded');
        this.innerHTML = 'Ver menos <i class="fa-solid fa-minus"></i>';
    } else {
        readMore.classList.remove('expanded');
        this.innerHTML = 'Ver más <i class="fa-solid fa-plus"></i>';
    }
    seeMoreMoreOpened = !seeMoreMoreOpened;
});


// CLICK OTHER SECTION FORM IN THE BANNER

const $btnContainerWebform = document.querySelector('.btn-webform'),
      $btnContainerCta = document.querySelector('.btn-cta'),
      $containerCta = document.querySelector('.container-cta'),
      $containerWebform = document.querySelector('.container-webform');

document.addEventListener('click', e => {
    if (e.target === $btnContainerWebform || e.target === $btnContainerCta){
        $containerWebform.classList.toggle('active');
        $containerCta.classList.toggle('active')
    }
});

//Contact by WhatsApp

popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');

    // Recuperar el estado guardado en localStorage
    let isPopupActive = localStorage.getItem('isPopupActive') === 'true';

    // Establecer el estado inicial del popup
    if (isPopupActive) {
        popup.classList.add('is-active-whatsapp-popup');
    } else {
        popup.classList.remove('is-active-whatsapp-popup');
    }
  
    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup');
      localStorage.setItem('isPopupActive', 'false'); // Guardar estado cerrado
    })
    
    btnOpenPopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup');
      popup.style.animation = "fadeIn .6s 0.0s both";
      localStorage.setItem('isPopupActive', 'true'); // Guardar estado abierto
    })
    
    sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");
       
     window.open('https://wa.me/573162597578?text='+relmsg, '_blank'); 
    
    });
  
    setTimeout(() => {
      popup.classList.toggle('is-active-whatsapp-popup');
    }, 3000);
  }
  
  popupWhatsApp();
