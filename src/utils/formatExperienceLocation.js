/** Avoid "Remote - Remote" when mode and place label are the same (e.g. fully remote roles). */
export function formatExperienceLocation(locationMode, location) {
    const mode = locationMode?.trim() ?? '';
    const place = location?.trim() ?? '';
    if (!place) return '';
    if (!mode || mode.toLowerCase() === place.toLowerCase()) {
        return place;
    }
    return `${mode} - ${place}`;
}
