#!/bin/bash

# ABAX Landing - Quick Start Script
# Este script instala las dependencias y verifica la instalación

echo "🏥 ABAX Health Service - Landing Page Setup"
echo "============================================"
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json no encontrado"
    echo "Por favor ejecuta este script desde el directorio raíz del proyecto"
    exit 1
fi

echo "📦 Instalando dependencias..."
npm install

echo ""
echo "✅ Dependencias instaladas!"
echo ""

echo "📋 Verificando archivos críticos..."

# Verificar archivos importantes
files=(
    "lib/utils.ts"
    "app/components/magicui/blur-fade.tsx"
    "app/components/magicui/bento-grid.tsx"
    "app/components/magicui/animated-grid-pattern.tsx"
    "app/components/magicui/orbiting-circles.tsx"
    "app/components/HexagonPattern.tsx"
    "app/components/DiagonalStripes.tsx"
    "public/assets/logo-abax.png"
    "public/assets/header-top.jpg"
    "public/assets/header-bottom.jpg"
)

all_present=true
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file (FALTANTE)"
        all_present=false
    fi
done

echo ""

if [ "$all_present" = true ]; then
    echo "✅ Todos los archivos están presentes!"
else
    echo "⚠️  Algunos archivos están faltantes. Revisa la instalación."
fi

echo ""
echo "🎨 Paleta de colores ABAX:"
echo "  • Alice Blue:    #D9E4F0"
echo "  • Glaucous:      #5178A7"
echo "  • Baltic Blue:   #275891"
echo "  • Platinum:      #F6F9FB"
echo "  • Baltic Blue 2: #356092"
echo ""

echo "🚀 Para iniciar el servidor de desarrollo:"
echo "   npm run dev"
echo ""

echo "📄 Páginas disponibles:"
echo "   • Home:      http://localhost:3000/"
echo "   • Servicios: http://localhost:3000/servicios"
echo "   • Clientes:  http://localhost:3000/clientes"
echo "   • Alianzas:  http://localhost:3000/alianzas"
echo "   • Nosotros:  http://localhost:3000/nosotros"
echo "   • Contacto:  http://localhost:3000/contacto"
echo ""

echo "📧 Contacto configurado:"
echo "   • comercial@abaxhealthservice.com"
echo "   • abaxhealthservice@gmail.com"
echo ""

echo "✨ ¡Listo para comenzar!"
