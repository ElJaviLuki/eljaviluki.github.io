// src/utils/urlResolver.js

/**
 * Asynchronously resolves a regional URL based on the user's IP-detected country.
 * This is a client-side only function that makes a network request.
 * @param {string | {default: string, regional: {[countryCode: string]: string}}} urlData
 * @returns {Promise<string>} A promise that resolves to the appropriate URL string.
 */
export const resolveRegionalUrlByIp = async (urlData) => {
    // Fallback for SSR and non-object/string cases.
    if (typeof window === 'undefined' || typeof urlData !== 'object' || !urlData.default) {
        return typeof urlData === 'string' ? urlData : (urlData?.default || '#');
    }

    try {
        const response = await fetch('https://ipinfo.io/country');
        if (!response.ok) {
            // If the API fails, we return the default.
            return urlData.default;
        }

        let countryCode = (await response.text()).trim(); // e.g., "CH"

        // If a regional URL exists for the detected country, we use it.
        if (countryCode && urlData.regional && urlData.regional[countryCode]) {
            return urlData.regional[countryCode];
        }
    } catch (error) {
        console.error("Error fetching IP geolocation:", error);
        // If there's any error (network, ad-blocker...), we return the default.
    }

    // For all other cases, we return the default.
    return urlData.default;
};
