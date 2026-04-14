import * as Icons from '../utils/icons';
import { SkillCategory } from './SkillCategory';
import skillsData from '../data/skillsData.json';

export function Skills() {
    return (
        <section id='skills' className='scroll-mt-60 mb-4 pb-4'>
            <header>
                <h2 className="flex items-center gap-2 text-4xl font-bold mb-4 text-amber-50 light:text-gray-700">
                    <Icons.IconSettingsCode stroke={2} size={48}/>
                    Main Skills
                </h2>
            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {skillsData.map((category) => (
                        <SkillCategory key={category.id} category={category} />
                    ))}
                </div>
            </main>
        </section>
    );
}