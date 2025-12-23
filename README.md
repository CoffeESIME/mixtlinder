# 🏔️ Mixtlinder

<p align="center">
  <img src="./assets/images/icon.png" alt="Mixtlinder Logo" width="120"/>
</p>

<p align="center">
  <strong>Tu compañero de senderismo - Conecta, Descubre y Explora</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Expo-51.0.9-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo"/>
  <img src="https://img.shields.io/badge/React_Native-0.74.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native"/>
  <img src="https://img.shields.io/badge/TypeScript-5.3.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Mapbox-10.1.31-4264FB?style=for-the-badge&logo=mapbox&logoColor=white" alt="Mapbox"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android%20%7C%20Web-lightgrey?style=for-the-badge" alt="Platform"/>
  <img src="https://img.shields.io/badge/License-Private-red?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-green?style=for-the-badge" alt="Version"/>
</p>

---

## 📖 Descripción

**Mixtlinder** es una aplicación móvil multiplataforma diseñada para entusiastas del senderismo y la naturaleza. Inspirada en la mecánica de swipe de Tinder, permite a los usuarios descubrir nuevas rutas de senderismo, conectar con guías experimentados y encontrar compañeros de aventura.

La aplicación combina una interfaz intuitiva basada en tarjetas deslizables con integración de mapas interactivos, creando una experiencia única para explorar el mundo del senderismo.

---

## ✨ Features

### 🔄 Discover - Sistema de Swipe
- **Interfaz estilo Tinder**: Desliza tarjetas para conectar con guías y otros senderistas
- **Animaciones fluidas**: Transiciones suaves con React Native Reanimated
- **Overlays interactivos**: Indicadores visuales de "LIKE" y "NOPE" durante el swipe
- **Stack de tarjetas**: Visualización en pila de múltiples perfiles

### 🗺️ Mapas Interactivos
- **Integración Mapbox**: Mapas de alta calidad y detallados
- **Visualización de rutas**: Explora senderos con información detallada
- **Soporte multiplataforma**: Compatible con iOS, Android y Web

### 🥾 Gestión de Rutas
- **Catálogo de rutas**: Explora rutas con información completa
- **Detalles de ruta**: Distancia, tiempo estimado y descripción
- **Participantes**: Vista de quiénes participan en cada excursión
- **Información de guías**: Conoce a los expertos que lideran cada aventura

### 👤 Perfiles de Usuario
- **Sistema de niveles**: Garras de nivel tipo "Mixtli" como insignias de progreso
- **Historial de rutas**: Seguimiento de rutas completadas
- **Próximas aventuras**: Visualiza tus futuras excursiones

### 🧭 Guías Profesionales
- **Perfiles detallados**: Información completa de cada guía
- **Sistema de reseñas**: Calificaciones y comentarios de la comunidad
- **Contacto directo**: Comunicación por email y teléfono

### 🎨 UI/UX Moderno
- **Tema claro/oscuro**: Soporte automático para modo oscuro
- **Componentes reutilizables**: Sistema de diseño modular
- **Iconografía personalizada**: SVGs personalizados (Cat Claw)
- **Navegación fluida**: Expo Router con rutas tipadas

---

## 🚀 Instalación

### Prerrequisitos

- **Node.js** >= 18.x
- **npm** o **yarn**
- **Expo CLI**: `npm install -g expo-cli`
- **Expo Go App** (para testing en dispositivo físico)

### Configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mixtlinder.git
   cd mixtlinder
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Mapbox** (Opcional)
   
   Obtén un token de acceso en [Mapbox](https://account.mapbox.com/) y configúralo en `app.json`:
   ```json
   {
     "plugins": [
       ["@rnmapbox/maps", {
         "RNMapboxMapsDownloadToken": "TU_TOKEN_AQUI"
       }]
     ]
   }
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia Expo Dev Server |
| `npm run android` | Ejecuta en emulador/dispositivo Android |
| `npm run ios` | Ejecuta en simulador/dispositivo iOS |
| `npm run web` | Ejecuta en navegador web |
| `npm test` | Ejecuta tests con Jest |

---

## 📁 Estructura del Proyecto

```
mixtlinder/
├── 📂 app/                          # Rutas y pantallas (Expo Router)
│   ├── 📄 _layout.tsx               # Layout raíz con navegación
│   ├── 📄 index.tsx                 # Landing page principal
│   ├── 📄 modal.tsx                 # Pantalla modal
│   ├── 📄 +html.tsx                 # Template HTML para web
│   ├── 📄 +not-found.tsx            # Página 404
│   ├── 📂 about/                    # Sección "Conoce tus guías"
│   ├── 📂 discover/                 # Página de swipe/descubrimiento
│   ├── 📂 maps/                     # Integración de mapas
│   ├── 📂 nextroutes/               # Próximas rutas disponibles
│   └── 📂 profile/                  # Perfil de usuario
├── 📂 assets/
│   ├── 📂 fonts/                    # Fuentes personalizadas
│   └── 📂 images/                   # Imágenes y recursos
├── 📂 components/
│   ├── 📂 Claw/                     # Componente SVG de garra
│   ├── 📂 discoverCard/             # Tarjeta de descubrimiento
│   ├── 📂 Guide/                    # Perfil de guía
│   ├── 📂 routeCard/                # Tarjeta de ruta
│   ├── 📂 ui/buttons/               # Componentes UI reutilizables
│   ├── 📄 Themed.tsx                # Componentes con tema
│   ├── 📄 useColorScheme.ts         # Hook para esquema de color
│   └── ...
├── 📂 constants/
│   └── 📄 Colors.ts                 # Paleta de colores
├── 📄 app.json                      # Configuración Expo
├── 📄 babel.config.js               # Configuración Babel
├── 📄 package.json                  # Dependencias
└── 📄 tsconfig.json                 # Configuración TypeScript
```

---

## 📱 Capturas de Pantalla

| Landing | Discover | Rutas | Perfil |
|---------|----------|-------|--------|
| 🏠 Página de inicio con acceso rápido a todas las secciones | 💚 Desliza para conectar con guías | 🥾 Explora rutas detalladas | 👤 Tu progreso y nivel |

---

## 🔧 Configuración Avanzada

### Temas Personalizados

Los colores del tema se definen en `constants/Colors.ts`:

```typescript
export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
  },
};
```

### Añadir Nuevas Rutas

1. Crea una carpeta en `app/[nombre-ruta]/`
2. Añade `_layout.tsx` para configurar navegación
3. Crea `index.tsx` con el contenido de la pantalla

---

## 🧪 Testing

El proyecto utiliza Jest con el preset de Expo:

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm test -- --watch
```

---

## 🤝 Contribución

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Add: nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto es **privado** y todos los derechos están reservados.

---

## 👥 Equipo

Desarrollado con ❤️ por el equipo de **Mixtli Hiking**.

---

<p align="center">
  <sub>Hecho con ☕ y 🏔️ | © 2024 Mixtlinder</sub>
</p>
