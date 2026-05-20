window.addEventListener('load', function() {
    setTimeout(function() {
        const splashScreen = document.getElementById('splashScreen');
        if (splashScreen) {
            splashScreen.classList.add('hide');
            setTimeout(function() {
                splashScreen.style.display = 'none';
            }, 800);
        }
    }, 2000);
});