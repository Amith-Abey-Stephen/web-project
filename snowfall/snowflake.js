document.addEventListener('DOMContentLoaded', function() {
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = Math.random() * 2 + 1 + 's'; // Vary animation duration
        document.body.appendChild(snowflake);

        snowflake.addEventListener('animationiteration', () => {
            // Reset position when snowflake goes off-screen
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
        });
    }
});
