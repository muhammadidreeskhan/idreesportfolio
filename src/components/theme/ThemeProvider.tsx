import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "next-themes"

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  themes: ["light", "dark", "system"],
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, themes } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProviderContext.Provider
      value={{
        theme: (theme as Theme) || defaultTheme,
        setTheme,
        themes: themes as Theme[],
      }}
      {...props}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
