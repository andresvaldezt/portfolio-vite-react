export function JobCard({ job }) {
  return (
    <div className='job grow flex flex-col rounded-md p-6 mb-6 bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]'>
      <h5 className='font-medium text-lg sm:text-xl light:text-slate-700 text-slate-100'>
        {job.position} | {job.company}
      </h5>
      <p className='light:text-gray-700 text-slate-300'>{job.location}</p>
      <p className='light:text-gray-500 text-slate-400'>{job.period}</p>
      <p className='italic light:text-gray-700 text-slate-300'>{job.description}</p>
      <ul className='light:text-slate-700 text-slate-100 list-disc ms-5'>
        {job.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}
