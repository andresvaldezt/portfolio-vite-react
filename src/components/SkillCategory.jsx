import { SkillItem } from './SkillItem';

export function SkillCategory({ category }) {
  return (
    <div className="rounded-md overflow-hidden bg-gray-600 light:bg-white light:shadow-[0px_4px_16px_rgb(0,0,0,0.2)] shadow-[0px_4px_16px_rgba(0,0,0,0.2)]">
      <div className="bg-amber-400 light:bg-purple-400 text-inverted text-center py-2">
        <h5 className="text-1/4 sm:text-lg text-black">
          <strong>{category.category}</strong>
        </h5>
      </div>
      <div className="p-4 light:text-black">
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
