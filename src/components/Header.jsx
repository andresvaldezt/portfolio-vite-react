import { IconCodeCircle2, IconMoonStars, IconSun  } from '@tabler/icons-react';
import { useState } from 'react';

export function Header(){
    const linkStyles = 'rounded-md px-3 py-2 font-medium hover:shadow-lg/30 shadow-white hover:text-amber-400 light:hover:shadow-lg/30 light:shadow-black light:hover:text-purple-400 transition-all ease-in-out'

    return(
        <header className="port-header sticky top-0 z-50 mb-10 shadow-lg/10 bg-black light:bg-white shadow-white light:shadow-black text-white light:text-black">
            <div className='flex justify-between items-center px-6 w-full max-w-7xl mx-auto'>
                <div>
                    <a href="/" className='no-underline'>
                        <h1 className="port-header-icon text-xl font-semibold">
                            <IconCodeCircle2 stroke={2}/>
                            Andrés Valdez
                        </h1>
                    </a>
                </div>
                <div>
                    <nav className='hidden lg:flex items-center ms-auto no-underline'>
                        <a className={linkStyles} href="/">About</a>
                        <a className={linkStyles} href="/">Work Experience</a>
                        <a className={linkStyles} href="/">Projects</a>
                        <a className={linkStyles} href="/">Resume</a>
                        |
                        <ThemeButton></ThemeButton>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const ThemeButton = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () =>{
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        document.documentElement.classList.toggle("light", newTheme === "light")
    }

    return(
        <button onClick={toggleTheme} className="rounded-full p-2  shadow-lg/30 hover:shadow-lg/50 shadow-amber-100 hover:shadow-amber-400 hover:text-amber-400 light:shadow-gray-400 light:text-black light:hover:shadow-purple-400 cursor-pointer light:hover:text-purple-400 transition-all ease-in-out">
            {theme === 'dark' ? <IconSun stroke={2} /> : <IconMoonStars stroke={2} />}
        </button>
    ) 
}