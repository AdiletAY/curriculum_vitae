import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface SkillCardProps {
  skills: Array<string>;
}

const SkillCard: FC<SkillCardProps> = ({ skills }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-2xl font-black text-gray-900 dark:text-white">
            Skills
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
