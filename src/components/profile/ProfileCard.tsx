import { DownloadIcon } from "@radix-ui/react-icons";

import ContactButtons from "./ContactButtons.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import { Card, CardContent,  CardFooter, CardHeader, } from "@/components/ui/card.tsx";


type ProfileCardProps = {
    name: string;
    jobTitle: string;
    avatarUrl: string;
    buttonLabel: string;
}

const ProfileCard = ({ name, jobTitle, avatarUrl,  buttonLabel  }: ProfileCardProps) => {
    return (
        <Card className='w-[350px] sticky top-0 p-2'>
            <CardHeader className="flex flex-col">
                <Avatar className='w-20 h-20 ml-4'>
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>avatar</AvatarFallback>
                </Avatar>
                <div>
                    <p className="mt-3 text-xl font-bold text-gray-900 dark:text-white">{name}</p>
                    <p className="text-base text-muted-foreground dark:text-white">{jobTitle}</p>
                </div>
            </CardHeader>
            <CardContent className="text-center">
                <ContactButtons/>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    <DownloadIcon className="mr-2 h-4 w-4" /> {buttonLabel}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProfileCard;
