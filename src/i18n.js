// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    // load translation using http -> see /public/locales
    // learn more: <https://github.com/i18next/i18next-http-backend>
    .use(HttpApi)
    // detect user language
    // learn more: <https://github.com/i18next/i18next-browser-languageDetector>
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: <https://www.i18next.com/overview/configuration-options>
    .init({
        supportedLngs: ['en', 'es'], // Add languages you support
        fallbackLng: 'en', // Fallback language if detected is not supported
        debug: process.env.NODE_ENV === 'development', // Enable debug output in development

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
            format: (value, format, lng) => {
                if (format === 'uppercase') return value.toUpperCase();
                if (format === 'year') return new Date(value).getFullYear();
                // Add other custom formats if needed
                return value;
            }
        },

        detection: {
            // order and from where user language should be detected
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage'], // cache user language preference
        },

        backend: {
            // path where resources get loaded from
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        react: {
            useSuspense: true, // Use React Suspense for loading translations
        },
    });

export default i18n;
