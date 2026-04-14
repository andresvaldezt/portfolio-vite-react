import { IconBriefcase } from '@tabler/icons-react';
import { JobCard } from './JobCard';
import jobsData from '../data/jobsData.json';

export function JobExperience() {
    return (
        <section id='experience' className='work-experience scroll-mt-60 sm:scroll-mt-24 pb-4 border-b light:border-b-gray-700/20 border-b-amber-50/20'>
            <header>
                <h2 className="flex items-center gap-2 text-4xl font-bold mb-4 text-amber-50 light:text-gray-700">
                    <IconBriefcase stroke={2} size={48}/>
                    Work Experience
                </h2>
            </header>
            {jobsData.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </section>
    );
}