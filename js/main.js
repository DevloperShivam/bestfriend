// Main site functionality
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('main-content')) {
        loadContent();
        setupEventListeners();
    }
});

function loadContent() {
    const content = `
        <header>
            <h1>Just For You</h1>
            <p class="subtitle">All our special moments in one place</p>
            <button onclick="logout()" class="btn logout-btn">
                <i class="fas fa-sign-out-alt"></i> Sign Out
            </button>
        </header>
        
        <main>
            <div class="grid">
                <!-- Cards will be dynamically loaded here -->
            </div>
        </main>
        
        <footer>
            <p>Made with <span class="heart">❤️</span> for you</p>
        </footer>
    `;
    
    document.getElementById('main-content').innerHTML = content;
    loadCards();
}

function loadCards() {
    // This would come from an API in a real implementation
    const cards = [
        {
            title: "Birthday Surprise",
            desc: "Relive your special day",
            image: "assets/birthday.jpg",
            link: "/birthday",
            icon: "fa-birthday-cake"
        },
        // Add other cards
    ];
    
    const grid = document.querySelector('.grid');
    grid.innerHTML = cards.map(card => `
        <div class="card">
            <div class="card-img" style="background-image: url('${card.image}')"></div>
            <div class="card-content">
                <h3 class="card-title">${card.title}</h3>
                <p class="card-desc">${card.desc}</p>
                <a href="${card.link}" class="btn">
                    <i class="fas ${card.icon}"></i> Visit
                </a>
            </div>
        </div>
    `).join('');
}

function setupEventListeners() {
    // Add any event listeners needed
}