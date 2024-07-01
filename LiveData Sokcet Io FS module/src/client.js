const socket = io();

socket.on('file-changed', (data) => {
    document.getElementById('file-content').textContent = data;
});
