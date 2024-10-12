import React from 'react';
import { Separator } from "@/components/ui/separator.tsx";
import LanguageItem from "@/components/profile/LanguageItem.tsx";

type Language = {
    languageIcon: React.ReactNode;
    languageName: string;
    proficiencyLevel: string;
};

type LanguageListProps = {
    languages: Language[];
    sectionTitle?: string;
};

const LanguageList = ({ languages, sectionTitle }: LanguageListProps) => {
    return (
        <div>
            <Separator className="my-6" />
            {sectionTitle && (
                <p className="text-xs text-start text-muted-foreground font-normal">
                    {sectionTitle}
                </p>
            )}
            {languages.map(({ languageIcon, languageName, proficiencyLevel }, index) => (
                <LanguageItem
                    key={index}
                    languageIcon={languageIcon}
                    languageName={languageName}
                    proficiencyLevel={proficiencyLevel}
                />
            ))}
        </div>
    );
};

export default LanguageList;
