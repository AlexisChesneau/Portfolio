import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content-Security-Policy (GitHub Pages ne permet pas d'envoyer des en-têtes HTTP,
// on la place donc dans une balise <meta>). Elle n'autorise que les ressources
// servies par le site lui-même : aucun script, iframe ou formulaire tiers.
// Injectée uniquement au build, car le serveur de dev de Vite utilise des scripts inline.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ')

const cspPlugin = () => ({
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    {
      tag: 'meta',
      attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP },
      injectTo: 'head-prepend',
    },
  ],
})

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), cspPlugin()],
})
