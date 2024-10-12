import React from 'react';

type LanguageItemProps = {
    languageIcon: React.ReactNode;
    languageName: string;
    proficiencyLevel: string;
};

const LanguageItem = ({ languageIcon, languageName, proficiencyLevel }: LanguageItemProps) => {
    return (
        <div className="flex justify-start items-center gap-1 my-4">
            <div className="mt-1">
                {languageIcon}
            </div>
            <div className="flex flex-col ml-1">
                <span className="text-base font-medium text-[#47516B] dark:text-white">{languageName}</span>
                <span className="text-xs text-start text-muted-foreground">{proficiencyLevel}</span>
            </div>
        </div>
    );
};

export default LanguageItem;
