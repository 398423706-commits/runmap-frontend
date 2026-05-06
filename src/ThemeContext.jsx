import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const themes = {
  green: {
    name: 'green',
    primary: '#22c55e',
    primaryDark: '#16a34a',
    primaryLight: '#4ade80',
    bg: '#f0fdf4',
  },
  blue: {
    name: 'blue',
    primary: '#3b82f6',
    primaryDark: '#1d4ed8',
    primaryLight: '#60a5fa',
    bg: '#f0f9ff',
  },
  purple: {
    name: 'purple',
    primary: '#a855f7',
    primaryDark: '#7e22ce',
    primaryLight: '#c084fc',
    bg: '#faf5ff',
  },
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('green')

  useEffect(() => {
    const saved = localStorage.getItem('appTheme')
    if (saved && themes[saved]) {
      setCurrentTheme(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('appTheme', currentTheme)
    const theme = themes[currentTheme]
    document.documentElement.style.setProperty('--theme-primary', theme.primary)
    document.documentElement.style.setProperty('--theme-primary-dark', theme.primaryDark)
    document.documentElement.style.setProperty('--theme-primary-light', theme.primaryLight)
    document.documentElement.style.setProperty('--theme-bg', theme.bg)
  }, [currentTheme])

  const switchTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
