import { IconCodeCircle2, IconMoonStars, IconMenu2, IconSun  } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { navbarLinks } from '../data/navbarLinks';

export function Header(){
    const linkStyles = 'rounded-md px-3 py-2 font-medium hover:shadow-lg/30 shadow-white hover:text-amber-400 light:hover:shadow-lg/30 light:shadow-black light:hover:text-purple-400 transition-all ease-in-out'

    return(
        <nav className="px-2 py-4 port-header sticky top-0 z-50 mb-10 sm:flex sm:items-center sm:justify-between shadow-lg/10 bg-black light:bg-white shadow-white light:shadow-black text-white light:text-black">
            <section className='flex justify-between'>
                <a href="/" className='no-underline'>
                    <h1 className="port-header-icon text-xl font-semibold">
                        <IconCodeCircle2 stroke={2}/>
                        Andrés Valdez
                    </h1>
                </a>
                <section className='sm:hidden flex gap-4'>
                    <button>
                        <IconMenu2 stroke={2} />
                    </button>
                    <ThemeButton></ThemeButton>
                </section>
                
            </section>
            <section className='flex flex-col items-start sm:flex-row sm:items-center'>
                <div>
                    <ul className='flex flex-col items-start no-underline my-4 gap-2 sm:flex-row sm:m-0'>
                        {
                            navbarLinks.map((item) => (
                                <li key={item.id}>
                                    <a className={linkStyles} href={item.url}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='hidden sm:block'>
                    <ThemeButton></ThemeButton>
                </div>
                
            </section>
        </nav>
    )
}

const ThemeButton = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () =>{
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        document.documentElement.classList.toggle("light", newTheme === "light")
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || "dark"
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle("light", storedTheme === "light")
        }
    }, [])

    return(
        <button onClick={toggleTheme} className="rounded-full p-2 shadow-lg/30 hover:shadow-lg/50 shadow-amber-100 hover:shadow-amber-400 hover:text-amber-400 light:shadow-gray-400 light:text-black light:hover:shadow-purple-400 cursor-pointer light:hover:text-purple-400 transition-all ease-in-out">
            {theme === 'dark' ? <IconSun stroke={2} /> : <IconMoonStars stroke={2} />}
        </button>
    ) 
}