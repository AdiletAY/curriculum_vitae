import React from 'react';
import {Separator} from "@/components/ui/separator.tsx";
import InfoItem from "@/components/profile/InfoItem.tsx";

type InfoData = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

type InfoListProps = {
    infoData: InfoData[];
    sectionTitle?: string;
}

const InfoList = ({infoData, sectionTitle}: InfoListProps) => {
    return (
        <div>
            <Separator className="my-6"/>
            {sectionTitle &&
                <p className="text-xs text-start text-muted-foreground font-normal">{sectionTitle}</p>
            }
            {infoData.map(({icon, label, value}, index) => (
                <InfoItem key={index} icon={icon} label={label} value={value}/>
            ))}
        </div>
    );
};

export default InfoList;