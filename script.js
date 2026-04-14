window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const accountBtn = document.getElementById('accountBtn');

    if (isLoggedIn === 'true' && accountBtn) {
        accountBtn.innerText = "Log Out";
        accountBtn.onclick = function() {
            localStorage.removeItem('isLoggedIn');
            location.reload(); 
        };
    }
};
