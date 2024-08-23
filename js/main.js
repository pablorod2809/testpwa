if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('js/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('ServiceWorker registration failed:', error);
            });
    });
}
