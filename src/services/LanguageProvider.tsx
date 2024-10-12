import { createContext, useState, ReactNode  } from 'react';

type Language = 'en' | 'ru' | 'kz';

type LanguageContextType = {
    language: Language;
    changeLanguage: (newLanguage: Language) => void;
}

type LanguageProviderProps = {
    children: ReactNode;
}


const LanguageContext = createContext<LanguageContextType | null>(null);


const LanguageProvider = ({children} : LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>('en');

    const changeLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
    };


    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
          {children}
        </LanguageContext.Provider>
      );
}

export default LanguageProvider;