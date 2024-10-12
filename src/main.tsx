import './index.css';
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import LanguageProvider from './services/LanguageProvider.tsx';




createRoot(document.getElementById('root')!).render(
        <LanguageProvider>
                <App />
        </LanguageProvider>
)
