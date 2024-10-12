import {DownloadIcon} from "@radix-ui/react-icons";

import {Button} from "@/components/ui/button.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card.tsx";
import EmailIcon from "@/components/icons/EmailIcon.tsx";
import PhoneIcon from "@/components/icons/PhoneIcon.tsx";
import GitHubIcon from "@/components/icons/GitHubIcon.tsx";
import InfoList from "@/components/profile/InfoList.tsx";
import LanguageList from "@/components/profile/LanguageList.tsx";
import GbFlagIcon from "@/components/icons/flags/GBFlagIcon.tsx";

const languages = [
    {
        languageIcon: <GbFlagIcon />,
        languageName: "English",
        proficiencyLevel: "native",
    },
    {
        languageIcon: <GbFlagIcon />,
        languageName: "Russian",
        proficiencyLevel: "basics",
    },
];

const contactData = [
    {
        icon: <EmailIcon/>,
        label: "Email",
        value: "adiletalpysbay@gmail.com",
    },
    {
        icon: <PhoneIcon/>,
        label: "Phone",
        value: "+7 747 355 6979",
    },
    {
        icon: <GitHubIcon/>,
        label: "Email",
        value: "adiletalpysbay@gmail.com",
    },
];

type ProfileCardProps = {
    name: string;
    jobTitle: string;
    avatarUrl: string;
    buttonLabel: string;
}

const ProfileCard = ({name, jobTitle, avatarUrl, buttonLabel}: ProfileCardProps) => {
    return (
        <Card className='w-full xl:w-1/3 xl:sticky xl:top-0 p-2'>
            <CardHeader className="flex flex-col">
                <Avatar className='w-20 h-20 ml-4'>
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>avatar</AvatarFallback>
                </Avatar>
                <div>
                    <p className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{name}</p>
                    <p className="text-base text-muted-foreground dark:text-white">{jobTitle}</p>
                </div>
                <p>First rule of coding: If it works don't touch it</p>
            </CardHeader>
            <CardContent className="text-center">
                <InfoList infoData={contactData} sectionTitle="Personal Info" />
                <LanguageList languages={languages} sectionTitle="Languages" />
            </CardContent>
            <CardFooter className="flex justify-center items-center">
                    <Button className="w-1/3 xl:w-full" variant="ghost">
                        <DownloadIcon className="mr-2 h-4 w-4" /> {buttonLabel}
                    </Button>
            </CardFooter>
        </Card>
    );
};

export default ProfileCard;
