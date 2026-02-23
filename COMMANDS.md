# 🛠️ ABAX Landing - Comandos Útiles

## 📦 Instalación y Setup

### Instalación inicial
```bash
npm install
```

### Instalar dependencias faltantes
```bash
npm install clsx tailwind-merge tailwindcss-animate
```

### Setup automático
```bash
./setup.sh
```

---

## 🚀 Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre: http://localhost:3000

### Build de producción
```bash
npm run build
```

### Iniciar servidor de producción
```bash
npm run start
```

### Linter
```bash
npm run lint
```

### Linter con auto-fix
```bash
npm run lint -- --fix
```

---

## 🧪 Testing y Verificación

### Verificar estructura de archivos
```bash
ls -la app/components/magicui/
ls -la public/assets/
ls -la lib/
```

### Verificar páginas
```bash
ls -la app/*/page.tsx
```

### Ver tamaño de assets
```bash
du -h public/assets/*
```

### Verificar dependencias instaladas
```bash
npm list clsx tailwind-merge tailwindcss-animate
```

---

## 🎨 Desarrollo de Componentes

### Crear nuevo componente MagicUI
```bash
touch app/components/magicui/nuevo-componente.tsx
```

### Crear nueva página
```bash
mkdir app/nueva-pagina
touch app/nueva-pagina/page.tsx
```

### Ver estructura del proyecto
```bash
tree -L 3 -I 'node_modules|.next'
```

---

## 🔍 Debugging

### Ver logs de desarrollo
```bash
npm run dev 2>&1 | tee dev.log
```

### Limpiar cache de Next.js
```bash
rm -rf .next
npm run dev
```

### Verificar errores de TypeScript
```bash
npx tsc --noEmit
```

### Ver errores de Tailwind
```bash
npx tailwindcss -i ./app/globals.css -o ./output.css --watch
```

---

## 📊 Análisis y Optimización

### Analizar bundle size
```bash
npm run build
# Revisar .next/analyze/
```

### Lighthouse audit (requiere Chrome)
```bash
# Iniciar servidor
npm run build && npm run start

# En otra terminal
npx lighthouse http://localhost:3000 --view
```

### Verificar accesibilidad
```bash
npx @axe-core/cli http://localhost:3000
```

---

## 🖼️ Optimización de Imágenes

### Convertir JPG a WebP (requiere imagemagick)
```bash
cd public/assets
convert header-top.jpg -quality 85 header-top.webp
convert header-bottom.jpg -quality 85 header-bottom.webp
```

### Optimizar PNG (requiere optipng)
```bash
cd public/assets
optipng -o7 logo-abax.png
```

### Ver tamaño de imágenes
```bash
ls -lh public/assets/*.{jpg,png,webp}
```

---

## 📝 Git Commands

### Inicializar repositorio
```bash
git init
git add .
git commit -m "feat: ABAX landing redesign complete"
```

### Ver cambios
```bash
git status
git diff
```

### Crear branch para features
```bash
git checkout -b feature/nueva-funcionalidad
```

---

## 🔧 Tailwind Utilities

### Generar clases de Tailwind
```bash
npx tailwindcss -i ./app/globals.css -o ./output.css
```

### Ver configuración de Tailwind
```bash
cat tailwind.config.ts
```

### Purgar CSS no utilizado
```bash
npm run build
# Tailwind automáticamente purga en producción
```

---

## 📦 Package Management

### Ver dependencias desactualizadas
```bash
npm outdated
```

### Actualizar dependencias
```bash
npm update
```

### Verificar vulnerabilidades
```bash
npm audit
npm audit fix
```

### Limpiar node_modules
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🌐 Deployment

### Vercel (recomendado para Next.js)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

### Build para producción
```bash
npm run build
# Los archivos están en .next/
```

---

## 📊 Monitoreo

### Ver uso de memoria durante desarrollo
```bash
npm run dev &
top -p $(pgrep -f "next dev")
```

### Ver logs en tiempo real
```bash
npm run dev | grep -i error
```

---

## 🎯 Comandos Específicos ABAX

### Verificar paleta de colores
```bash
grep -r "alice-blue\|glaucous\|baltic-blue\|platinum" app/
```

### Verificar uso de componentes MagicUI
```bash
grep -r "BlurFade\|BentoGrid\|OrbitingCircles\|AnimatedGridPattern" app/
```

### Contar líneas de código
```bash
find app -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

### Ver todas las páginas
```bash
find app -name "page.tsx" -exec echo {} \;
```

---

## 🔄 Workflow Recomendado

### 1. Desarrollo diario
```bash
# Terminal 1: Servidor de desarrollo
npm run dev

# Terminal 2: Linter en watch mode
npm run lint -- --watch
```

### 2. Antes de commit
```bash
npm run lint
npm run build
git add .
git commit -m "descripción del cambio"
```

### 3. Antes de deploy
```bash
npm run build
npm run start
# Verificar en http://localhost:3000
# Si todo está bien:
vercel --prod
```

---

## 📚 Recursos Útiles

### Documentación
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- MagicUI: https://magicui.design/docs

### Herramientas
- Tailwind Play: https://play.tailwindcss.com/
- Color Picker: https://coolors.co/
- SVG Editor: https://svgedit.netlify.app/

---

## 🆘 Troubleshooting

### Error: Module not found
```bash
npm install
rm -rf .next
npm run dev
```

### Error: Port 3000 already in use
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Error: TypeScript errors
```bash
npx tsc --noEmit
# Revisar errores y corregir
```

### Error: Tailwind classes not working
```bash
# Verificar tailwind.config.ts
# Verificar que globals.css tenga @tailwind directives
npm run dev
```

---

**Última actualización:** 22 de Febrero, 2026  
**Proyecto:** ABAX Health Service Landing Page
