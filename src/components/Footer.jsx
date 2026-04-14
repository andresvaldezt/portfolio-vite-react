import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export function Footer(){
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="text-center py-8 text-gray-400 light:text-gray-600 border-t border-gray-700 light:border-gray-200">
            <div className="mb-6 flex justify-center gap-6">
                <a 
                    href="https://github.com/andresvaldezt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white light:hover:text-black transition-colors"
                >
                    <IconBrandGithub stroke={2} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/andresvaldeztirado/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white light:hover:text-black transition-colors"
                >
                    <IconBrandLinkedin stroke={2} />
                </a>
                <a 
                    href="mailto:andres.valdez.t@gmail.com"
                    className="hover:text-white light:hover:text-black transition-colors"
                >
                    <IconMail stroke={2} />
                </a>
            </div>
            
            <div className="mb-4">
                <p className="text-sm mb-2">Designed & Built by Andrés Valdez</p>
                <p className="text-xs">Made with React, Tailwind & Vite</p>
            </div>
            
            <small>&copy; {currentYear} Andrés Valdez Tirado. All rights reserved.</small>
        </footer>
    )
}