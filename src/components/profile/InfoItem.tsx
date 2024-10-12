import React from 'react';

type InfoItemProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
};

const InfoItem = ({icon, label, value}: InfoItemProps) => {
    return (
        <div className="flex justify-start items-center gap-1 my-4">
            {icon}
            <div className="flex flex-col ml-1">
                <span className="text-xs text-start text-muted-foreground">{label}</span>
                <span className="text-base font-medium text-[#47516B] dark:text-white">{value}</span>
            </div>
        </div>
    );
};

export default InfoItem;
