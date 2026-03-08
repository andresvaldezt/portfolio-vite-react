import { IconCodeCircle2Filled, IconMoonStars } from '@tabler/icons-react';

export function Header(){

    return(
        <header className="port-header shadow-lg/10 shadow-white">
            <div className='flex justify-between items-center px-6 w-full max-w-7xl mx-auto'>
                <div>
                    <a href="/" style={{textDecoration: 'none'}}>
                        <h1 className="port-header-icon text-xl font-semibold" style={{color: 'white'}}>
                            <IconCodeCircle2Filled />
                            Andrés Valdez
                        </h1>
                    </a>
                </div>
                <div>
                    <nav className='hidden lg:flex items-center ms-auto'>
                        <a className='rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white' href="/">About</a>
                        <a className='rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white' href="/">Work Experience</a>
                        <a className='rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white' href="/">Projects</a>
                        <a className='rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white' href="/">Resume</a>
                        |
                        <HeaderUserButton></HeaderUserButton>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const HeaderUserButton = () => {

    return(
        <button className="dark-mode rounded-md px-3 py-2 font-medium hover:bg-gray-700 hover:text-white'">
            <IconMoonStars stroke={2} />
        </button>
    ) 
}