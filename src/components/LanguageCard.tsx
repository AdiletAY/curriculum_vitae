import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";

interface Language {
  name: string;
  proficiency: string; 
  rating: number; 
}

interface LanguageCardProps {
  languages: Array<Language>;
}

const LanguageCard: FC<LanguageCardProps> = ({ languages }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-4 border-b border-gray-200 dark:border-gray-700">
        <CardTitle>
          <span className="text-2xl font-black text-gray-900 dark:text-white">Languages</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {languages.map((language, index) => (
          <div key={index} className="mb-4 flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{language.name}</p>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < language.rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'} ms-1`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ms-2">
                {language.proficiency}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LanguageCard;
