import { IconBriefcase } from '@tabler/icons-react';

export function JobExperience(){
    return(
            <section id='experience' className='work-experience scroll-mt-60 pb-4 border-b light:border-b-gray-700/20 border-b-amber-50/20'>
                <header>
                    <h2 className="flex items-center gap-2 text-4xl font-bold mb-4 text-amber-50 light:text-gray-700">
                        <IconBriefcase stroke={2} size={48}/>
                        Work Experience
                    </h2>
                </header>
                <div className='job grow flex flex-col rounded-md p-6 mb-6 bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]'>
                    <h5 className='font-medium text-lg sm:text-xl light:text-slate-700 text-slate-100'>UI Developer | e-Quality / TCS — Herbalife (Consultant)</h5>
                    <p className='light:text-gray-700 text-slate-300'>Guadalajara, Mexico</p>
                    <p className='light:text-gray-500 text-slate-400'>April 2020 – June 2025</p>
                    <p className='italic light:text-gray-700 text-slate-300'>Core member of the Root team for myHerbalife.com, a global e-commerce platform for independent distributors across 100+ countries.</p>
                    <ul className='light:text-slate-700 text-slate-100 list-disc ms-5'>
                        <li>Developed and maintained UI components and widgets consuming internal APIs across 100+ country markets, ensuring consistent cross-browser rendering and responsive behavior.</li>
                        <li>Led pixel-perfect redesign of the Register, Login, and Profile flows to align with Herbalife's new brand platform, implementing designs from Figma with zero deviation from spec — affecting millions of active users.</li>
                        <li>Built an internal developer tool for myHerbalife.com to register and version-control development sessions across multiple environments, reducing release conflicts.</li>
                        <li>Collaborated weekly with content, design, backend, and business teams to deliver new web features on time, estimated effort and managed task prioritization.</li>
                        <li>Managed frontend release versions using Microsoft Azure services in close coordination with the DevOps team.</li>
                        <li>Provided technical onboarding and training to new team members, reducing ramp-up time.</li>
                        <li>Supported bug resolution for a new Herbalife project built on React and microservices architecture.</li>
                    </ul>
                </div>
                <div className='job grow flex flex-col rounded-md p-6 mb-6 bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]'>
                    <h5 className='font-medium text-lg sm:text-xl light:text-slate-700 text-slate-100'>Full Stack Developer | Hallmg Consulting</h5>
                    <p className='light:text-gray-700 text-slate-300'>Guadalajara, Mexico</p>
                    <p className='light:text-gray-500 text-slate-400'>May 2018 – April 2020</p>
                    <p className='italic light:text-gray-700 text-slate-300'>Built and maintained HR web systems for 10+ client companies across education, real estate, pharma, and energy sectors.</p>
                    <ul className='light:text-slate-700 text-slate-100 list-disc ms-5'>
                        <li>Set up full-stack web projects from scratch using Laravel, PHP, MySQL, Git, and Webpack (Laravel Mix), managing server deployment via cPanel/Plesk.</li>
                        <li>Implemented responsive UIs with HTML5, CSS3, Bootstrap, and jQuery, ensuring cross-device compatibility for all client platforms.</li>
                        <li>Optimized web performance by minifying CSS/JS and implementing lazy loading, improving page load times.</li>
                        <li>Applied SEO best practices — sitemaps, keyword research, and meta optimization — for multiple client sites.</li>
                        <li>Partnered with design and business teams to translate UX/UI requirements into functional, intuitive interfaces.</li>
                    </ul>
                </div>
                <div className='job grow flex flex-col rounded-md p-6 mb-6 bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]'>
                    <h5 className='font-medium text-lg sm:text-xl light:text-slate-700 text-slate-100'>Web Developer | Tata Consultancy Services — General Electric</h5>
                    <p className='light:text-gray-700 text-slate-300'>Guadalajara, Mexico</p>
                    <p className='light:text-gray-500 text-slate-400'>April 2015 – December 2017</p>
                    <p className='italic light:text-gray-700 text-slate-300'>Developed and maintained internal web communities and tools for GE business units using Support Central CMS and custom development.</p>
                    <ul className='light:text-slate-700 text-slate-100 list-disc ms-5'>
                        <li>Developed and maintained multiple web communities, forms, and data-reporting tools for internal GE business teams.</li>
                        <li>Held tri-weekly meetings with client stakeholders to gather requirements, assess risks, and report on development progress.</li>
                        <li>Wrote technical documentation and user guides for data report control tools, supported help desk teams.</li>
                        <li>Trained new team members on internal tools and development standards.</li>
                    </ul>
                </div>
            </section>
    )
}