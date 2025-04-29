# Web Responsive de Emprendimiento

Este proyecto consiste en un sitio web moderno y completamente responsive, diseñado para emprendedores que buscan crear asistentes virtuales o automatizar procesos con tecnología avanzada.

![Vista previa del sitio web](images/preview.jpg)

## Características

- **Diseño 100% Responsive**: Optimizado para todos los dispositivos (móviles, tablets y escritorio)
- **Modo Claro/Oscuro**: Cambia entre modos de visualización según las preferencias del usuario
- **Multilenguaje**: Soporte para Español, Inglés y Portugués
- **Navegación Intuitiva**: Menú hamburguesa para dispositivos móviles y navegación fluida
- **Secciones Interactivas**: 
  - Slider de testimonios
  - Acordeón de preguntas frecuentes
  - Filtro de plantillas
  - Formularios interactivos con validación

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS para una personalización sencilla)
- JavaScript vanilla (sin dependencias externas)
- Diseño responsive utilizando Flexbox y Grid
- Optimización de rendimiento

## Estructura del Proyecto

```
emprendimiento/
│
├── index.html           # Página principal del sitio
├── image-placeholders.html  # Página con marcadores de posición para imágenes
├── css/
│   └── styles.css       # Estilos principales (incluye media queries)
├── js/
│   ├── script.js        # Funcionalidades principales
│   └── translate.js     # Sistema de traducción multilengua
└── images/
    └── ...              # Imágenes del sitio
```

## Compatibilidad

El sitio web es compatible con todos los navegadores modernos:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Opera

## Instalación y Ejecución Local

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/emprendimiento-web.git
   ```

2. Navega a la carpeta del proyecto:
   ```
   cd emprendimiento-web
   ```

3. Abre el archivo `index.html` en tu navegador preferido

## Personalización

### Colores
El sistema utiliza variables CSS, lo que facilita el cambio de esquema de colores. Modifica las variables en `:root` dentro de `styles.css` para personalizar los colores.

### Contenido
Todos los textos están estructurados en el HTML y pueden ser fácilmente modificados. Para contenido multilingüe, actualiza las claves en el archivo `translate.js`.

## Despliegue

Este sitio puede ser desplegado en cualquier servidor web o servicio de hosting:
- GitHub Pages
- Netlify
- Vercel
- Cualquier hosting tradicional

## Contribución

Si deseas contribuir al proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

[MIT License](LICENSE) - Siéntete libre de usar, modificar y distribuir este código.

---
Desarrollado con ❤️ - 2025