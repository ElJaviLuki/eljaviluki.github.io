// src/utils/eventBus.js
const eventBus = {
    on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event, callback) {
        // Ensure the callback is the same function instance for removal
        document.removeEventListener(event, callback);
    },
};
export default eventBus;