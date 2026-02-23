# ABAX Health Service - Landing Page

Landing page corporativa para ABAX Health Consulting con diseño médico profesional.

## 🎨 Características

- **Paleta de colores ABAX**: Alice Blue, Glaucous, Baltic Blue, Platinum
- **Componentes MagicUI**: Bento Grid, Orbiting Circles, Animated Grid Pattern, Blur Fade
- **Patrones médicos**: Hexágonos y elementos científicos
- **Responsive**: Diseño adaptable a todos los dispositivos
- **Animaciones suaves**: Transiciones profesionales con Framer Motion

## 🚀 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📁 Estructura del Proyecto

```
abax-landing/
├── app/
│   ├── components/
│   │   ├── magicui/          # Componentes MagicUI
│   │   ├── HexagonPattern.tsx
│   │   ├── DiagonalStripes.tsx
│   │   └── Navigation.tsx
│   ├── servicios/
│   ├── clientes/
│   ├── alianzas/
│   ├── nosotros/
│   ├── contacto/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── assets/
│       ├── logo-abax.png
│       ├── header-top.jpg
│       └── header-bottom.jpg
├── lib/
│   └── utils.ts
└── tailwind.config.ts
```

## 🎨 Paleta de Colores

```css
--alice-blue: #D9E4F0    /* Backgrounds suaves */
--glaucous: #5178A7       /* Color secundario */
--baltic-blue: #275891    /* Color primario */
--platinum: #F6F9FB       /* Background principal */
--baltic-blue-2: #356092  /* Hover states */
```

## 📄 Páginas

- **Home** (`/`): Hero con imagen corporativa, stats, servicios destacados
- **Servicios** (`/servicios`): Bento Grid con servicios detallados
- **Clientes** (`/clientes`): Orbiting Circles con logos de clientes
- **Alianzas** (`/alianzas`): Bento Grid con aliados estratégicos
- **Nosotros** (`/nosotros`): Timeline, misión, visión y valores
- **Contacto** (`/contacto`): Formulario de contacto e información

## 📧 Contacto

- Email: comercial@abaxhealthservice.com
- Email alternativo: abaxhealthservice@gmail.com
- Ubicación: Buenos Aires, Argentina

## 🛠️ Tecnologías

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## 📝 Notas de Desarrollo

- Todos los componentes principales usan `'use client'`
- Las animaciones están optimizadas para performance
- Los patrones hexagonales representan el aspecto médico/científico
- El logo ABAX incluye círculos dispersos (moléculas/datos)

## 🔧 Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 📦 Dependencias Principales

- `next`: Framework React
- `framer-motion`: Animaciones
- `@heroicons/react`: Iconos
- `tailwindcss`: Estilos
- `clsx` & `tailwind-merge`: Utilidades de clases CSS

---

Desarrollado para ABAX Health Consulting
