// script.js - Funcionalidad JavaScript para la galería de fotos

// Base de datos de imágenes (simulada)
const imageDatabase = [
    {
        id: 1,
        title: "Montañas al amanecer",
        category: "naturaleza",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Carlos Mendoza",
        description: "Un impresionante amanecer capturado desde la cima de las montañas, mostrando la belleza natural del paisaje con los primeros rayos del sol.",
        date: "15/03/2025",
        resolution: "3000 x 2000 px"
    },
    {
        id: 2,
        title: "Rascacielos urbanos",
        category: "arquitectura",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Ana García",
        description: "Vista panorámica de rascacielos modernos que muestran la arquitectura contemporánea y el diseño urbano de una gran ciudad.",
        date: "20/02/2025",
        resolution: "4000 x 2667 px"
    },
    {
        id: 3,
        title: "Retrato cultural",
        category: "retratos",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Julio César",
        description: "Retrato de una persona local que refleja la cultura y tradiciones de su región a través de su expresión y vestimenta tradicional.",
        date: "05/01/2025",
        resolution: "2500 x 1667 px"
    },
    {
        id: 4,
        title: "Calles de la ciudad antigua",
        category: "urbano",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Ana García",
        description: "Calles estrechas y pintorescas de un barrio antiguo, mostrando la arquitectura histórica y el ambiente único de la zona.",
        date: "12/02/2025",
        resolution: "3500 x 2333 px"
    },
    {
        id: 5,
        title: "Cascada en el bosque",
        category: "naturaleza",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Carlos Mendoza",
        description: "Una hermosa cascada rodeada de vegetación exuberante, capturando la serenidad y fuerza de la naturaleza en movimiento.",
        date: "03/04/2025",
        resolution: "4000 x 3000 px"
    },
    {
        id: 6,
        title: "Puente moderno",
        category: "arquitectura",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Julio César",
        description: "Un puente contemporáneo con un diseño innovador que representa la fusión entre la funcionalidad y la estética arquitectónica.",
        date: "28/01/2025",
        resolution: "3800 x 2533 px"
    },
    {
        id: 7,
        title: "Músico callejero",
        category: "retratos",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Ana García",
        description: "Retrato de un músico tocando en la calle, capturando la pasión y emoción del artista durante su interpretación.",
        date: "17/02/2025",
        resolution: "2700 x 1800 px"
    },
    {
        id: 8,
        title: "Mercado nocturno",
        category: "urbano",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Carlos Mendoza",
        description: "Un vibrante mercado nocturno iluminado con luces de colores, mostrando la vida y la cultura urbana en su máxima expresión.",
        date: "25/03/2025",
        resolution: "3200 x 2133 px"
    },
    {
        id: 9,
        title: "Lago de montaña",
        category: "naturaleza",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Julio César",
        description: "Un tranquilo lago rodeado de montañas majestuosas, reflejando el paisaje circundante en su superficie cristalina.",
        date: "10/01/2025",
        resolution: "4500 x 3000 px"
    },
    {
        id: 10,
        title: "Catedral gótica",
        category: "arquitectura",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Ana García",
        description: "Una impresionante catedral gótica con detalles arquitectónicos complejos que muestran la maestría de los constructores medievales.",
        date: "05/03/2025",
        resolution: "3600 x 2400 px"
    },
    {
        id: 11,
        title: "Anciano sonriente",
        category: "retratos",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Carlos Mendoza",
        description: "Retrato cercano de un anciano con una sonrisa genuina que refleja sabiduría y experiencia acumulada a lo largo de los años.",
        date: "22/02/2025",
        resolution: "2800 x 1867 px"
    },
    {
        id: 12,
        title: "Estación de metro",
        category: "urbano",
        src: "/api/placeholder/800/600",
        thumbnail: "/api/placeholder/400/300",
        author: "Julio César",
        description: "Interior de una estación de metro moderna con líneas geométricas y un diseño minimalista que representa la vida urbana contemporánea.",
        date: "19/01/2025",
        resolution: "3300 x 2200 px"
    }
];

// Función para cargar la página según la URL actual
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Detectar parámetros de URL
    const urlParams = new URLSearchParams(window.location.search);
    
    if (currentPage === '' || currentPage === 'index.html') {
        // Página de inicio - No se requiere funcionalidad especial
    } else if (currentPage === 'gallery.html') {
        // Página de galería
        loadGallery();
        
        // Comprobar si hay un parámetro de categoría
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            // Activar el filtro de categoría correspondiente
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.dataset.category === categoryParam) {
                    btn.click();
                }
            });
        }
    } else if (currentPage === 'detail.html') {
        // Página de detalle
        const imageId = urlParams.get('id');
        if (imageId) {
            loadImageDetail(parseInt(imageId));
            loadRelatedImages(parseInt(imageId));
        } else {
            // Redirigir a la galería si no hay ID
            window.location.href = 'gallery.html';
        }
    } else if (currentPage === 'about.html') {
        // Página sobre nosotros - Configurar validación de formulario
        setupContactForm();
    }
});

