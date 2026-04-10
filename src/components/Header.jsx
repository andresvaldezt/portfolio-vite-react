import { IconCodeCircle2, IconMoonStars, IconMenu2, IconSun  } from '@tabler/icons-react';
import { useTheme } from '../context/Themecontext';
import { navbarLinks } from '../data/navbarLinks';
import { useState } from 'react';

export function Header(){
    const linkStyles = 'rounded-md px-3 py-2 font-medium hover:shadow-lg/30 shadow-black hover:text-amber-400 light:hover:shadow-lg/30 light:shadow-black light:hover:text-purple-400'
    const [open, setOpen] = useState(false)

    return(
        <nav className="px-2 py-4 port-header sticky top-0 z-50 mb-10 sm:flex sm:items-center sm:justify-between shadow-lg/10 bg-gray-600 light:bg-white shadow-black light:shadow-black text-white light:text-black">
            <section className='flex justify-between'>
                <a href="/" className='no-underline'>
                    <h1 className="port-header-icon text-xl font-semibold">
                        <IconCodeCircle2 stroke={2}/>
                        Andrés Valdez
                    </h1>
                </a>
                <section className='sm:hidden flex gap-4'>
                    <button onClick={() => setOpen(!open)}>
                        <IconMenu2 stroke={2} />
                    </button>
                    <ThemeButton></ThemeButton>
                </section>
                
            </section>
            <section className='flex flex-col items-start sm:flex-row sm:items-center'>
                <div className={`w-full sm:w-auto sm:max-h-none sm:overflow-visible overflow-hidden transition-all duration-500 ${!open ? 'max-h-0 sm:max-h-none' : 'max-h-96'}`}>
                    <ul className={`
                        flex flex-col items-start no-underline gap-2
                        sm:flex sm:flex-row sm:opacity-100 sm:translate-y-0 sm:my-0
                        transform transition-all duration-500 ease-out origin-top
                        ${!open ? 'opacity-0 -translate-y-4 my-0' : 'opacity-100 translate-y-0 my-4'} 
                    `}>
                        {
                            navbarLinks.map((item) => (
                                <li key={item.id}>
                                    <a className={linkStyles} href={item.url}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='ml-4 hidden sm:block'>
                    <ThemeButton></ThemeButton>
                </div> 
            </section>
        </nav>
    )
}

const ThemeButton = () => {
    const {theme, toggleTheme} = useTheme()

    return(
        <button onClick={toggleTheme} className="rounded-full p-2 shadow-lg/30 hover:shadow-lg/50 shadow-amber-100 hover:shadow-amber-400 hover:text-amber-400 light:shadow-gray-400 light:text-black light:hover:shadow-purple-400 cursor-pointer light:hover:text-purple-400 transition-all ease-in-out">
            {theme === 'dark' ? <IconSun stroke={2} /> : <IconMoonStars stroke={2} />}
        </button>
    ) 
}