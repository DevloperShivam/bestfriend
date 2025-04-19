// Check authentication status
document.addEventListener('DOMContentLoaded', () => {
    const isAuthenticated = document.cookie.includes('CF_Authorization');
    
    if (!isAuthenticated) {
        // Redirect to custom login page if not authenticated
        window.location.href = '/login.html';
    } else {
        // Show main content
        document.getElementById('app').style.display = 'block';
    }
});

// Logout functionality
function logout() {
    fetch('/cdn-cgi/access/logout').then(() => {
        window.location.href = '/login.html';
    });
}