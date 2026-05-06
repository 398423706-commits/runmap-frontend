import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './ThemeContext'
import './index.css'
import App from './App.jsx'

// 初始化 CAT 监控
if (typeof window !== 'undefined') {
  window.catWebTrace = {
    logPageView: function(pageName) {
      console.log('[CAT] Page View:', pageName)
    },
    logEvent: function(type, name, duration) {
      console.log('[CAT] Event:', { type, name, duration })
    },
    logError: function(error) {
      console.log('[CAT] Error:', error)
    }
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
