async function fetchHTML() {
    try {
        const response = await fetch('http://192.168.1.4/', {
            mode: 'cors', // Asegúrate de que el servidor permita CORS
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const html = await response.text();
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('Error fetching HTML:', error);
        document.getElementById('content').innerText = 'Error al obtener el contenido.';
    }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('ServiceWorker registration failed:', error);
            });
    });
}

fetchHTML();

