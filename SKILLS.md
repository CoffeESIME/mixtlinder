# 🛠️ SKILLS.md - Stack Tecnológico de Mixtlinder

Este documento detalla todas las tecnologías, librerías, herramientas y patrones de diseño utilizados en el proyecto **Mixtlinder**.

---

## 📱 Frontend / Mobile

### Framework Principal

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **React Native** | `0.74.1` | Framework para desarrollo de aplicaciones móviles nativas multiplataforma |
| **React** | `18.2.0` | Librería JavaScript para construir interfaces de usuario |
| **Expo** | `^51.0.9` | Plataforma para desarrollo de apps React Native universales |

### Navegación

| Librería | Versión | Uso |
|----------|---------|-----|
| **expo-router** | `^3.5.14` | File-based routing con typed routes para Expo |
| **@react-navigation/native** | `^6.0.2` | Navegación nativa para React Native |

### UI/UX & Componentes

| Librería | Versión | Uso |
|----------|---------|-----|
| **react-native-deck-swiper** | `^2.0.17` | Componente de tarjetas deslizables estilo Tinder |
| **react-native-svg** | `^15.7.1` | Soporte para gráficos SVG en React Native |
| **@expo/vector-icons** | `^14.0.0` | Iconos vectoriales (FontAwesome, etc.) |
| **react-native-gesture-handler** | `~2.16.1` | Gestos nativos de alto rendimiento |
| **react-native-reanimated** | `~3.10.1` | Animaciones fluidas y declarativas |
| **react-native-screens** | `3.31.1` | Navegación optimizada con pantallas nativas |
| **react-native-safe-area-context** | `4.10.1` | Manejo de áreas seguras (notch, home indicator) |

### Mapas

| Librería | Versión | Uso |
|----------|---------|-----|
| **@rnmapbox/maps** | `^10.1.31` | SDK de Mapbox para React Native |
| **mapbox-gl** | `^2.15.0` | Mapbox GL JS para soporte web |

### Plataforma Web

| Librería | Versión | Uso |
|----------|---------|-----|
| **react-dom** | `18.2.0` | React renderer para web |
| **react-native-web** | `~0.19.10` | React Native para la web |

### APIs de Expo

| Módulo | Versión | Uso |
|--------|---------|-----|
| **expo-font** | `^12.0.6` | Carga de fuentes personalizadas |
| **expo-splash-screen** | `~0.27.4` | Control del splash screen |
| **expo-status-bar** | `~1.12.1` | Personalización de barra de estado |
| **expo-system-ui** | `~3.0.4` | Control de UI del sistema |
| **expo-linking** | `~6.3.1` | Deep linking y manejo de URLs |
| **expo-web-browser** | `~13.0.3` | Navegador web integrado |

---

## ⚙️ Herramientas de Desarrollo

### Lenguaje & Tipado

| Herramienta | Versión | Uso |
|-------------|---------|-----|
| **TypeScript** | `~5.3.3` | Superset tipado de JavaScript |
| **@types/react** | `~18.2.45` | Definiciones de tipos para React |

### Transpilación & Bundling

| Herramienta | Versión | Uso |
|-------------|---------|-----|
| **@babel/core** | `^7.20.0` | Compilador JavaScript |
| **babel-preset-expo** | (incluido) | Preset de Babel para Expo |
| **@babel/plugin-proposal-export-namespace-from** | `^7.18.9` | Plugin para export namespace |
| **react-native-reanimated/plugin** | (incluido) | Plugin de Babel para Reanimated |
| **Metro** | (incluido) | Bundler de React Native |

### Testing

| Herramienta | Versión | Uso |
|-------------|---------|-----|
| **Jest** | `^29.2.1` | Framework de testing |
| **jest-expo** | `~51.0.1` | Preset de Jest para Expo |
| **react-test-renderer** | `18.2.0` | Renderizado para testing |

---

## 🏗️ DevOps & Configuración

### Control de Versiones

- **Git** - Sistema de control de versiones
- **.gitignore** - Archivo de exclusiones configurado para Expo/React Native

### Configuración del Proyecto

| Archivo | Propósito |
|---------|-----------|
| `app.json` | Configuración de Expo (nombre, iconos, plugins, splash) |
| `tsconfig.json` | Configuración de TypeScript con paths aliases |
| `babel.config.js` | Configuración de Babel con plugins |
| `package.json` | Dependencias y scripts NPM |
| `expo-env.d.ts` | Declaraciones de tipos para Expo |

### Características de Expo Config

```json
{
  "experiments": {
    "typedRoutes": true  // Rutas tipadas
  },
  "plugins": [
    "expo-router",
    "@rnmapbox/maps"
  ]
}
```

---

## 🎨 Patrones de Diseño

### Arquitectura

| Patrón | Descripción | Implementación |
|--------|-------------|----------------|
| **File-based Routing** | Navegación basada en estructura de archivos | `app/` directory con Expo Router |
| **Component-Based Architecture** | UI modular basada en componentes | `components/` directory |
| **Separation of Concerns** | Separación de responsabilidades | Componentes, constantes y rutas separados |

