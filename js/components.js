// ============================================
// COMPONENTES REUTILIZABLES
// ============================================

// Configuración centralizada
const CONFIG = {
  // Número de WhatsApp (actualizado en un solo lugar)
  whatsappNumber: '+522941182897',
  whatsappLink: 'https://wa.me/+522941182897',
  
  // Redes Sociales
  social: {
    facebook: 'https://www.facebook.com/unasbereniice/',
    instagram: 'https://www.instagram.com/unasbereniice/',
    tiktok: 'https://www.tiktok.com/@bereniicerv'
  },
  
  // Logo (actualizado en un solo lugar)
  logo: 'https://i.postimg.cc/52yMLrbb/logo.pngsa',
  logoAlt: 'Studio Berenice Logo',
  
  // Año actual para el footer
  year: new Date().getFullYear()
};

// ============================================
// HEADER COMPONENTE
// ============================================

function createHeader(activePage = '') {
  // Determinar qué página está activa para resaltar el servicio
  const isActive = (page) => activePage === page ? 'text-brand-primary bg-brand-bg font-semibold' : 'text-brand-dark hover:bg-brand-bg hover:text-brand-primary';
  const isServiceActive = (page) => activePage === page ? 'text-brand-primary font-bold' : 'text-brand-dark hover:text-brand-primary';
  
  return `
    <header id="header" class="fixed w-full top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm py-2">
      <div class="container mx-auto px-6 flex justify-between items-center">
        
        <!-- Logo -->
        <a href="index.html" class="flex items-center">
          <img src="${CONFIG.logo}" alt="${CONFIG.logoAlt}" class="h-16 md:h-20 w-auto object-contain">
        </a>

        <!-- Navegación Desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="index.html" class="${activePage === 'home' ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'} font-semibold transition-colors">Inicio</a>
          
          <div class="relative group cursor-pointer py-4">
            <a href="#" class="${activePage === 'servicios' ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'} font-semibold transition-colors flex items-center gap-1">
              Servicios <i class="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
            </a>
            <ul class="dropdown-menu absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 mt-0 border-t-2 border-brand-primary">
              <li><a href="manicure.html" class="block px-4 py-2 ${isActive('manicure')} transition-colors"><i class="fas fa-hand-sparkles mr-2"></i>Manicure</a></li>
              <li><a href="pedicure.html" class="block px-4 py-2 ${isActive('pedicure')} transition-colors"><i class="fas fa-shoe-prints mr-2"></i>Pedicure</a></li>
              <li><a href="trenzas.html" class="block px-4 py-2 ${isActive('trenzas')} transition-colors"><i class="fas fa-user-friends mr-2"></i>Trenzas</a></li>
              <li><a href="cejas.html" class="block px-4 py-2 ${isActive('cejas')} transition-colors"><i class="fas fa-eye mr-2"></i>Cejas</a></li>
              <li><a href="extensiones.html" class="block px-4 py-2 ${isActive('extensiones')} transition-colors"><i class="fas fa-long-arrow-alt-down mr-2"></i>Extensiones</a></li>
            </ul>
          </div>

          <a href="index.html#galeria" class="text-brand-dark hover:text-brand-primary font-semibold transition-colors">Galería</a>
          <a href="Contacto.html" class="${activePage === 'contacto' ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'} font-semibold transition-colors">Contacto</a>
          <a href="${CONFIG.whatsappLink}" target="_blank" class="px-6 py-2 bg-brand-primary text-white rounded-full font-bold shadow-md hover:bg-brand-hover transition-all transform hover:-translate-y-1">
            Agendar
          </a>
        </nav>

        <!-- Botón Menú Móvil -->
        <button id="mobile-menu-btn" class="md:hidden text-2xl text-brand-text hover:text-brand-primary focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Menú Móvil -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
        <div class="flex flex-col px-6 py-4 space-y-3">
          <a href="index.html" class="font-semibold ${activePage === 'home' ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'}">Inicio</a>
          <div class="relative group cursor-pointer py-2">
            <a href="#" class="${activePage === 'servicios' ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'} font-semibold transition-colors flex items-center gap-1">
              Servicios <i class="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
            </a>
            <ul class="dropdown-menu absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 mt-0 border-t-2 border-brand-primary">
              <li><a href="manicure.html" class="block px-4 py-2 ${isActive('manicure')} transition-colors"><i class="fas fa-hand-sparkles mr-2"></i>Manicure</a></li>
              <li><a href="pedicure.html" class="block px-4 py-2 ${isActive('pedicure')} transition-colors"><i class="fas fa-shoe-prints mr-2"></i>Pedicure</a></li>
              <li><a href="trenzas.html" class="block px-4 py-2 ${isActive('trenzas')} transition-colors"><i class="fas fa-user-friends mr-2"></i>Trenzas</a></li>
              <li><a href="cejas.html" class="block px-4 py-2 ${isActive('cejas')} transition-colors"><i class="fas fa-eye mr-2"></i>Cejas</a></li>
              <li><a href="extensiones.html" class="block px-4 py-2 ${isActive('extensiones')} transition-colors"><i class="fas fa-long-arrow-alt-down mr-2"></i>Extensiones</a></li>
            </ul>
          </div>
          <a href="index.html#galeria" class="font-semibold text-brand-dark hover:text-brand-primary">Galería</a>
          <a href="Contacto.html" class="font-semibold ${activePage === 'contacto' ? 'text-brand-primary' : 'text-brand-dark hover:text-brand-primary'}">Contacto</a>
          <a href="${CONFIG.whatsappLink}" target="_blank" class="block text-center bg-brand-primary text-white py-2 rounded-full font-bold mt-2">Agendar Cita</a>
        </div>
      </div>
    </header>
  `;
}

