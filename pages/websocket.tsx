import { useEffect } from 'react';

function generateRandomId(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

const WebSocketComponent = () => {
    let clientId = generateRandomId(9)
    useEffect(() => {
    }, [])
    const socket = new WebSocket(`ws://localhost:8081/ws?clientId=${clientId}`);

    // Create a WebSocket connection
    // Event listeners for WebSocket events
    socket.addEventListener('open', (event: any) => {
        console.log('WebSocket connection opened:', event);
        // Send a message when the connection is open
        socket.send('Hello, WebSocket!');
    });

    socket.addEventListener('message', (event: { data: any; }) => {
        console.log('WebSocket message received:', event.data);
    });

    socket.addEventListener('close', (event: any) => {
        console.log('WebSocket connection closed:', event);
    });

    socket.addEventListener('error', (event: any) => {
        console.error('WebSocket error:', event);
    });


    <div>WebSocket Component</div>;
};

export default WebSocketComponent;
