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

/* Utility DOM */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* Render catalog on index */
function renderHome() {
  const pg = document.getElementById('productsGrid');
  const gg = document.getElementById('goodiesGrid');
  const mg = document.getElementById('mangaGrid');
  
  console.log('Rendering home...');  // Debug
  
  if (pg) {
    pg.innerHTML = '';
    PRODUCTS.filter(p => p.category === 'figures' || p.category === 'manga').forEach(p => {
      pg.appendChild(productCard(p));
      console.log('Added product to figures or manga grid:', p.title); // Debug
    });
  }

  if (gg) {
    gg.innerHTML = '';
    PRODUCTS.filter(p => p.category === 'goodies').forEach(p => {
      gg.appendChild(productCard(p));
      console.log('Added product to goodies grid:', p.title); // Debug
    });
  }

  if (mg) {
    mg.innerHTML = '';
    PRODUCTS.filter(p => p.category === 'manga').forEach(p => {
      mg.appendChild(productCard(p));
      console.log('Added product to manga grid:', p.title); // Debug
    });
  }
}

/* Create product card element */
function productCard(p) {
  console.log('Creating product card for:', p.title); // Debug
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="product-img" />
    <div class="card-body">
      <h4 class="product-title">${p.title}</h4>
      <p class="product-short">${p.short}</p>
      <div class="actions">
        <a class="buy" href="${p.affiliate}" target="_blank" rel="noopener">Voir le prix • ${p.price}</a>
        <a class="more" href="#" data-id="${p.id}">Détails</a>
      </div>
    </div>`;
  el.querySelector('.more').addEventListener('click', (e) => {
    e.preventDefault();
    openModalProduct(p.id);
  });
  return el;
}

/* Modal product detail */
function openModalProduct(id) {
  const product = PRODUCTS.find(x => x.id === id);
  if (!product) return;
  const modal = document.getElementById('modal');
  const inner = document.getElementById('modalInner');
  inner.innerHTML = `<div style="display:grid;grid-template-columns:260px 1fr;gap:12px;align-items:start">
    <img src="${product.img}" alt="${product.title}" style="width:100%;border-radius:6px"/>
    <div class="product-meta">
      <h2>${product.title}</h2>
      <p style="color:#9fb7d8">${product.short}</p>
      <p class="price">${product.price}</p>
      <div style="margin-top:10px;display:flex;gap:8px">
        <a class="btn buy" href="${product.affiliate}" target="_blank" rel="noopener">Acheter (affilié)</a>
        <a class="btn" href="product.html?pid=${product.id}">Page produit</a>
      </div>
    </div>
  </div>
  <div style="margin-top:14px;color:#9fb7d8;font-size:14px">Conseils achat : vérifie l'authenticité, lis les avis et compare les vendeurs.</div>`;
  modal.classList.remove('hidden');
}

/* Close modal */
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  document.getElementById('modalInner').innerHTML = '';
}

/* Search */
function applySearch() {
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  if (!q) { renderHome(); return; }
  const results = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q));
  const pg = document.getElementById('productsGrid');
  const gg = document.getElementById('goodiesGrid');
  const mg = document.getElementById('mangaGrid');
  
  if (pg) {
    pg.innerHTML = '';
    results.forEach(r => {
      if (r.category !== 'goodies') pg.appendChild(productCard(r));
    });
  }

  if (gg) {
    gg.innerHTML = '';
    results.forEach(r => {
      if (r.category === 'goodies') gg.appendChild(productCard(r));
    });
  }

  if (mg) {
    mg.innerHTML = '';
    results.forEach(r => {
      if (r.category === 'manga') mg.appendChild(productCard(r));
    });
  }
}

/* Init */
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded'); // Debug
  // Render products
  renderHome();

  // Search event
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  
  if (searchBtn) searchBtn.addEventListener('click', applySearch);
  if (searchInput) searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') applySearch();
  });

  // Close modal event
  const closeBtn = document.getElementById('closeModal');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  const modalEl = document.getElementById('modal');
