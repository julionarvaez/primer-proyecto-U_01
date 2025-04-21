// script.js - Funcionalidad JavaScript para la galería de fotos

// Base de datos de imágenes (simulada)
const imageDatabase = [
    {
        id: 1,
        title: "Caño Cristales",
        category: "naturaleza",
        src: "imagenes/naturaleza/1 g.jpg",
        thumbnail: "imagenes/naturaleza/1 m.jpg",
        author: "Carlos Mendoza",
        description: "Un río que recibe múltiples nombres: el río de los dioses, el río de los siete colores o el arcoíris que se derritió. ¿Y a qué se deben estos curiosos denominativos? Pues se trata de un efecto óptico, ya que sus plantas acuáticas cambian de color con la luz del sol y hace que el fondo del río se tiña de múltiples colores. ¡Un espectáculo de la naturaleza.",
        date: "15/03/2025",
        resolution: "3000 x 2000 px"
    },
    {
        id: 2,
        title: "Santuario de Nuestra Señora del Rosario de Las Lajas",
        category: "arquitectura",
        src: "imagenes/arquitectura/1p.jpg",
        thumbnail: "imagenes/arquitectura/1g.jpg",
        author: "Ana García",
        description: "El Santuario de Nuestra Señora del Rosario de Las Lajas es un templo y basílica para el culto católico y veneración de Nuestra Señora de Las Lajas. Este santuario se ubica en el municipio de Potosí, cerca de Ipiales, en el departamento de Nariño, al sur de Colombia y es destino de peregrinación y turismo desde el siglo xviii.",
        date: "20/02/2025",
        resolution: "4000 x 2667 px"
    },
    {
        id: 3,
        title: "Artistas callejeros. Bucaramanga, Santander",
        category: "retratos",
        src: "imagenes/retratos/1g.jpg",
        thumbnail: "imagenes/retratos/1p.jpg",
        author: "Julio César",
        description: "La ciudad de Bucaramanga surgió como núcleo urbano jurídicamente reglado, sólo hasta el ocaso del periodo colonial. El 22 de diciembre de 1622, el presbítero Miguel de Trujillo y el juez poblador, Andrés Páez de Sotomayor, por comisión del oidor, levantaron un acta dando por terminada la iglesia y sacristía del lugar, a la que dieron el nombre de Real de Minas de Bucaramanga, donde luego de celebrar la misa, repartieron los resguardos entre los indígenas de las distintas encomiendas, con límites muy similares a los que actualmente se han fijado en el área metropolitana.",
        date: "05/01/2025",
        resolution: "2500 x 1667 px"
    },
    {
        id: 4,
        title: "Calles de la ciudad antigua",
        category: "urbano",
        src: "imagenes/urbano/1g.jpg",
        thumbnail: "imagenes/urbano/1p.jpg",
        author: "Ana García",
        description: "Calles estrechas y pintorescas de un barrio antiguo, mostrando la arquitectura histórica y el ambiente único de la zona.",
        date: "12/02/2025",
        resolution: "3500 x 2333 px"
    },
    {
        id: 5,
        title: "Parque Nacional de Los Nevados",
        category: "naturaleza",
        src: "imagenes/naturaleza/2g.jpg",
        thumbnail: "imagenes/naturaleza/2p.jpg",
        author: "Carlos Mendoza",
        description: "En el Parque Nacional de Los Nevados se encuentran algunos de los picos más importantes de del país, como el Nevado del Ruiz, el Nevado del Tolima o el Nevado de Santa Isabel. Se trata de uno de los mayores complejos volcánicos de Colombia, con seis estratovolcanes que alcanzan los 4.600 metros de altitud.",
        date: "03/04/2025",
        resolution: "4000 x 3000 px"
    },
    {
        id: 6,
        title: "Torre BD Bacatá - Bogotá",
        category: "arquitectura",
        src: "imagenes/arquitectura/2g.jpg",
        thumbnail: "imagenes/arquitectura/2p.jpg",
        author: "Julio César",
        description: "La Torre BD Bacatá, ubicada en Bogotá, Colombia, es un rascacielos de dos torres que se destaca por su altura y diseño innovador. La torre sur alcanza los 216 metros de altura, con una antena de 24 metros, lo que la convierte en uno de los edificios más altos de Latinoamérica. La torre norte tiene 167 metros de altura. El complejo alberga una variedad de usos, incluyendo apartamentos, oficinas, un hotel y espacios comerciales.",
        date: "28/01/2025",
        resolution: "3800 x 2533 px"
    },
    {
        id: 7,
        title: "Pintores callejero",
        category: "retratos",
        src: "imagenes/retratos/2g.jpg",
        thumbnail: "imagenes/retratos/2p.jpg",
        author: "Ana García",
        description: "El proyecto Arte a la KY del Instituto Distrital de las Artes (Idartes) agrupa a casi 400 artistas que muestran y venden su arte en el centro de la capital colombiana con la intención de darle también cierto grado de formalidad a su trabajo.",
        resolution: "2700 x 1800 px"
    },
    {
        id: 8,
        title: "Plaza de mercado",
        category: "urbano",
        src: "imagenes/urbano/2g.jpg",
        thumbnail: "imagenes/urbano/2p.jpg",
        author: "Carlos Mendoza",
        description: "Un vibrante mercado nocturno iluminado con luces de colores, mostrando la vida y la cultura urbana en su máxima expresión.",
        date: "25/03/2025",
        resolution: "3200 x 2133 px"
    },
    {
        id: 9,
        title: "Parque Nacional Natural Uramba Bahía Málaga",
        category: "naturaleza",
        src: "imagenes/naturaleza/3g.jpg",
        thumbnail: "imagenes/naturaleza/3p.jpg",
        author: "Julio César",
        description: "Esta bahía de aguas tranquilas del océano Pacífico ofrece uno de los más bellos espectáculos de la naturaleza: la migración de las ballenas jorobadas. Cada año llegan a sus costas entre 500 y 700 ejemplares de ballena jorobada o yubarta, que vienen a las aguas de Bahía Málaga durante la época de reproducción.",
        date: "10/01/2025",
        resolution: "4500 x 3000 px"
    },
    {
        id: 10,
        title: "Hotel Waya Guajira - Riohacha",
        category: "arquitectura",
        src: "imagenes/arquitectura/3g.jpg",
        thumbnail: "imagenes/arquitectura/3p.jpg",
        author: "Ana García",
        description: "Hotel Waya Guajira es un lugar rodeado de un encanto natural inigualable. Es la razón por la que nuestro concepto de hospedaje es sostenible, pues, en consonancia con las culturas nativas de la zona, procuramos el respeto por la naturaleza. Al visitarnos, tu alojamiento se fusionará con un conocimiento de los valores de la Guajira. Esto significa que entrarás en una experiencia inmersiva protagonizada por el encuentro cultural entre tu forma de vida y la cosmovisión o rutinas de la cultura Wayúu.",
        date: "05/03/2025",
        resolution: "3600 x 2400 px"
    },
    {
        id: 11,
        title: "Artista en se maforo",
        category: "retratos",
        src: "imagenes/retratos/3g.jpg",
        thumbnail: "imagenes/retratos/3p.jpg",
        author: "Carlos Mendoza",
        description: "En los semáforos se encuentra gente con mucho talento que se gana el sustento diario. Esa acividad artística les permite viajar por Colombia y algunos países de Suramérica.",
        date: "22/02/2025",
        resolution: "2800 x 1867 px"
    },
    {
        id: 12,
        title: "Estación de metro",
        category: "urbano",
        src: "imagenes/urbano/3g.jpg",
        thumbnail: "imagenes/urbano/3p.jpg",
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