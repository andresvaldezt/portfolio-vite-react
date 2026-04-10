import { IconSchool, IconUserCircle, IconMapPin, IconMail, IconLanguage, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBriefcase  } from '@tabler/icons-react';
import flag  from '../assets/Flag_of_Mexico.svg.png'; 
import {JobExperience} from '../components/JobExperience';


export default function HomePage (){
    const linkStyles = 'rounded-full p-1 font-medium hover:shadow-lg/30 shadow-white hover:text-amber-400 light:hover:shadow-lg/30 light:shadow-black light:hover:text-purple-400 transition-all ease-in-out'

    return (
    <main className="index-main" >
        <div className="flex flex-col gap-12 mx-auto px-4 py-6 sm:px-6 md:px-8 max-w-7xl">
            <section className="port-about flex flex-wrap lg:gap-6 pb-8 border-b light:border-b-gray-700/20 border-b-amber-50/20">
                <div className="flex-none lg:w-8/12 w-full light:text-black">
                    <h2 className="flex items-center gap-2 text-4xl font-bold mb-4">
                        <IconUserCircle stroke={2} size={48}/>
                        About Me
                    </h2>
                    <p className='mb-4 light:text-black'>
                        Computer Science Engineering graduate from Universidad Politécnica de Sinaloa with a deep passion for the IT ecosystem. I am particularly fascinated by web programming and the continuous evolution of modern Front-End technologies.
                    </p>
                    <p>
                        As an aspiring Front-End Developer, I possess a strong foundation in JavaScript (ES6+) and an extensive focus on the React ecosystem. I am dedicated to building responsive, high-performance web experiences while staying at the forefront of UI/UX trends and industry best practices.
                    </p>
                    <h3 className="flex items-center gap-2 text-2xl font-bold my-4">
                        <IconSchool stroke={2} size={32}/>
                        Education
                    </h3>
                    <h5 className='font-medium text-lg sm:text-xl light:text-slate-700 text-slate-100'>Computer Science Engineering at Universidad Politécnica de Sinaloa</h5>
                    <p className='light:text-gray-700 text-slate-300'>Sinaloa, Mexico</p>
                    <p className='light:text-gray-500 text-slate-400'>2010 – 2014</p>
                    <h5 className="text-2xl font-bold flex items-center gap-2 mb-4 mt-4">
                        Socials
                    </h5>
                    <div className='flex flex-row items-center gap-2 mb-4 lg:sm:mb-0 sm:mb-4 md:mb-4'>
                        <a target="_blank" href="https://github.com/andresvaldezt/" className={linkStyles}><IconBrandGithub stroke={2} size={32}/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/andresvaldeztirado/" className={linkStyles}><IconBrandLinkedin stroke={2} size={32}/></a>
                        <a target="_blank" href="https://www.instagram.com/antrick_/" className={linkStyles}><IconBrandInstagram stroke={2} size={36}/></a>
                    </div>
                </div>
                <div className='grow self-start flex flex-col gap-6 rounded-md px-10 py-10 font-medium bg-gray-600 light:bg-white light:text-black light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]'>
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
                            <a className="underline light:text-gray-700 text-slate-200 light:hover:text-slate-900 hover:text-slate-300 " href="mailto:andresvaldezt@gmail.com">
                                andres.valdez.t@gmail.com
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
            <JobExperience></JobExperience>
        </div>
    </main>
    )
}