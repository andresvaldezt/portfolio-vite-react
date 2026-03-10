import { IconUserCircle, IconMapPin, IconMail, IconLanguage, IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBriefcase  } from '@tabler/icons-react';
import flag  from '../assets/Flag_of_Mexico.svg.png'; 

export default function HomePage (){
    return (
    <main className="index-main" >
        <div className="flex flex-col gap-12 mx-auto px-4 py-6 sm:px-6 md:px-8 max-w-7xl">
            <section className="port-about flex flex-wrap lg:gap-6 pb-8">
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
                <header>
                    <h2 className="flex items-center gap-2 text-4xl font-bold mb-4 text-amber-50 light:text-gray-700">
                        <IconBriefcase stroke={2} size={48}/>
                        Work Experience
                    </h2>
                </header>
                <div className='job grow flex flex-col rounded-md px-3 py-2 mb-6 light:bg-amber-50 bg-gray-700'>
                    <h5 className='font-medium text-lg sm:text-xl light:text-slate-700 text-slate-100'>UI Developer at e-Quality and TCS: HERBALIFE (Consultant) </h5>
                    <p className='light:text-gray-700 text-slate-300'>Guadalajara, Mexico</p>
                    <p className='light:text-gray-500 text-slate-400'>April 2020 – June 2025</p>
                    <ul className='light:text-slate-700 text-slate-100 list-disc ms-5'>
                        <li>I was part of the Root team for myHerbalife site e-commerce platform for independent distributors. As UI developer I was involved in multiple developments, supporting tools and content for more than 100 countries:</li>
                        <li>Internal tool development for myHerbilife site to register development working sessions helping to manage control versions through multiple development environments.</li>
                        <li>Continuous updates for all the content: menus, banners, widgets… depending on the requirements for every country.</li>
                        <li>Continuous work with content, design, backend and business teams for new web tools and content design implementation.</li>
                        <li>Widget implementation consuming internal APIs from all the different businesses involved in myHerbalife.com project, update support and maintenance.</li>
                        <li>Responsive design implementation.</li>
                        <li>Follow up any activity related to front-end development in multiple projects and solutions.</li>
                        <li>Estimate time and efforts for future tasks and developments.</li>
                        <li>Technical training for new team members.</li>
                        <li>Release version management using Azure services and working closely with DevOps team.</li>
                        <li>Major style update for Register, Login and Profile styles of myHerbalife site, matching the styles of the Herbalife’s new future web platform.</li>
                        <li>Support Bug problem solving for new Herbalife project using React and microservices architecture.</li>
                    </ul>
                </div>
                <div className='job grow flex flex-col rounded-md px-3 py-2 mb-6 bg-gray-700'>
                    <h5 className='font-medium text-lg sm:text-xl dark:text-slate-100 text-slate-700'>Full Stack Developer at HALLMG CONSULTING</h5>
                    <p className='dark:text-slate-300 text-gray-700'>Guadalajara, Mexico</p>
                    <p className='dark:text-slate-400 text-gray-500'>May 2018 – April 2020</p>
                    <ul className='dark:text-slate-100 text-slate-700 list-disc ms-5'>
                        <li>As part of the Development team I collaborated on multiple web projects, all oriented to web systems for Human resources tools for more than 10 companies with different business orientations like education, real state, pharmaceutical, energy and others.</li>
                        <li>Setting up new web development projects using Laravel, Laravel Mix (Webpack), PHP, MySQL, Git and cPanel/Plesk.</li>
                        <li>Implement web designs through programming languages like HTML, CSS, JavaScript, also frameworks and libraries like Bootstrap and jQuery.</li>
                        <li>Responsive design implementation.</li>
                        <li>Constant teamwork with the design and business department analyzing UX and UI requirements to build intuitive interfaces.</li>
                        <li>SEO techniques implementation like sitemaps, site optimization, figuring out what are the best keywords for meta descriptions according to the project.</li>
                        <li>Functional testing, looking at a particular piece of functionality on the websites to ensure it does everything according to the code, usually making use of browser developer tools to debugging and finding out how the page is interpreting the code.</li>
                        <li>Web performance optimizing and minifying CSS. JavaScript and implementing techniques like lazy loading for images.</li>
                        <li>Package installation via NPM (Node Package Manager) and implementation.</li>
                    </ul>
                </div>
                <div className='job grow flex flex-col rounded-md px-3 py-2 mb-6 bg-gray-700'>
                    <h5 className='font-medium text-lg sm:text-xl dark:text-slate-100 text-slate-700'>Web Developer at TATA CONSULTANCY SERVICES (General Electric)  </h5>
                    <p className='dark:text-slate-300 text-gray-700'>Guadalajara, Mexico</p>
                    <p className='dark:text-slate-400 text-gray-500'>April 2015 – December 2017</p>
                    <ul className='dark:text-slate-100 text-slate-700 list-disc ms-5'>
                        <li>Development, maintenance and content administration for web communities and web tools working with Support Central CMS/API’s and entire custom developments.</li>
                        <li>Meetings with the customer three times per week to take notes and analyze requirements, timelines and risks for future developments; keep the customer updated on the current developments and maintenance activities for web communities, tools, forms and databases.</li>
                        <li>Write documentation and support users on how to use data report control tools.</li>
                        <li>Support documentation and help desk teams in multiple solving problem tasks.</li>
                        <li>Technical training for new team members.</li>
                    </ul>
                </div>
            </section>
        </div>
    </main>
    )
}