import SkillCard from "@/components/SkillCard.tsx";
import ProfileCard from "@/components/profile/ProfileCard.tsx";
import ObjectiveCard from "@/components/ObjectiveCard.tsx";
import WorkExperienceCard from "@/components/WorkExperienceCard.tsx";

import {objectiveData} from "@/data/objective.ts";
import {skills} from "@/data/skills.ts";

const HomePage = () => {
    return (
        <div className="w-4/5 mx-auto">
            <div className='flex flex-col xl:flex-row justify-between items-start gap-2'>
                <ProfileCard
                    name="Adilet Alpysbay"
                    jobTitle="Python Backend Developer"
                    avatarUrl="https://github.com/shadcn.png"
                    buttonLabel="Download CV"
                />

                <div className='w-full flex flex-col gap-5'>
                    <ObjectiveCard
                        title={objectiveData?.title}
                        introduction={objectiveData?.introduction}
                        description={objectiveData?.description}
                    />

                    <WorkExperienceCard/>
                    <SkillCard skills={skills}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;