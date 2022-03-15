import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as resources from '../locale';

const options = {
    order: ['path', 'querystring', 'navigator'],
    lookupQuerystring: 'lng',
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        detection: options,
        resources,
        keySeparator: false, // we do not use keys in form messages.welcome
        fallbackLng: 'en',
        supportedLngs: Object.keys(resources),
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export { resources };
export default i18n;
