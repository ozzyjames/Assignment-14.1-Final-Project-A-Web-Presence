document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const memeImage = document.getElementById('memeImage');
    const audioPlayer = document.getElementById('audioPlayer');

    let moveInterval;

    function enableStartButton() {
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function enableStopButton() {
        startButton.disabled = true;
        stopButton.disabled = false;
    }

    function moveMeme() {
        const maxX = window.innerWidth - memeImage.width;
        const maxY = window.innerHeight - memeImage.height;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        memeImage.style.position = 'absolute';
        memeImage.style.left = `${randomX}px`;
        memeImage.style.top = `${randomY}px`;
    }

    function startMoving() {
        enableStopButton();
        audioPlayer.play();
        moveInterval = setInterval(moveMeme, 1000);
    }

    function stopMoving() {
        enableStartButton();
        clearInterval(moveInterval);
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }

    startButton.addEventListener('click', startMoving);
    stopButton.addEventListener('click', stopMoving);

    enableStartButton();
});