// Définition des données des produits
const PRODUCTS = [
  {
    id: "p001",
    title: "Figurine Luffy - Premium 25cm",
    price: "42.69€",
    img: "https://m.media-amazon.com/images/I/91ARyK3yMQL._AC_SL1500_.jpg",
    short: "Figurine Monkey D. Luffy de haute qualité — édition limitée.",
    category: "figures",
    affiliate: "https://amzn.to/3Xo8UdW"
  },
  {
    id: "p002",
    title: "Poster Attack on Titan - XXL",
    price: "19.90€",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    short: "Poster AOT grande qualité, papier mat.",
    category: "goodies",
    affiliate: "https://www.amazon.fr/?tag=TA-PLACEHOLDER"
  },
  {
    id: "p003",
    title: "Naruto Uzumaki - Grande Figurine Collector",
    price: "55.35€",
    img: "https://m.media-amazon.com/images/I/81LoVS6XdRL._AC_UF1000,1000_QL80_.jpg",
    short: "27cm Style animé - Collection Grandista Nero Manga Dimensions",
    category: "figures",
    affiliate: "https://amzn.to/4phr4dx"
  },
  {
    id: "p004",
    title: "Figurine Gojo Satoru 22cm",
    price: "27.90€",
    img: "https://m.media-amazon.com/images/I/510ZvrnQ1jL._AC_SL1200_.jpg",
    short: "Détails fins, peinture premium pour fans de Jujutsu Kaisen.",
    category: "figures",
    affiliate: "https://amzn.to/4p8ZoaM"
  }
];

// Fonction pour créer une carte de produit
function productCard(p) {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
        <img src="${p.img}" alt="${p.title}" />
        <div class="card-body">
            <h4>${p.title}</h4>
            <p>${p.short}</p>
            <div class="actions">
                <a class="buy" href="${p.affiliate}" target="_blank" rel="noopener">Voir le prix • ${p.price}</a>
            </div>
        </div>
    `;
    return el;
}

// Fonction pour afficher les produits dans les grilles
function renderHome() {
    const pg = document.getElementById('productsGrid');
    const gg = document.getElementById('goodiesGrid');
    const mg = document.getElementById('mangaGrid');

    if (pg) {
        pg.innerHTML = '';
        PRODUCTS.filter(p => p.category === 'figures' || p.category === 'manga').forEach(p => {
            pg.appendChild(productCard(p));
        });
    }

    if (gg) {
        gg.innerHTML = '';
        PRODUCTS.filter(p => p.category === 'goodies').forEach(p => {
            gg.appendChild(productCard(p));
        });
    }

    if (mg) {
        mg.innerHTML = '';
        PRODUCTS.filter(p => p.category === 'manga').forEach(p => {
            mg.appendChild(productCard(p));
        });
    }
}

// Fonction de recherche des produits
function applySearch() {
    const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    if (!q) { renderHome(); return; }

    const results = PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q)
    );

    const pg = document.getElementById('productsGrid');
    const gg = document.getElementById('goodiesGrid');
    if (pg) { pg.innerHTML = ''; results.forEach(r => { if (r.category !== 'goodies') pg.appendChild(productCard(r)); }); }
    if (gg) { gg.innerHTML = ''; results.forEach(r => { if (r.category === 'goodies') gg.appendChild(productCard(r)); }); }
}

// Écouteurs d'événements pour la recherche
document.addEventListener('DOMContentLoaded', () => {
    renderHome();

    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn) searchBtn.addEventListener('click', applySearch);
    if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') applySearch(); });
});
