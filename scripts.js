

// Añadir efectos dinámicos a la galería

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar las imágenes de la galería
    const galleryImages = document.querySelectorAll('.gallery img');

    // Agregar un efecto de zoom al pasar el cursor sobre las imágenes
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Agregar un efecto de opacidad al hacer clic
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            galleryImages.forEach(img => img.style.opacity = '0.5');
            image.style.opacity = '1';
        });
    });
});


// Cargar noticias desde un archivo JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('../recursos/data.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '';
            data.noticias.forEach(noticia => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descripcion}</p>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error cargando las noticias:', error);
        });
});
