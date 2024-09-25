import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimeLine from "./TimeLine";
import { workExperience } from "@/data/workExperience";

const WorkExperienceCard = () => {
  return (
    <Card>
        <CardHeader>
        <CardTitle>
                <span className="text-2xl font-black text-gray-900 dark:text-white">
                    Work experience
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <TimeLine items={workExperience} />
        </CardContent>
    </Card>
  )
}

export default WorkExperienceCard