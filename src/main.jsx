import { createRoot } from 'react-dom/client'
import App from './App'
import "@fontsource/albert-sans"; // Importa toda la familia (puedes limitar los pesos).
import "@fontsource/barlow"; // Importa toda la familia (puedes limitar los pesos).

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
