import * as Icons from '../utils/icons'

export function Skills(){
    return(
        <section id='skills' className='scroll-mt-60 mb-4 pb-4'>
            <header>
                <h2 className="flex items-center gap-2 text-4xl font-bold mb-4 text-amber-50 light:text-gray-700">
                    <Icons.IconSettingsCode stroke={2} size={48}/>
                    Main Skills
                </h2>
            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="rounded-md overflow-hidden bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]">
                        <div className="bg-amber-400 light:bg-purple-400 text-inverted text-center py-2">
                            <h5 className="text-1/4 sm:text-lg text-black">
                                <strong>Web Design</strong>
                            </h5>
                        </div>
                        <div className="p-4 light:text-black">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandHtml5 stroke={2} />
                                    <span>HTML</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandCss3 stroke={2} />
                                    <span>CSS</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandSass stroke={2} />
                                    <span>SCSS/SASS</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandBootstrap stroke={2} />
                                    <span>Bootstrap</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandTailwind stroke={2} />
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]">
                        <div className="bg-amber-400 light:bg-purple-400 text-inverted text-center py-2">
                            <h5 className="text-1/4 sm:text-lg text-black">
                                <strong>JavaScript</strong>
                            </h5>
                        </div>
                        <div className="p-4 light:text-black">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandJavascript stroke={2} />
                                    <span>ES6+</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandReact stroke={2} />
                                    <span>React</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandReact stroke={2} />
                                    <span>React Router</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconRoute stroke={2} />
                                    <span>Zustand</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandTypescript stroke={2} />
                                    <span>TypeScript</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandNodejs stroke={2} />
                                    <span>Node.js</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandNodejs stroke={2} />
                                    <span>Express.js</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandPnpm stroke={2} />
                                    <span>PNPM</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandNpm stroke={2} />
                                    <span>npm</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconFileTypeJs stroke={2} />
                                    <span>JQuery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]">
                        <div className="bg-amber-400 light:bg-purple-400 text-inverted text-center py-2">
                            <h5 className="text-1/4 sm:text-lg text-black">
                                <strong>PHP</strong>
                            </h5>
                        </div>
                        <div className="p-4 light:text-black">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandPhp stroke={2} />
                                    <span>PHP Native</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandLaravel stroke={2} />
                                    <span>Laravel</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandLaravel stroke={2} />
                                    <span>Laravel Blade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]">
                        <div className="bg-amber-400 light:bg-purple-400 text-inverted text-center py-2">
                            <h5 className="text-1/4 sm:text-lg text-black">
                                <strong>Cloud</strong>
                            </h5>
                        </div>
                        <div className="p-4 light:text-black">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandAzure stroke={2} />
                                    <span>MSFT Azure</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandVercel stroke={2} />
                                    <span>Vercel</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconCloud stroke={2} />
                                    <span>Netlify</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md overflow-hidden bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]">
                        <div className="bg-amber-400 light:bg-purple-400 text-inverted text-center py-2">
                            <h5 className="text-1/4 sm:text-lg text-black">
                                <strong>Other Tools</strong>
                            </h5>
                        </div>
                        <div className="p-4 light:text-black">
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandGit stroke={2} />
                                    <span>Git</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandGithub stroke={2} />
                                    <span>GitHub</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandMysql stroke={2} />
                                    <span>MySQL</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconFlask stroke={2} />
                                    <span>Playwright</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconFlask stroke={2} />
                                    <span>Zod</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandCSharp stroke={2} />
                                    <span>Razor</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandVscode stroke={2} />
                                    <span>VSCode</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconBrandWindows stroke={2} />
                                    <span>Windows</span>
                                </div>
                                <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
                                    <Icons.IconTerminal2 stroke={2} />
                                    <span>Linux(basic command line)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}