document.querySelectorAll(".link-item").forEach(item => {
    // Abrir enlace al hacer clic en cualquier parte del contenedor (menos el botón de copiar)
    item.addEventListener("click", (e) => {
        if (!e.target.classList.contains("copy-btn") && !e.target.closest(".copy-btn")) {
            const link = item.getAttribute("data-link");
            window.open(link, "_blank");
        }
    });

    // Copiar al portapapeles al hacer clic en el botón
    item.querySelector(".copy-btn").addEventListener("click", (e) => {
        e.stopPropagation(); // Evita que también abra el enlace
        const link = item.getAttribute("data-link");
        navigator.clipboard.writeText(link).then(() => {
            // SweetAlert para mostrar el mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: '¡Enlace copiado!',
                text: 'El enlace se ha copiado al portapapeles correctamente.',
                timer: 2000,
                showConfirmButton: false
            });
        }).catch(err => {
            console.error("Error al copiar el enlace:", err);
            // SweetAlert para mostrar el mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo copiar el enlace. Inténtalo de nuevo.',
            });
        });
    });
});

// Seleccionar el botón con la clase share-button
const shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que se realice la acción predeterminada del enlace

    // Obtiene la URL actual del navegador
    const currentURL = window.location.href;

    // Copia la URL al portapapeles
    navigator.clipboard.writeText(currentURL).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Enlace copiado!',
            text: '¡El enlace ha sido copiado al portapapeles!',
            timer: 2000,
            showConfirmButton: false
        });
    }).catch(err => {
        console.error("Error al copiar el enlace: ", err);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al copiar el enlace.',
        });
    });
});