// Función para cargar la galería de imágenes
function loadGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    // Limpiar el contenedor
    galleryContainer.innerHTML = '';
    
    // Agregar cada imagen al contenedor
    imageDatabase.forEach(image => {
        const imageElement = createGalleryItem(image);
        galleryContainer.appendChild(imageElement);
    });
    
    // Configurar los botones de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Quitar la clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar la clase activa al botón clickeado
            this.classList.add('active');
            
            // Obtener la categoría seleccionada
            const selectedCategory = this.dataset.category;
            
            // Filtrar las imágenes según la categoría
            filterGallery(selectedCategory);
        });
    });
}

// Función para crear un elemento de la galería
function createGalleryItem(image) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6 gallery-item';
    col.dataset.category = image.category;
    
    col.innerHTML = `
        <div class="card h-100">
            <img src="${image.thumbnail}" class="card-img-top" alt="${image.title}">
            <div class="card-body">
                <h5 class="card-title">${image.title}</h5>
                <p class="card-text text-muted">${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</p>
                <a href="detail.html?id=${image.id}" class="btn btn-sm btn-outline-primary">Ver detalles</a>
            </div>
        </div>
    `;
    
    return col;
}

// Función para filtrar la galería según la categoría
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'todas' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Función para cargar los detalles de una imagen
function loadImageDetail(imageId) {
    const image = imageDatabase.find(img => img.id === imageId);
    
    if (!image) {
        window.location.href = 'gallery.html';
        return;
    }
    
    // Actualizar el título de la página
    document.title = `FotoGalería - ${image.title}`;
    
    // Cargar la imagen principal
    const imageContainer = document.getElementById('image-container');
    if (imageContainer) {
        imageContainer.innerHTML = `<img src="${image.src}" alt="${image.title}" class="img-fluid">`;
    }
    
    // Actualizar la información de la imagen
    document.getElementById('image-title').textContent = image.title;
    document.getElementById('image-category').textContent = image.category.charAt(0).toUpperCase() + image.category.slice(1);
    document.getElementById('image-author').textContent = image.author;
    document.getElementById('image-description').textContent = image.description;
    document.getElementById('image-date').textContent = image.date;
    document.getElementById('image-resolution').textContent = image.resolution;
}

// Función para cargar imágenes relacionadas
function loadRelatedImages(currentImageId) {
    const relatedContainer = document.getElementById('related-images');
    if (!relatedContainer) return;
    
    // Obtener la categoría de la imagen actual
    const currentImage = imageDatabase.find(img => img.id === currentImageId);
    if (!currentImage) return;
    
    // Encontrar imágenes relacionadas (misma categoría, excluyendo la actual)
    const relatedImages = imageDatabase.filter(img => 
        img.category === currentImage.category && img.id !== currentImageId
    ).slice(0, 3); // Mostrar máximo 3 imágenes relacionadas
    
    // Limpiar el contenedor
    relatedContainer.innerHTML = '';
    
    // Agregar las imágenes relacionadas
    relatedImages.forEach(image => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6 mb-4 related-image';
        
        col.innerHTML = `
            <a href="detail.html?id=${image.id}">
                <div class="card h-100">
                    <img src="${image.thumbnail}" class="card-img-top" alt="${image.title}">
                    <div class="card-body">
                        <h5 class="card-title">${image.title}</h5>
                    </div>
                </div>
            </a>
        `;
        
        relatedContainer.appendChild(col);
    });
    
    // Si no hay imágenes relacionadas, mostrar un mensaje
    if (relatedImages.length === 0) {
        relatedContainer.innerHTML = '<div class="col-12"><p>No hay imágenes relacionadas disponibles.</p></div>';
    }
}

// Función para configurar la validación del formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validar el formulario
        let isValid = true;
        
        // Validar nombre
        if (name === '') {
            document.getElementById('name').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('name').classList.remove('is-invalid');
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            document.getElementById('email').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }
        
        // Validar asunto
        if (subject === '') {
            document.getElementById('subject').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('subject').classList.remove('is-invalid');
        }
        
        // Validar mensaje
        if (message === '') {
            document.getElementById('message').classList.add('is-invalid');
            isValid = false;
        } else {
            document.getElementById('message').classList.remove('is-invalid');
        }
        
        // Si el formulario es válido, procesar el envío
        if (isValid) {
            // En un caso real, aquí se enviaría el formulario al servidor
            // Como es un proyecto de ejemplo, sólo mostramos una notificación
            
            // Crear una notificación
            const notification = document.createElement('div');
            notification.className = 'notification fade-in';
            notification.textContent = '¡Mensaje enviado con éxito! Gracias por contactarnos.';
            
            // Agregar la notificación al body
            document.body.appendChild(notification);
            
            // Mostrar la notificación
            notification.style.display = 'block';
            
            // Ocultar la notificación después de 3 segundos
            setTimeout(function() {
                notification.style.display = 'none';
                // Eliminar la notificación del DOM
                document.body.removeChild(notification);
            }, 3000);
            
            // Limpiar el formulario
            contactForm.reset();
        }
    });
}

// Función para detectar los parámetros de la URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}