### Patrones de Componentes

| Patrón | Descripción | Ejemplo |
|--------|-------------|---------|
| **Presentational Components** | Componentes que solo renderizan UI | `DiscoverCard`, `RouteCard`, `Button` |
| **Container Components** | Componentes con lógica de negocio | `app/discover/index.tsx` |
| **Compound Components** | Componentes que trabajan juntos | `Swiper` + `Card` |
| **Forward Ref Pattern** | Pasar refs a componentes hijos | `Button.tsx` con `forwardRef` |
| **Render Props / Callback** | Renderizado condicional mediante funciones | `renderCard` en Swiper |

### Patrones de React

| Patrón | Descripción | Uso |
|--------|-------------|-----|
| **Custom Hooks** | Lógica reutilizable encapsulada | `useColorScheme`, `useThemeColor`, `useClientOnlyValue` |
| **Memo Pattern** | Optimización de renderizado | `React.memo()` en componentes Card |
| **useCallback** | Memoización de funciones | Handlers en `discover/index.tsx` |
| **useRef** | Referencias a componentes | `swiperRef` para control programático |
| **useState** | Estado local | Índice actual, modales |

### Patrones de UI/UX

| Patrón | Descripción | Implementación |
|--------|-------------|----------------|
| **Card Pattern** | Contenido en tarjetas visuales | `RouteCard`, `DiscoverCard` |
| **Swipe Interaction** | Interacción por deslizamiento | `react-native-deck-swiper` |
| **Modal Pattern** | Overlays para información detallada | Modales en `RouteCard`, `about/` |
| **Theme Provider** | Tematización centralizada | `ThemeProvider` de React Navigation |
| **Dark Mode Support** | Soporte para tema oscuro | `useColorScheme` hook |

### Patrones de Styling

| Patrón | Descripción | Uso |
|--------|-------------|-----|
| **StyleSheet API** | Estilos optimizados de RN | `StyleSheet.create()` |
| **Inline Conditional Styles** | Estilos condicionales | `[styles.button, disabled && styles.disabled]` |
| **Design Tokens** | Variables de diseño centralizadas | `constants/Colors.ts` |
| **Absolute Positioning** | Layout de overlays | Botones flotantes, overlays |

### Patrones de Datos

| Patrón | Descripción | Ejemplo |
|--------|-------------|---------|
| **Static Data Arrays** | Datos mock para prototipado | Arrays de `cards`, `trips`, `guias` |
| **TypeScript Interfaces** | Contratos de datos tipados | `CardProps`, `Guia`, `Contact`, `Review` |
| **Props Drilling** | Paso de datos entre componentes | Props de Card a Modal |

---

## 📋 Resumen de Tecnologías

### Por Categoría

```
┌─────────────────────────────────────────────────────────────┐
│                    MIXTLINDER TECH STACK                    │
├─────────────────────────────────────────────────────────────┤
│  FRONTEND                                                   │
│  ├── React Native 0.74.1                                    │
│  ├── React 18.2.0                                           │
│  ├── Expo SDK 51                                            │
│  └── TypeScript 5.3.3                                       │
├─────────────────────────────────────────────────────────────┤
│  NAVEGACIÓN                                                 │
│  ├── Expo Router 3.5.14                                     │
│  └── React Navigation 6.0.2                                 │
├─────────────────────────────────────────────────────────────┤
│  UI/ANIMACIONES                                             │
│  ├── React Native Deck Swiper 2.0.17                        │
│  ├── React Native Reanimated 3.10.1                         │
│  ├── React Native Gesture Handler 2.16.1                    │
│  └── React Native SVG 15.7.1                                │
├─────────────────────────────────────────────────────────────┤
│  MAPAS                                                      │
│  ├── @rnmapbox/maps 10.1.31                                 │
│  └── mapbox-gl 2.15.0                                       │
├─────────────────────────────────────────────────────────────┤
│  TESTING                                                    │
│  ├── Jest 29.2.1                                            │
│  └── jest-expo 51.0.1                                       │
├─────────────────────────────────────────────────────────────┤
│  BUILD/TRANSPILE                                            │
│  ├── Babel 7.20.0                                           │
│  └── Metro Bundler                                          │
└─────────────────────────────────────────────────────────────┘
```

### Plataformas Soportadas

| Plataforma | Soporte | Notas |
|------------|---------|-------|
| 📱 **iOS** | ✅ Completo | Includes tablet support |
| 🤖 **Android** | ✅ Completo | Adaptive icon configured |
| 🌐 **Web** | ✅ Completo | Metro bundler + static output |

---

## 🔗 Referencias

- [Expo Documentation](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/)
- [React Native Deck Swiper](https://github.com/alexbrillant/react-native-deck-swiper)

---

<p align="center">
  <sub>📊 Documentación técnica generada para Mixtlinder v1.0.0</sub>
</p>
