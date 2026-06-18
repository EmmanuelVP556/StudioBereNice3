// ============================================
// LÓGICA PRINCIPAL DE LA APLICACIÓN
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Menú Móvil
  function initMobileMenu() {
    const btnMenu = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (btnMenu && mobileMenu) {
      btnMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

  // 2. Scroll Reveal
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    function checkReveals() {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', checkReveals);
    checkReveals(); // Ejecutar al inicio
  }

  // 3. Header Shadow
  function initHeaderShadow() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md', 'py-2');
      } else {
        header.classList.remove('shadow-md', 'py-2');
      }
    });
  }

  // 4. Filtrado de Galería
  function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.galeria-filtros button');
    const items = document.querySelectorAll('.galeria-item');
    
    if (filterBtns.length === 0 || items.length === 0) return;
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Actualizar estado de los botones
        filterBtns.forEach(b => {
          b.classList.remove('bg-brand-primary', 'text-white');
          b.classList.add('bg-white', 'text-brand-primary');
        });
        btn.classList.remove('bg-white', 'text-brand-primary');
        btn.classList.add('bg-brand-primary', 'text-white');

        // Filtrar items
        const category = btn.dataset.filter;
        items.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => item.style.display = 'none', 300);
          }
        });
      });
    });
  }

  // 5. Lightbox
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const lbImg = lightbox.querySelector('.lb-img');
    const lbCerrar = lightbox.querySelector('.lb-cerrar');
    const lbPrev = lightbox.querySelector('.lb-prev');
    const lbNext = lightbox.querySelector('.lb-next');
    
    // Obtener imágenes de la galería
    let galleryImages = Array.from(document.querySelectorAll('.galeria-item img'));
    let currentIndex = 0;

    const openLightbox = (index) => {
      if (index < 0 || index >= galleryImages.length) return;
      
      currentIndex = index;
      lbImg.src = galleryImages[currentIndex].src;
      lightbox.classList.remove('hidden');
      
      setTimeout(() => {
        lightbox.classList.remove('opacity-0');
        lbImg.classList.remove('scale-95');
        lbImg.classList.add('scale-100');
      }, 10);
      
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.add('opacity-0');
      lbImg.classList.remove('scale-100');
      lbImg.classList.add('scale-95');
      
      setTimeout(() => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }, 300);
    };

    const showImage = (index) => {
      if (index < 0) index = galleryImages.length - 1;
      if (index >= galleryImages.length) index = 0;
      
      currentIndex = index;
      lbImg.style.opacity = '0.5';
      
      setTimeout(() => {
        lbImg.src = galleryImages[currentIndex].src;
        lbImg.style.opacity = '1';
      }, 150);
    };

    // Event Listeners para abrir lightbox
    galleryImages.forEach((img, index) => {
      const parent = img.parentElement;
      if (parent) {
        parent.addEventListener('click', () => openLightbox(index));
      }
    });

    // Event Listeners para controlar lightbox
    if (lbCerrar) lbCerrar.addEventListener('click', closeLightbox);
    if (lbPrev) lbPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
    if (lbNext) lbNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });

    // Cerrar al hacer clic fuera
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Controles de teclado
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      }
    });
  }

  // 6. Inicializar todas las funciones
  function initAll() {
    initMobileMenu();
    initScrollReveal();
    initHeaderShadow();
    initGalleryFilters();
    initLightbox();
  }

  initAll();
});