// ============================================
// FOOTER COMPONENTE
// ============================================

function createFooter() {
  return `
    <footer class="bg-gray-900 text-white pt-16 pb-10">
      <div class="container mx-auto px-6 text-center">
        <div class="mb-8">
          <img src="${CONFIG.logo}" alt="${CONFIG.logoAlt}" class="h-16 mx-auto mb-4">
          <h3 class="font-serif text-2xl font-bold text-brand-primary mb-2">Studio Berenice</h3>
          <p class="text-gray-400">Realzamos tu belleza natural.</p>
        </div>
        
        <div class="flex justify-center space-x-6 mb-8">
          <a href="${CONFIG.social.facebook}" target="_blank" class="text-2xl text-gray-400 hover:text-brand-primary transition-colors"><i class="fab fa-facebook"></i></a>
          <a href="${CONFIG.social.instagram}" target="_blank" class="text-2xl text-gray-400 hover:text-brand-primary transition-colors"><i class="fab fa-instagram"></i></a>
          <a href="${CONFIG.whatsappLink}" target="_blank" class="text-2xl text-gray-400 hover:text-brand-primary transition-colors"><i class="fab fa-whatsapp"></i></a>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          <p>&copy; ${CONFIG.year} Studio Berenice. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}

// ============================================
// BOTÓN WHATSAPP FLOTANTE
// ============================================

function createWhatsAppButton() {
  return `
    <a href="${CONFIG.whatsappLink}" target="_blank" class="whatsapp-float">
      <i class="fab fa-whatsapp"></i>
    </a>
  `;
}

// ============================================
// LIGHTBOX COMPONENTE
// ============================================

function createLightbox() {
  return `
    <div id="lightbox" class="fixed inset-0 bg-black/95 z-[60] hidden flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300">
      <button class="lb-cerrar absolute top-6 right-6 text-white hover:text-brand-primary transition-colors flex flex-col items-center group z-50">
        <div class="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center group-hover:border-brand-primary mb-1 bg-black/50">
          <i class="fas fa-compress text-lg"></i>
        </div>
        <span class="text-xs uppercase font-bold tracking-wider">Cerrar</span>
      </button>

      <button class="lb-prev absolute left-2 md:left-8 text-white text-4xl hover:text-brand-primary p-4 z-40"><i class="fas fa-chevron-left"></i></button>
      <img src="" class="lb-img max-h-[85vh] max-w-[90vw] rounded shadow-2xl transform transition-transform scale-95 mx-auto" alt="Vista Ampliada">
      <button class="lb-next absolute right-2 md:right-8 text-white text-4xl hover:text-brand-primary p-4 z-40"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;
}

// ============================================
// FUNCIÓN PARA INSERTAR COMPONENTES
// ============================================

function renderComponents(activePage = '') {
  // Insertar Header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = createHeader(activePage);
  }

  // Insertar Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = createFooter();
  }

  // Insertar WhatsApp Button
  const whatsappPlaceholder = document.getElementById('whatsapp-placeholder');
  if (whatsappPlaceholder) {
    whatsappPlaceholder.innerHTML = createWhatsAppButton();
  }

  // Insertar Lightbox
  const lightboxPlaceholder = document.getElementById('lightbox-placeholder');
  if (lightboxPlaceholder) {
    lightboxPlaceholder.innerHTML = createLightbox();
  }
}