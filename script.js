const PRODUCTS = [
      
 { id:"p001", 
    title:"Figurine Luffy (Édition Premium) 25cm", 
    price:"89.99€",
    img:"https://images.unsplash.com/photo-1520975916210-c7f055a6b9f1?q=80&w=800&auto=format&fit=crop",
    short:"Figurine haute qualité de Monkey D. Luffy, peinture détaillée, socle inclus.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p002", 
    title:"Figurine Zoro - 20cm (PVC)", 
    price:"59.90€",
    img:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    short:"Pose dynamique, base solide, parfait pour collectionneurs.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p003", 
    title:"Figurine Naruto Uzumaki (Collector)", 
    price:"129.99€",
    img:"https://images.unsplash.com/photo-1526403224748-9f4f9f2b9e4e?q=80&w=800&auto=format&fit=crop",
    short:"Édition limitée, boîte collector, certificat d'authenticité.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p004", 
    title:"Figurine Gojo Satoru 22cm", 
    price:"74.50€",
    img:"https://images.unsplash.com/photo-1602524202558-4e7f76c3a8f3?q=80&w=800&auto=format&fit=crop",
    short:"Détails fins, peinture premium pour fans de Jujutsu Kaisen.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p005", 
    title:"Figurine Tanjiro (Demon Slayer) 18cm", 
    price:"49.90€",
    img:"https://images.unsplash.com/photo-1526318472351-c75fcf070c01?q=80&w=800&auto=format&fit=crop",
    short:"Bonne finition pour un rapport qualité/prix excellent.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p006", 
    title:"Poster One Piece XXL (Mat)",
    price:"19.90€",
    img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    short:"Poster grand format, papier mat haute tenue, idéal chambre gamer.",
    category:"goodies", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p007", 
    title:"Poster Attack on Titan - Édition artistique", 
    price:"24.90€",
    img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    short:"Design premium par artiste indépendant.",
    category:"goodies", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p008", 
    title:"Tapis de souris XXL (Theme Anime)", 
    price:"29.99€",
    img:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    short:"Surface lisse, idéal gamers, motif anime.",
    category:"goodies", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p009", 
    title:"Lampe LED Anime (Change couleur)", 
    price:"34.90€",
    img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
    short:"Lampes décoratives style néon anime, télécommande incluse.",
    category:"goodies", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p010", 
    title:"Peluches Anime 30cm (Pack 2)", 
    price:"39.90€",
    img:"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
    short:"Peluches douces, qualité kid-safe, excellent cadeau.",
    category:"goodies", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p011", 
    title:"Coffret Manga Naruto Vol.1-10 (Pack)", 
    price:"59.00€",
    img:"https://images.unsplash.com/photo-1526318472351-c75fcf070c01?q=80&w=800&auto=format&fit=crop",
    short:"Pack économique, bonne impression, parfait pour débuter la collection.",
    category:"manga", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p012", 
    title:"Coffret One Piece - Édition 25ème Anniversaire", 
    price:"149.99€",
    img:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
    short:"Edition spéciale avec goodies exclusifs.",
    category:"manga", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p013", 
    title:"Figurine Édition PVC - Dark Fantasy 30cm", 
    price:"119.90€",
    img:"https://images.unsplash.com/photo-1582719478170-7faaeec0d6b9?q=80&w=800&auto=format&fit=crop",
    short:"Grande taille, détails scéniques, parfait pour vitrine.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p014", 
    title:"Kit entretien figurines (pinceau, colle, chiffon)", 
    price:"14.90€",
    img:"https://images.unsplash.com/photo-1585155770872-5c3bbaec0e1f?q=80&w=800&auto=format&fit=crop",
    short:"Outils essentiels pour nettoyer/réparer petites pièces.",
    category:"accessories", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p015", 
    title:"Présentoir acrylique pour figurines (3 niveaux)", 
    price:"29.90€",
    img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=800&auto=format&fit=crop",
    short:"Présentoir transparent pour mettre tes figurines en valeur.",
    category:"accessories", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p016", 
    title:"Boîte Collector blindée (stockage manga/figurine)", 
    price:"24.50€",
    img:"https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=800&auto=format&fit=crop",
    short:"Protection et rangement pour collectionneurs.",
    category:"accessories", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p017", 
    title:"Set miniature diorama (custom)", 
    price:"39.00€",
    img:"https://images.unsplash.com/photo-1579547621706-1a9c79d5f0b8?q=80&w=800&auto=format&fit=crop",
    short:"Crée des scènes pour mettre en valeur tes figurines.",
    category:"accessories", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p018", 
    title:"Figurine Chibi Pack (lot 5)", 
    price:"44.90€",
    img:"https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=800&auto=format&fit=crop",
    short:"Petites figurines mignonnes, parfaites pour bureau ou voiture.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p019", 
    title:"Impression toile anime (canvas 60x40)", 
    price:"54.90€",
    img:"https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=800&auto=format&fit=crop",
    short:"Toile haute qualité, rendu couleur professionnel.",
    category:"goodies", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" },

  { id:"p020", 
    title:"Figurine Articulée (Action Figure) 18cm", 
    price:"69.90€",
    img:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    short:"Articulations nombreuses, idéal pour poses et shoot photos.",
    category:"figures", affiliate:"https://www.amazon.fr/dp/ASIN/?tag=<TON-AFFILIATE-TAG>" }
];

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











