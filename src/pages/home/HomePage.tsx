import ProfileCard from "@/components/ProfileCard";
import ObjectiveCard from "@/components/ObjectiveCard";
import { objectiveData } from "@/data/objective";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

const HomePage = () => {
    return (
        <div className="container">
            <div className='flex justify-between items-start gap-5'>
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