/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Isso gera arquivos estáticos
  basePath: '/Calculadora-Next',
  images: {
    unoptimized: true, // Necessário para deploy estático
  },
  trailingSlash: true, // Recomendado para GitHub Pages
}

module.exports = nextConfig