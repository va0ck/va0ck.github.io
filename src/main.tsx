import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import App from './app/AppLayout'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <StrictMode>
      {/* DefaultTheme is system. light | dark */}
      <ThemeProvider defaultTheme='light'>
        <App/>
      </ThemeProvider>
    </StrictMode>
  </HashRouter>
)
