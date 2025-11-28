/* Simple front-end JS: données mock, rendu catalogue, recherche, modal, pages.
   IMPORTANT: remplace les champs "affiliate" par tes liens d'affiliation (ou ton tag Amazon).
*/

const PRODUCTS = [
  {
    id: "p001",
    title: "Figurine Luffy - Premium 25cm",
    price: "42,69€",
    img: "https://m.media-amazon.com/images/I/91ARyK3yMQL.jpg",
    short: "Figurine Monkey D. Luffy de haute qualité — édition limitée.",
    category: "figure",
    affiliate: "https://www.amazon.fr/?tag=TA-PLACEHOLDER" // <-- METS TON LIEN D'AFFILIATION
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
    title: "Coffret Manga Naruto - Vol.1-10",
    price: "59.00€",
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070c01?q=80&w=800&auto=format&fit=crop",
    short: "Coffret Naruto 1 à 10 — édition standard.",
    category: "manga",
    affiliate: "https://www.amazon.fr/?tag=TA-PLACEHOLDER"
  }
];

const ARTICLES = [
  {
    id: "a1",
    title: "Top 10 figurines One Piece en 2025",
    excerpt: "Les figurines One Piece les plus recherchées cette année, prix & où acheter.",
    content: "<p>Contenu exemple du guide Top 10. Remplace par ton texte SEO.</p>"
  },
  {
    id: "a2",
    title: "Comment repérer les figurines contrefaites",
    excerpt: "Guide rapide pour éviter les contrefaçons et acheter en confiance.",
    content: "<p>Signes distinctifs, packaging, poids et prix à surveiller.</p>"
  }
];

/* Utility DOM */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* Render catalog on index */
function renderHome(){
  const pg = document.getElementById('productsGrid');
  const gg = document.getElementById('goodiesGrid');
  const ag = document.querySelectorAll('#articlesGrid');

  if(pg) {
    pg.innerHTML = '';
    PRODUCTS.filter(p=>p.category==='figures' || p.category==='manga').forEach(p=>{
      pg.appendChild(productCard(p));
    });
  }
  if(gg) {
    gg.innerHTML = '';
    PRODUCTS.filter(p=>p.category==='goodies').forEach(p=>{
      gg.appendChild(productCard(p));
    });
  }
  if(ag && ag.length){
    ag.forEach(node=>{
      node.innerHTML = '';
      ARTICLES.forEach(a=>{
        const d = document.createElement('div');
        d.className = 'article-card';
        d.innerHTML = `<h4>${a.title}</h4><p>${a.excerpt}</p><a class="btn" href="article.html?slug=${a.id}">Lire</a>`;
        node.appendChild(d);
      });
    });
  }
}

/* Create product card element */
function productCard(p){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `<img src="${p.img}" alt="${p.title}" />
    <div class="card-body">
      <h4>${p.title}</h4>
      <p>${p.short}</p>
      <div class="actions">
        <a class="buy" href="${p.affiliate}" target="_blank" rel="noopener">Voir le prix • ${p.price}</a>
        <a class="more" href="#" data-id="${p.id}">Détails</a>
      </div>
    </div>`;
  el.querySelector('.more').addEventListener('click', (e)=>{
    e.preventDefault();
    openModalProduct(p.id);
  });
  return el;
}

/* Modal product detail */
function openModalProduct(id){
  const product = PRODUCTS.find(x=>x.id===id);
  if(!product) return;
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
function closeModal(){
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  document.getElementById('modalInner').innerHTML = '';
}

/* Search */
function applySearch(){
  const q = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  if(!q) { renderHome(); return; }
  const results = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q));
  const pg = document.getElementById('productsGrid');
  const gg = document.getElementById('goodiesGrid');
  if(pg) { pg.innerHTML = ''; results.forEach(r => { if(r.category!=='goodies') pg.appendChild(productCard(r)); }); }
  if(gg) { gg.innerHTML = ''; results.forEach(r => { if(r.category==='goodies') gg.appendChild(productCard(r)); }); }
}

/* Product page rendering when opened directly */
function renderProductPage(){
  const params = new URLSearchParams(window.location.search);
  const pid = params.get('pid');
  if(!pid) return;
  const product = PRODUCTS.find(p=>p.id===pid);
  const container = document.getElementById('productDetail');
  if(!product || !container) return;
  container.innerHTML = `<img src="${product.img}" alt="${product.title}" />
    <div class="product-meta">
      <h2>${product.title}</h2>
      <p>${product.short}</p>
      <p class="price">${product.price}</p>
      <div style="margin-top:12px">
        <a class="btn buy" href="${product.affiliate}" target="_blank" rel="noopener">Acheter sur le site (affilié)</a>
      </div>
      <section style="margin-top:18px">
        <h4>Description</h4>
        <p style="color:#9fb7d8">Description détaillée à ajouter. Ici tu peux mettre le comparatif, le vendeur officiel, garanties, et lien affilié.</p>
      </section>
    </div>`;
}

/* Article page rendering */
function renderArticlePage(){
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const articleContent = document.getElementById('articleContent');
  if(slug && articleContent){
    const article = ARTICLES.find(a=>a.id===slug);
    if(article){
      articleContent.classList.remove('hidden');
      articleContent.innerHTML = `<div class="article-content">
        <h1>${article.title}</h1>
        ${article.content}
        <p style="color:#9fb7d8">Tags: figurine, guide, achat</p>
      </div>`;
    }
  }
}

/* Init */
document.addEventListener('DOMContentLoaded', ()=>{
  // global rendering (works across index/product/article)
  renderHome();
  renderProductPage();
  renderArticlePage();

  // events
  const closeBtn = document.getElementById('closeModal');
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  const modalEl = document.getElementById('modal');
  if(modalEl) modalEl.addEventListener('click', (e)=> { if(e.target===modalEl) closeModal(); });

  const searchBtn = document.getElementById('searchBtn');
  if(searchBtn) searchBtn.addEventListener('click', applySearch);
  const searchInput = document.getElementById('searchInput');
  if(searchInput) searchInput.addEventListener('keyup', (e)=> { if(e.key==='Enter') applySearch(); });
});




