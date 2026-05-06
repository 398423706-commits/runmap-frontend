import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './ThemeContext'
import { catMonitor } from './utils/cat'
import './index.css'
import App from './App.jsx'

// 初始化 CAT 监控
catMonitor.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
