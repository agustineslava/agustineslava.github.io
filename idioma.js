const textos = {
    "es": {
        "nav": {
            "inicio": "Inicio",
            "experiencia": "Experiencia",
            "educacion": "Educación",
            "habilidades": "Habilidades",
            "proyectos": "Proyectos",
            "brand": "Agustín Eslava | Portafolio"
        },
        "header": {
            "subtitulo": "Analista en Sistemas (en curso) | Técnico En Reparación de Electrodomésticos",
            "boton-cv": "Descargar CV (PDF) 📥"
        },
        "resumen": {
            "titulo": "Resumen",
            "texto": "Soy Agustín Eslava, técnico con más de nueve años de experiencia en la reparación de electrodomésticos, venta de repuestos y atención al cliente. Me especializo en el diagnóstico, reparación y servicio técnico de marcas líderes, además de tener habilidades en la gestión de redes sociales comerciales, herramientas de Office y programación. Actualmente, curso la Tecnicatura en Análisis de Sistemas y me formo en desarrollo web Front-End, con el objetivo de integrar mis conocimientos técnicos con el ámbito digital."
        },
        "exp": {
            "titulo-pag": "Experiencia Laboral",
            "puesto": "Técnico en Reparación de Electrodomésticos",
            "fecha": "2016 - Presente",
            "item1": "<span>🛠️</span> Diagnóstico y reparación de electrodomésticos.",
            "item2": "<span>🏅</span> Servicio técnico oficial: Drean, Whirlpool, Ariston, entre otras.",
            "item3": "<span>🤝</span> Venta de repuestos, asesoramiento técnico y atención al cliente.",
            "item4": "<span>📱</span> Gestión de redes sociales comerciales de la empresa."
        },
        "edu": {
            "titulo-acad": "Formación Académica",
            "carrera": "Analista de Sistemas",
            "estado": "En curso",
            "titulo-cursos": "Cursos y Certificaciones",
            "cert1-info": "Udemy | Finalizado Septiembre 2025",
            "cert2-info": "Udemy | Finalizado Septiembre 2024",
            "btn-cert": "Ver Certificado"
        },
        "skills":{
            "titulo-pag": "Habilidades Técnicas",
            "cat1": "Programación y Desarrollo",
            "cat2": "Soporte Técnico y Gestión",
            "cat3": "Habilidades Blandas",
            "soporte1": "Reparación de Electrodomésticos",
            "soporte2": "Diagnóstico de Fallas",
            "soporte3": "Gestión de Redes Comerciales",
            "soft1": "Comunicación",
            "soft2": "Trabajo en Equipo",
            "soft3": "Manejo de Presión"
        },
       "projects": {
            "titulo-pag": "Mis Proyectos",
            "p1-titulo": "Sistema de Gestión",
            "p1-desc": "Control de stock para Service Integral",
            "p2-titulo": "Portafolio Virtual",
            "ver-galeria": "Ver Galería 📸",
            "p2-desc": "Sitio web profesional bilingüe.",
            "btn-repo": "Ver Código en GitHub 💻"
}
    },
    "en": {
        "nav": {
            "inicio": "Home",
            "experiencia": "Experience",
            "educacion": "Education",
            "habilidades": "Skills",
            "proyectos": "Projects",
            "brand": "Agustín Eslava | Portfolio"
        },
        "header": {
            "subtitulo": "Systems Analyst (in progress) | Appliance Repair Technician",
            "boton-cv": "Download CV (PDF) 📥"
        },
        "resumen": {
            "titulo": "Summary",
            "texto": "I am Agustín Eslava, a technician with over nine years of experience in appliance repair, spare parts sales, and customer service. I specialize in the diagnosis, repair, and technical service of leading brands, in addition to having skills in commercial social media management, Office tools, and programming. Currently, I am studying Systems Analysis and training in Front-End web development, with the goal of integrating my technical knowledge with the digital field."
        },
        "exp": {
            "titulo-pag": "Work Experience",
            "puesto": "Appliance Repair Technician",
            "fecha": "2016 - Present",
            "item1": "<span>🛠️</span> Diagnosis and repair of household appliances.",
            "item2": "<span>🏅</span> Official technical service: Drean, Whirlpool, Ariston, among others.",
            "item3": "<span>🤝</span> Spare parts sales, technical advice, and customer service.",
            "item4": "<span>📱</span> Management of the company's commercial social networks."
        },
        "edu": {
            "titulo-acad": "Academic Background",
            "carrera": "Systems Analyst",
            "estado": "In progress",
            "titulo-cursos": "Courses and Certifications",
            "cert1-info": "Udemy | Finished September 2025",
            "cert2-info": "Udemy | Finished September 2024",
            "btn-cert": "View Certificate"
        },
        "skills":{
            "titulo-pag": "Technical Skills",
            "cat1": "Programming & Development",
            "cat2": "Technical Support & Management",
            "cat3": "Soft Skills",
            "soporte1": "Appliance Repair",
            "soporte2": "Fault Diagnosis",
            "soporte3": "Commercial Social Media Management",
            "soft1": "Communication",
            "soft2": "Teamwork",
            "soft3": "Pressure Management"
        },
        "projects":{
            "titulo-pag":"My Projects",
            "p1-titulo": "Management System",
            "p1-desc": "Stock and customer control for Service Integral",
            "p2-titulo": "Virtual Portfolio",
            "ver-galeria": "View Gallery 📸",
            "p2-desc": "Bilingual professional website.",
            "btn-repo": "View Code on GitHub 💻"
        }
    }
};

const botonIdioma = document.getElementById('btn-idioma');
const elementosATraducir = document.querySelectorAll('[data-section]');

const cambiarIdioma = (idioma) => {
    // 1. Guardamos el idioma en localStorage para que sea persistente
    localStorage.setItem('idioma', idioma);

    elementosATraducir.forEach((elemento) => {
        const seccion = elemento.dataset.section;
        const valor = elemento.dataset.value;

        if (textos[idioma] && textos[idioma][seccion] && textos[idioma][seccion][valor]) {
            elemento.innerHTML = textos[idioma][seccion][valor];
        }
    });
    
    let contenidoBoton = '';
    
    if (idioma === 'es') {
        contenidoBoton = `
            <img src="banderas/bandera_ingles.png" alt="Bandera EN" class="img-bandera" style="width: 25px; height: auto;">
            <span>English</span>
        `;
    } else {
        contenidoBoton = `
            <img src="banderas/bandera_hispana.png" alt="Bandera ES" class="img-bandera" style="width: 25px; height: auto;">
            <span>Español</span>
        `;
    }

    if (botonIdioma) {
        botonIdioma.innerHTML = contenidoBoton;
    }
};

botonIdioma.addEventListener('click', () => {
    // Leemos el idioma actual del localStorage
    const idiomaActual = localStorage.getItem('idioma') || 'es';
    // Si es 'es', el nuevo será 'en', y viceversa
    const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
    cambiarIdioma(nuevoIdioma);
});

window.addEventListener('DOMContentLoaded', () => {
    // Al cargar, buscamos qué idioma quedó guardado
    const idiomaGuardado = localStorage.getItem('idioma') || 'es';
    cambiarIdioma(idiomaGuardado);
});
