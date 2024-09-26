import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

interface ObjectiveCardProps {
  title: string;
  introduction: string;
  description: string;
}

const ObjectiveCard: FC<ObjectiveCardProps> = ({ title, introduction, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="text-2xl font-black text-gray-900 dark:text-white">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {introduction}
        </p>
        <p className="my-3 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ObjectiveCard;
