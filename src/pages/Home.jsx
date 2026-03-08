import { IconUserCircle, IconMapPin, IconMail, IconLanguage, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBriefcase  } from '@tabler/icons-react';
import flag  from '../assets/Flag_of_Mexico.svg.png'; 

export default function HomePage (){
    return (
    <main className="index-main">
        <div className="flex flex-col gap-12 mx-auto px-4 py-6 sm:px-6 md:px-8 max-w-7xl">
            <section className="port-about flex flex-wrap lg:gap-6 pb-8">
                <div className="flex-none lg:w-8/12 w-full">
                    <h2 className="flex items-center gap-2 text-4xl font-bold mb-4">
                        <IconUserCircle stroke={2} size={48}/>
                        About Me
                    </h2>
                    <p className='mb-4'>
                        Computer Science Engineering graduate from Universidad Politécnica de Sinaloa with a deep passion for the IT ecosystem. I am particularly fascinated by web programming and the continuous evolution of modern Front-End technologies.
                    </p>
                    <p>
                        As an aspiring Front-End Developer, I possess a strong foundation in JavaScript (ES6+) and an extensive focus on the React ecosystem. I am dedicated to building responsive, high-performance web experiences while staying at the forefront of UI/UX trends and industry best practices.
                    </p>
                    <h5 className="text-2xl font-bold flex items-center gap-2 mb-4 mt-4">
                        Socials
                    </h5>
                    <div className='flex flex-row items-center gap-2'>
                        <IconBrandGithub stroke={2} size={32}/>
                        <IconBrandLinkedin stroke={2} size={32}/>
                        <IconBrandInstagram stroke={2} size={36}/>
                    </div>
                </div>
                <div className='grow flex flex-col gap-6 rounded-md px-3 py-2 font-medium bg-gray-700'>
                    <div className='flex flex-col gap-2'>
                        <h5 className="text-2xl font-bold flex items-center gap-2">
                            <IconMapPin stroke={2} />
                            Location
                        </h5>
                        <p className='flex items-center gap-2'>
                            <img src={flag} className="flag" alt="mexico flag" width={24} />
                            <span>Guadalajara, México</span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h5 className="text-2xl font-bold flex items-center gap-2">
                            <IconMail stroke={2} />
                            Email
                        </h5>
                        <p className='flex items-center gap-2'>
                            <a className="underline dark:text-slate-200 dark:hover:text-slate-300 text-slate-700 hover:text-slate-900" href="mailto:andresvaldezt@gmail.com">
                                andresvaldezt@gmail.com
                            </a>
                        </p>
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <h5 className="text-2xl font-bold flex items-center gap-2">
                            <IconLanguage stroke={2} />
                            Languages
                        </h5>
                        <p>Spanish: Native</p>
                        <p>English: Medium / Advanced</p>
                    </div>
                </div>
            </section>
            <section className='work-experience'>
                <h2 className="flex items-center gap-2 text-4xl font-bold mb-4">
                    <IconBriefcase stroke={2} size={48}/>
                    Work Experience
                </h2>
            </section>
        </div>
    </main>
    )
}