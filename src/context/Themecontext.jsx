import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    // Cargar tema al montar
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(storedTheme);
        document.documentElement.classList.toggle('light', storedTheme === 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('light', newTheme === 'light');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook personalizado para usar el tema
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe ser usado dentro de ThemeProvider');
    }
    return context;
}