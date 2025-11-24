import { Icon } from "@iconify/react";
import React from "react";

export default function Skill({ skill }) {
  const [progress, setProgress] = React.useState(0);
  const radius = 40;
  const stroke = 4;
  const circumference = radius * 2 * Math.PI;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, 100);
    return () => clearTimeout(timer);
  }, [skill.level]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg width="100%" height="100%">
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx="50%"
            cy="50%"
          />
          <circle
            stroke="var(--brand-primary)"
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx="50%"
            cy="50%"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1500 transform -rotate-90 origin-center"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon icon={skill.icon} width="32" height="32" />
        </div>
      </div>
      <p className="text-lg font-medium mt-2">{skill.name}</p>
      <p className="text-sm text-gray-600">{progress}%</p>
    </div>
  );
}
