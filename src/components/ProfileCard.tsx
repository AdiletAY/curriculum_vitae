import { FC } from "react";
import { DownloadIcon } from "@radix-ui/react-icons";

import ContactButtons from "./ContactButtons.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.ts";


interface ProfileCardProps {
    name: string;
    jobTitle: string;
    avatarUrl: string;
    buttonLabel: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, jobTitle, avatarUrl,  buttonLabel  }) => {
    return (
        <Card className='w-[350px] sticky top-0'>
            <CardHeader className="flex flex-col items-center justify-center">
                <Avatar className='w-24 h-24'>
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>avatar</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-center text-xl text-gray-900 dark:text-white">{name}</CardTitle>
                <CardDescription className="text-center text-base">{jobTitle}</CardDescription>
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
