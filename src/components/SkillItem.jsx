import * as Icons from '../utils/icons';

export function SkillItem({ skill }) {
  const IconComponent = Icons[skill.icon];

  return (
    <div className="flex items-center gap-1 py-1 px-2 rounded-lg border">
      {IconComponent && <IconComponent stroke={2} />}
      <span>{skill.name}</span>
    </div>
  );
}
