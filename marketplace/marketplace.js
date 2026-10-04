import { icon } from '../src/components.js';
import { applyTranslations, getLanguage, localizedDescription, localizedPageTitle, setLanguage, t, translateText } from './i18n.js';

const products = [
  { id: 'studio-headphones', name: 'Studio Wireless Headphones', category: 'Tech & audio', shop: 'North & Tone', price: 89, old: 119, rating: '4.9', reviews: 248, flag: 'Bestseller', color: 'Sand', image: 'photo-1505740420928-5e560c06d30e', alt: 'Warm tan wireless headphones on a pale background', detail: 'Thoughtful sound for everywhere. These beautifully balanced wireless headphones pair soft memory-foam cushions with 40 hours of listening time, so the soundtrack goes as far as you do.', specs: [['Listening time','Up to 40 hours'],['Connection','Bluetooth 5.3'],['Finish','Sandstone'],['Warranty','2 years']] },
  { id: 'everyday-tote', name: 'Everyday Leather Tote', category: 'Accessories', shop: 'Marlow Goods', price: 64, old: 78, rating: '4.8', reviews: 182, flag: 'Small-batch made', color: 'Cognac', image: 'photo-1548036328-c9fa89d128fa', alt: 'Sculptural cognac leather handbag', detail: 'An easy, everyday carryall crafted from responsibly sourced leather. Room for your laptop, lunch and all the little things, with an inside pocket that keeps your keys right where they belong.', specs: [['Material','Responsibly sourced leather'],['Dimensions','14 × 11 × 5 in'],['Made in','Portland, Oregon'],['Care','Leather balm']] },
  { id: 'cloud-runner', name: 'Cloud Knit Runner', category: 'Shoes', shop: 'Common Ground', price: 78, old: 96, rating: '4.7', reviews: 96, flag: '18% off', color: 'Chalk', image: 'photo-1542291026-7eec264c27ff', alt: 'Sleek coral and white running shoe', detail: 'A feather-light knit upper and springy recycled foam make this your new just-one-more-block shoe. Made to move comfortably from weekday errands to weekend miles.', specs: [['Upper','Recycled knit'],['Sole','Rebound foam'],['Fit','True to size'],['Care','Cold hand wash']] },
  { id: 'ceramic-vase', name: 'Sunday Ceramic Vase', category: 'Home & living', shop: 'Sunday Objects', price: 48, old: 0, rating: '4.9', reviews: 71, flag: 'Hand finished', color: 'Oat', image: 'photo-1578500494198-246f612d3b3d', alt: 'Hand-shaped cream ceramic vase', detail: 'A little sculptural moment for the windowsill. Each stoneware vase is thrown and glazed by hand, so no two have quite the same softly speckled finish.', specs: [['Material','Stoneware'],['Height','8.5 in'],['Made in','Hudson Valley, NY'],['Finish','Food-safe glaze']] },
  { id: 'table-lamp', name: 'Modern Table Lamp', category: 'Home & living', shop: 'Sunday Objects', price: 52, old: 68, rating: '4.8', reviews: 133, flag: 'A customer favorite', color: 'Warm white', image: 'photo-1507473885765-e6ed057f782c', alt: 'Warm ambient table lamp in a serene room', detail: 'A softly glowing little companion for your bedside or favorite reading corner. The linen shade diffuses warm light, while the ceramic base feels lovely to the touch.', specs: [['Material','Ceramic, linen'],['Height','16 in'],['Bulb','E26 LED included'],['Cord','6 ft, braided']] },
  { id: 'canvas-sneaker', name: 'Daily Canvas Sneaker', category: 'Shoes', shop: 'Common Ground', price: 68, old: 0, rating: '4.6', reviews: 54, flag: 'Easy essential', color: 'Cloud', image: 'photo-1525966222134-fcfa99b8ae77', alt: 'White low-top canvas sneakers', detail: 'The pair you reach for without thinking. Organic cotton canvas, a flexible rubber sole and a removable footbed make everyday comfort feel effortless.', specs: [['Upper','Organic cotton'],['Sole','Natural rubber'],['Fit','True to size'],['Care','Spot clean']] },
  { id: 'linen-throw', name: 'Soft Linen Throw', category: 'Home & living', shop: 'Wilder Home', price: 82, old: 104, rating: '4.8', reviews: 88, flag: '21% off', color: 'Sage', image: 'photo-1600210492486-724fe5c67fb0', alt: 'Sage green linen throw draped over a sofa', detail: 'European flax linen, softened by a wash and made for slow mornings. Light enough for summer evenings and just right layered over your favorite chair.', specs: [['Material','100% European flax'],['Size','55 × 75 in'],['Made in','Lisbon, Portugal'],['Care','Machine wash cold']] },
  { id: 'weekend-sunglasses', name: 'Weekend Sunglasses', category: 'Accessories', shop: 'Kindred Supply', price: 42, old: 0, rating: '4.7', reviews: 62, flag: 'Sunny day staple', color: 'Tortoise', image: 'photo-1511499767150-a48a237f0083', alt: 'Tortoiseshell sunglasses in natural light', detail: 'A classic shape with a comfortably light feel. These everyday frames have polarized lenses and come with a recycled-fabric pouch for the days you leave them in your bag.', specs: [['Frame','Plant-based acetate'],['Lens','Polarized UV400'],['Fit','Medium'],['Included','Recycled pouch']] },
  { id: 'pour-over-set', name: 'Slow Morning Pour-over Set', category: 'Home & living', shop: 'Sunday Objects', price: 56, old: 72, rating: '4.9', reviews: 104, flag: 'Hand finished', color: 'Ivory', image: 'photo-1495474472287-4d71bcdd2085', alt: 'Ceramic pour-over coffee set on a wood counter', detail: 'For coffee worth taking your time over. The reusable ceramic dripper and matching cup are finished by hand and sized for a quietly excellent one-cup ritual.', specs: [['Includes','Dripper + 12 oz cup'],['Material','Glazed stoneware'],['Dishwasher','Safe'],['Made in','Hudson Valley, NY']] },
  { id: 'leather-wallet', name: 'Pocket-sized Leather Wallet', category: 'Accessories', shop: 'Marlow Goods', price: 39, old: 0, rating: '4.8', reviews: 119, flag: 'Made to last', color: 'Chestnut', image: 'photo-1627123424574-724758594e93', alt: 'Minimal brown leather card holder wallet', detail: 'A streamlined home for the essentials, cut and stitched in a small workshop. The vegetable-tanned leather develops a rich, personal patina over time.', specs: [['Material','Vegetable-tanned leather'],['Capacity','6 cards + folded bills'],['Made in','Portland, Oregon'],['Care','Leather conditioner']] },
  { id: 'bloom-bottle', name: 'Everyday Glass Bottle', category: 'Outdoors', shop: 'Kindred Supply', price: 34, old: 0, rating: '4.6', reviews: 41, flag: 'Refill, repeat', color: 'Clear / moss', image: 'photo-1602143407151-7111542de6e8', alt: 'Reusable clear drinking bottle with green detail', detail: 'A simple refillable bottle with a satisfying feel in the hand. Durable borosilicate glass, a protective silicone sleeve and a leak-resistant bamboo lid go wherever you do.', specs: [['Capacity','20 oz'],['Glass','Borosilicate'],['Lid','Bamboo + silicone seal'],['Dishwasher','Glass body only']] },
  { id: 'wireless-speaker', name: 'Little Room Speaker', category: 'Tech & audio', shop: 'North & Tone', price: 72, old: 92, rating: '4.7', reviews: 83, flag: '22% off', color: 'Forest', image: 'photo-1608043152269-423dbba4e7e1', alt: 'Compact portable wireless speaker', detail: 'Small footprint, wonderfully full sound. The splash-resistant shell and 18-hour battery make it equally at home on the bookshelf and out in the garden.', specs: [['Battery','18 hours'],['Connection','Bluetooth 5.2'],['Water rating','IPX5'],['Shell','Recycled fabric']] },
];
const stockByProduct = {
  'linen-throw': { status:'in-stock', count:18 },
  'wireless-speaker': { status:'low-stock', count:3 },
  'pour-over-set': { status:'out-of-stock', count:0 },
};
function availabilityForProduct(id) { return stockByProduct[id] || { status:'in-stock', count:24 }; }

const categories = [
  ['Home & living', 'Spaces for slower mornings', 'photo-1600210492486-724fe5c67fb0', 'home'],
  ['Accessories', 'Little details, big joy', 'photo-1548036328-c9fa89d128fa', 'bag'],
  ['Shoes', 'Made for your every day', 'photo-1525966222134-fcfa99b8ae77', 'sparkle'],
  ['Tech & audio', 'Sound good, feel good', 'photo-1505740420928-5e560c06d30e', 'sparkle'],
  ['Outdoors', 'Take the good outside', 'photo-1470770841072-f978cf4d019e', 'sparkle'],
];
const dollars = (n) => `$${n.toFixed(2)}`;
const photo = (id, width = 760) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const CART_KEY = 'shophub-cart-v1';
const WISHLIST_SEEDED_KEY = 'shophub-wishlist-sample-seeded-v1';
function readCart() {
  try { return JSON.parse(sessionStorage.getItem(CART_KEY)) || { items: [], saved: [], vouchers: [] }; }
  catch { return { items: [], saved: [], vouchers: [] }; }
}
function writeCart(cart) {
  try { sessionStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* In-memory interactions still work if storage is unavailable. */ }
  return cart;
}
const countCart = (cart = readCart()) => cart.items.reduce((sum, item) => sum + item.qty, 0);
function seedCart() {
  try {
    if (sessionStorage.getItem(CART_KEY) !== null) return;
  } catch { return; }
  writeCart({ items: [
    { id: 'studio-headphones', qty: 1, selected: true, variant: 'Sand · Wireless' },
    { id: 'wireless-speaker', qty: 1, selected: true, variant: 'Forest · Standard' },
    { id: 'everyday-tote', qty: 1, selected: true, variant: 'Cognac · Large' },
    { id: 'ceramic-vase', qty: 1, selected: true, variant: 'Oat · 8.5 in' },
    { id: 'table-lamp', qty: 1, selected: false, variant: 'Warm white · Natural linen' },
  ], saved: [], vouchers: [] });
}
function seedWishlist() {
  seedCart();
  try {
    if(sessionStorage.getItem(WISHLIST_SEEDED_KEY))return;
    const cart=readCart();
    if(!cart.saved.length)cart.saved=['linen-throw','wireless-speaker','pour-over-set'].map(id=>({id}));
    writeCart(cart);sessionStorage.setItem(WISHLIST_SEEDED_KEY,'1');
  } catch { /* Sample items remain visible when browser storage is unavailable. */ }
}
function isWishlisted(id) { return readCart().saved.some(item=>item.id===id); }
function refreshBagCount() {
  const count = countCart();
  document.querySelectorAll('.bag-count').forEach(node => node.textContent = count);
  document.querySelectorAll('.bag-button').forEach(node => node.setAttribute('aria-label', `Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`));
}
const card = (p) => `<article class="product-card"><a class="product-image" href="/products/${p.id}" aria-label="View ${p.name}"><img src="${photo(p.image)}" alt="${p.alt}" loading="lazy"><span class="product-flag">${p.flag}</span></a><button class="save-button ${isWishlisted(p.id)?'is-saved':''}" type="button" data-action="save" data-name="${p.name}" data-id="${p.id}" aria-label="${t(isWishlisted(p.id)?'Remove from wishlist':'Save to wishlist')} ${p.name}" aria-pressed="${isWishlisted(p.id)}">${icon('heart',18)}</button><div class="product-info"><a href="/products/${p.id}" class="product-title">${p.name}</a><a class="product-shop" href="/products?shop=${encodeURIComponent(p.shop)}">${p.shop} <span aria-label="Verified shop">✓</span></a><div class="price-row"><span class="price">${dollars(p.price)}</span>${p.old ? `<s>${dollars(p.old)}</s>` : ''}<span class="rating">${icon('star',14)} ${p.rating}</span></div><button class="quick-add" type="button" data-action="add" data-name="${p.name}" data-id="${p.id}">${icon('plus',16)} Add to bag</button></div></article>`;

function header(active = '') {
  const language = getLanguage();
  return `<div class="announcement">A little more good in your everyday <span>Free shipping over $75</span></div><header class="market-header"><div class="header-main"><button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" data-action="menu">${icon('menu',22)}</button><a class="brand" href="/" aria-label="ShopHub home"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>shop<span class="brand-accent">hub</span><span class="brand-period">.</span></span></a><nav class="primary-nav" aria-label="Main navigation"><a class="${active === 'home' ? 'active' : ''}" href="/">Discover</a><a class="${active === 'products' ? 'active' : ''}" href="/products">Shop all</a><a href="/products?category=Home%20%26%20living">Home & living</a><a href="/products?category=Accessories">Accessories</a><a class="nav-deal" href="/products?deal=1">Good deals <span>Fresh</span></a></nav><form class="header-search" action="/products" role="search"><label class="sr-only" for="site-search">Search products and shops</label>${icon('search',19)}<input id="site-search" name="q" type="search" placeholder="Search something lovely…" autocomplete="off"><button type="submit" aria-label="Search">${icon('arrow',17)}</button></form><div class="language-switch" role="group" aria-label="Choose language"><button type="button" data-language="en" aria-label="English language" aria-pressed="${language==='en'}">EN</button><span aria-hidden="true">/</span><button type="button" data-language="vi" aria-label="Vietnamese language" aria-pressed="${language==='vi'}">VI</button></div><div class="header-actions"><a class="action-link dashboard-link ${active==='account'?'active':''}" href="/account">My account</a><a class="header-icon wishlist-nav-link" href="/wishlist" aria-label="Wishlist">${icon('heart',20)}</a><a class="header-icon bag-button" href="/cart" aria-label="Shopping bag, ${countCart()} items">${icon('cart',21)}<span class="bag-count">${countCart()}</span></a></div></div><nav class="mobile-nav" aria-label="Mobile navigation"><a href="/">Discover</a><a href="/products">Shop all</a><a href="/products?category=Home%20%26%20living">Home & living</a><a href="/products?category=Accessories">Accessories</a><a class="${active==='account'?'active':''}" href="/account">My account</a><a href="/wishlist">Wishlist</a><a href="/cart">Your cart (${countCart()})</a></nav></header>`;
}
function footer() { return `<footer class="site-footer"><a class="brand" href="/"><span class="brand-mark"><i></i><i></i><i></i><i></i></span><span>shop<span class="brand-accent">hub</span><span class="brand-period">.</span></span></a><span>Good finds, from good people.</span><span>© 2026 ShopHub</span><a href="/account">Your account ${icon('arrow',14)}</a></footer>`; }
function wishlistCount(count) { return `<div class="wishlist-count"><strong>${count}</strong><span>${t('saved products')}</span></div>`; }
function wishlistContent() {
  const saved=readCart().saved.map(row=>products.find(product=>product.id===row.id)).filter(Boolean);
  if(!saved.length)return `<section class="wishlist-empty"><span class="wishlist-empty-icon">${icon('heart',25)}</span><p class="eyebrow">${t('A LITTLE SOMETHING FOR LATER')}</p><h2>${t('Your wishlist is empty')}</h2><p>${t('When you find something you love, save it here and pick up where you left off.')}</p><a class="button-primary" href="/products">${t('Browse the marketplace')} ${icon('arrow',16)}</a></section>`;
  return `<div class="wishlist-grid">${saved.map(product=>{const availability=availabilityForProduct(product.id);const soldOut=availability.status==='out-of-stock';const stockCopy=availability.status==='low-stock'?t('Only {count} left',{count:availability.count}):t(availability.status==='out-of-stock'?'Out of stock':'In stock');const saving=product.old?product.old-product.price:0;return `<article class="wishlist-card"><a class="wishlist-image" href="/products/${product.id}" aria-label="${t('View product')} ${product.name}"><img src="${photo(product.image,520)}" alt="${product.alt}" loading="lazy">${product.old?`<span class="wishlist-sale">${t('Save {amount}',{amount:dollars(saving)})}</span>`:''}</a><div class="wishlist-card-body"><div class="wishlist-product-top"><div><a class="wishlist-product-name" href="/products/${product.id}">${product.name}</a><a class="wishlist-shop" href="/products?shop=${encodeURIComponent(product.shop)}">${product.shop} ${icon('arrow',12)}</a></div><button class="wishlist-remove" type="button" data-wishlist-action="remove" data-id="${product.id}" aria-label="${t('Remove from wishlist')} ${product.name}" title="${t('Remove from wishlist')}">${icon('close',17)}</button></div><div class="wishlist-rating">${icon('star',14)} <strong>${product.rating}</strong><span>${product.reviews} ${t('reviews')}</span></div><div class="wishlist-price-row"><strong>${dollars(product.price)}</strong>${product.old?`<s>${dollars(product.old)}</s><span>${t('Save {amount}',{amount:dollars(saving)})}</span>`:''}</div><div class="wishlist-card-bottom"><span class="wishlist-stock wishlist-stock-${availability.status}"><i></i>${stockCopy}</span><button class="wishlist-add" type="button" data-wishlist-action="add" data-id="${product.id}" ${soldOut?'disabled':''}>${icon(soldOut?'close':'cart',15)} ${t(soldOut?'Out of stock':'Add to bag')}</button></div></div></article>`;}).join('')}</div>`;
}
function wishlistPage() {
  seedWishlist();const saved=readCart().saved.filter(row=>products.some(product=>product.id===row.id));
  document.title=`${t('Wishlist')} — ShopHub`;
  return `${header()}<main class="wishlist-page page-width"><div class="wishlist-breadcrumb"><a href="/">${t('Discover')}</a>${icon('chevron',13)}<span>${t('Wishlist')}</span></div><section class="wishlist-heading"><div><p class="eyebrow">${t('YOUR SAVED FINDS')}</p><h1>${t('Wishlist')}</h1><p>${t('Keep the pieces you love close.')}</p></div><div id="wishlist-count">${wishlistCount(saved.length)}</div></section><div class="wishlist-tools"><div><h2>${t('Saved for later')}</h2><p>${t('Find them again whenever you’re ready.')}</p></div><a href="/products">${t('Continue shopping')} ${icon('arrow',15)}</a></div><div id="wishlist-content">${wishlistContent()}</div></main>${footer()}`;
}
function sectionTitle(kicker, title, href = '/products', label = 'Explore all') { return `<div class="section-title"><div><p class="eyebrow">${kicker}</p><h2>${title}</h2></div><a class="text-link" href="${href}">${label} ${icon('arrow',16)}</a></div>`; }

function home() {
  return `${header('home')}<main class="home-main page-width"><section class="hero"><div class="hero-copy"><p class="eyebrow"><span class="sparkle-dot">✳</span> A MARKETPLACE FOR THE GOOD STUFF</p><h1>Find things<br>that feel <em>like you.</em></h1><p>Meet independent makers, fall for thoughtful details, and bring home the pieces you’ll keep reaching for.</p><form class="hero-search" action="/products" role="search"><label class="sr-only" for="hero-search">What are you looking for?</label>${icon('search',20)}<input id="hero-search" name="q" type="search" placeholder="What are you looking for today?"><button type="submit" aria-label="Search">${icon('arrow',19)}</button></form><div class="hero-proof"><span class="proof-avatars"><i>M</i><i>S</i><i>A</i></span><span>Loved by 24,000+ thoughtful shoppers</span></div></div><div class="hero-visual"><img src="${photo('photo-1600210492486-724fe5c67fb0',1100)}" alt="A warm, sunlit living room with considered everyday objects"><div class="hero-note"><span class="hero-note__icon">✳</span><span><small>THE GOOD EDIT</small><strong>Objects for a slower Sunday</strong></span>${icon('arrow',18)}</div><div class="hero-caption">MADE WITH CARE. FOUND RIGHT HERE.</div></div><div class="hero-bottomline"><span>GOOD FINDS, GOOD PEOPLE</span><span>01 / 03</span></div></section>
  <section class="category-section" id="categories">${sectionTitle('A GOOD PLACE TO START','What are you in the mood for?','/products','All categories')}<div class="category-grid">${categories.map(([name,desc,img])=>`<a class="category-tile" href="/products?category=${encodeURIComponent(name)}"><span class="category-photo"><img src="${photo(img,520)}" alt="" loading="lazy"></span><span class="category-name">${name}${icon('arrow',15)}</span><span class="category-caption">${desc}</span></a>`).join('')}</div></section>
  <section class="deals-section"><div class="deal-copy"><p class="eyebrow">A GOOD LITTLE BONUS</p><h2>Worth a second look.</h2><p>Thoughtful things, at especially lovely prices. Your next favorite might be right here.</p><a class="button-primary" href="/products?deal=1">Shop the good deals ${icon('arrow',16)}</a><span class="deal-squiggle" aria-hidden="true">✳</span></div><div class="deal-items">${[products[2],products[6],products[0]].map(p=>`<a class="deal-mini" href="/products/${p.id}"><img src="${photo(p.image,420)}" alt="${p.alt}" loading="lazy"><span><small>${p.flag}</small><strong>${p.name}</strong><b>${dollars(p.price)} ${p.old ? `<s>${dollars(p.old)}</s>` : ''}</b></span>${icon('arrow',16)}</a>`).join('')}</div></section>
  <section class="product-section">${sectionTitle('MAKING THE ROUNDS','A few crowd favorites')}<div class="product-grid">${[products[0],products[3],products[1],products[8]].map(card).join('')}</div></section>
  <section class="maker-section"><div class="maker-photo"><img src="${photo('photo-1455390582262-044cdead277a',1000)}" alt="An independent maker at work in a sunlit studio" loading="lazy"><span>MADE SLOWLY, LOVED FOR LONGER</span></div><div class="maker-copy"><p class="eyebrow">A MARKETPLACE WITH A HUMAN SIDE</p><h2>Small shops.<br><em>Big heart.</em></h2><p>Behind every good find is a real person who cared enough to make it. Meet the independent shops putting thought into the things we bring home.</p><a class="button-light" href="/products?shop=Sunday%20Objects">Meet the makers ${icon('arrow',16)}</a><div class="maker-count"><strong>1,200+</strong><span>independent shops to discover</span></div></div></section>
  <section class="product-section recommended-section">${sectionTitle('A LITTLE SOMETHING FOR YOU','Picked with you in mind')}<div class="recommend-note">Based on the things thoughtful shoppers are loving lately.</div><div class="product-grid">${[products[4],products[7],products[9],products[10]].map(card).join('')}</div></section>
  <section class="recent-section">${sectionTitle('PICK UP WHERE YOU LEFT OFF','Recently admired','/products','See more finds')}<div class="recent-row">${[products[2],products[5],products[1]].map(p=>`<a class="recent-item" href="/products/${p.id}"><img src="${photo(p.image,340)}" alt="${p.alt}" loading="lazy"><span><small>${p.shop}</small><strong>${p.name}</strong><b>${dollars(p.price)}</b></span>${icon('arrow',16)}</a>`).join('')}</div></section></main>${footer()}`;
}

function listing() {
  const params = new URLSearchParams(location.search); const q = params.get('q') || ''; const category = params.get('category') || ''; const shop = params.get('shop') || ''; const deals = params.has('deal');
  document.title = q ? `Results for “${q}” — ShopHub` : `${category || shop || (deals ? 'Good deals' : 'Shop all finds')} — ShopHub`;
  const context = q ? `Search results for “${q}”` : category || shop || (deals ? 'Good deals' : 'All the good finds');
  const matches = products.filter(p => (!q || `${p.name} ${p.category} ${p.shop}`.toLowerCase().includes(q.toLowerCase())) && (!category || p.category === category) && (!shop || p.shop.toLowerCase() === shop.toLowerCase()) && (!deals || p.old));
  const count = matches.length;
  return `${header('products')}<main class="listing-main page-width"><div class="breadcrumbs"><a href="/">Discover</a>${icon('chevron',14)}<span>${context}</span></div><section class="listing-intro"><div><p class="eyebrow">THE SHOPHUB EDIT</p><h1>${context}</h1><p>Good things, made thoughtfully and ready to find a home.</p></div><div class="shipping-note">${icon('truck',19)} <span>Free shipping on orders over $75</span></div></section>
  <div class="shop-controls"><button class="filter-mobile" type="button" data-action="filter-toggle">${icon('settings',17)} Filters <span>${count}</span></button><div class="active-filters">${category ? `<button class="filter-chip" data-clear="category">${category} ${icon('close',13)}</button>` : ''}${shop ? `<button class="filter-chip" data-clear="shop">${shop} ${icon('close',13)}</button>` : ''}${q ? `<button class="filter-chip" data-clear="q">${q} ${icon('close',13)}</button>` : ''}${(category||shop||q)?'<a class="clear-filters" href="/products">Clear all</a>':''}</div><label class="sort-control">Sort by <select id="sort"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select>${icon('down',15)}</label></div>
  <div class="listing-layout"><aside class="filters" id="filters" aria-label="Product filters"><div class="filter-heading"><strong>Filters</strong><a href="/products">Reset all</a><button type="button" class="filter-close" aria-label="Close filters" data-action="filter-toggle">${icon('close',18)}</button></div><fieldset><legend>Category</legend>${['Home & living','Accessories','Shoes','Tech & audio','Outdoors'].map(c=>`<label class="check-option"><input type="checkbox" name="category" value="${c}" ${category===c?'checked':''}><span class="custom-check"></span>${c}<small>${products.filter(p=>p.category===c).length}</small></label>`).join('')}</fieldset><fieldset><legend>Price range</legend><div class="price-inputs"><label><span class="sr-only">Minimum price</span><span>$</span><input type="number" min="0" placeholder="0" value="${params.get('min')||''}" id="min-price"></label><span>to</span><label><span class="sr-only">Maximum price</span><span>$</span><input type="number" min="0" placeholder="150" value="${params.get('max')||''}" id="max-price"></label></div><button class="apply-price" type="button" data-action="price">Apply price</button></fieldset><fieldset><legend>Customer rating</legend>${[['4','4 stars & up'],['3','3 stars & up']].map(([v,l])=>`<label class="check-option"><input type="radio" name="rating" value="${v}" ${params.get('rating')===v?'checked':''}><span class="radio-check"></span>${l}<span class="stars-inline">${icon('star',13)}</span></label>`).join('')}</fieldset><fieldset><legend>Shop</legend>${['Sunday Objects','Marlow Goods','Common Ground','North & Tone','Kindred Supply','Wilder Home'].map(s=>`<label class="check-option"><input type="checkbox" name="shop" value="${s}" ${shop===s?'checked':''}><span class="custom-check"></span>${s}</label>`).join('')}</fieldset><fieldset class="last-filter"><legend>Availability</legend><label class="check-option"><input type="checkbox" name="stock" value="1"><span class="custom-check"></span>In stock</label></fieldset></aside>
  <section class="results-area" aria-labelledby="results-heading"><div class="results-meta"><h2 id="results-heading"><strong id="result-count">${count}</strong> thoughtful finds</h2><span>Prices shown in USD</span></div><div class="loading-grid" id="loading-state" aria-label="Loading products" style="display:grid"><div></div><div></div><div></div><div></div></div><div class="product-grid listing-grid" id="result-grid" hidden>${matches.slice(0,9).map(card).join('')}</div><div class="no-results" id="no-results" hidden><span class="no-results-icon">${icon('search',25)}</span><h2>No finds this time.</h2><p>Try a different search or clear a filter to see what’s out there.</p><a class="button-primary" href="/products">Browse all finds ${icon('arrow',16)}</a></div><nav class="pagination" aria-label="Product pages" hidden><button type="button" data-page="prev" disabled aria-label="Previous page">${icon('chevron',17)}</button><button type="button" class="page-current" data-page="1" aria-current="page">1</button><button type="button" data-page="2" ${count < 10 ? 'disabled' : ''}>2</button><button type="button" data-page="next" ${count < 10 ? 'disabled' : ''} aria-label="Next page">${icon('arrow',16)}</button><span>Showing <strong id="shown-count">${Math.min(count,9)}</strong> of ${count} finds</span></nav></section></div></main>${footer()}`;
}

function cartTotals(cart) {
  const selected = cart.items.filter(item => item.selected);
  const groups = [...new Set(cart.items.map(item => products.find(p => p.id === item.id)?.shop).filter(Boolean))].map(shop => {
    const items = selected.map(item => ({ item, product: products.find(p => p.id === item.id) })).filter(row => row.product?.shop === shop);
    const subtotal = items.reduce((sum, row) => sum + row.product.price * row.item.qty, 0);
    const compare = items.reduce((sum, row) => sum + Math.max(0, row.product.old - row.product.price) * row.item.qty, 0);
    const voucher = cart.vouchers.includes(shop) && subtotal >= 80 ? subtotal * .1 : 0;
    const shipping = items.length ? (subtotal >= 75 ? 0 : 5.95) : 0;
    return { shop, items, subtotal, compare, voucher, shipping };
  });
  return { selected, groups, subtotal: groups.reduce((sum, group) => sum + group.subtotal, 0), compare: groups.reduce((sum, group) => sum + group.compare, 0), voucher: groups.reduce((sum, group) => sum + group.voucher, 0), shipping: groups.reduce((sum, group) => sum + group.shipping, 0), units: selected.reduce((sum, item) => sum + item.qty, 0) };
}
function renderCartContent() {
  const cart = readCart(); const totals = cartTotals(cart); const allSelected = cart.items.length > 0 && cart.items.every(item => item.selected);
  const groups = [...new Set(cart.items.map(item => products.find(p => p.id === item.id)?.shop).filter(Boolean))];
  const content = cart.items.length ? `<div class="cart-select-all"><label class="cart-check-label"><input type="checkbox" data-select-all aria-label="Select all cart items" ${allSelected ? 'checked' : ''}><span class="cart-check"></span></label><strong>Select all</strong><span>${cart.items.filter(i=>i.selected).length} of ${cart.items.length} items selected</span><button type="button" data-cart-action="remove-selected" ${totals.selected.length?'':'disabled'}>Remove selected</button></div><div class="cart-shops">${groups.map(shop => {
    const rows = cart.items.filter(item => products.find(p => p.id === item.id)?.shop === shop);
    const selectedRows = rows.filter(item=>item.selected);
    const shopSubtotal = selectedRows.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0);
    const compareSubtotal = selectedRows.reduce((sum,item)=>{const p=products.find(product=>product.id===item.id);return sum+Math.max(0,p.old-p.price)*item.qty;},0);
    const shopSelected = rows.length>0&&rows.every(item=>item.selected);
    const promoEligible = shop==='Sunday Objects'&&shopSubtotal>=80;
    const voucherActive = cart.vouchers.includes(shop)&&promoEligible;
    return `<section class="cart-shop"><header class="cart-shop-head"><label class="cart-check-label shop-check-label"><input type="checkbox" data-shop-select="${shop}" ${shopSelected?'checked':''}><span class="cart-check"></span></label><span class="shop-avatar">${shop.split(' ').map(x=>x[0]).join('').slice(0,2)}</span><div class="cart-shop-title"><a href="/products?shop=${encodeURIComponent(shop)}">${shop} ${icon('external',13)}</a><small>Verified independent shop <span aria-label="Verified shop">✓</span></small></div><span class="shop-item-count">${rows.length} ${rows.length===1?'item':'items'}</span></header><div class="cart-shop-items">${rows.map(item=>{
      const p=products.find(product=>product.id===item.id); const checked=item.selected;
      return `<article class="cart-item ${checked?'':'is-unselected'}"><label class="cart-check-label item-check-label"><input type="checkbox" data-item-select="${item.id}" ${checked?'checked':''} aria-label="Select ${p.name}"><span class="cart-check"></span></label><a class="cart-product-photo" href="/products/${p.id}"><img src="${photo(p.image,280)}" alt="${p.alt}" loading="lazy"></a><div class="cart-product-info"><a class="cart-product-name" href="/products/${p.id}">${p.name}</a><span class="cart-variant">${item.variant}</span><span class="cart-mobile-unit">${dollars(p.price)} each</span><div class="cart-item-actions"><button type="button" data-cart-action="save" data-id="${p.id}">${icon('heart',14)} Save for later</button><button type="button" data-cart-action="remove" data-id="${p.id}">${icon('close',14)} Remove</button></div></div><div class="cart-unit-price"><span>Each</span><strong>${dollars(p.price)}</strong>${p.old?`<s>${dollars(p.old)}</s>`:''}</div><div class="cart-quantity"><span>Qty</span><div class="quantity-control"><button type="button" aria-label="Decrease ${p.name} quantity" data-cart-action="quantity" data-id="${p.id}" data-delta="-1" ${item.qty<=1?'disabled':''}>−</button><output>${item.qty}</output><button type="button" aria-label="Increase ${p.name} quantity" data-cart-action="quantity" data-id="${p.id}" data-delta="1" ${item.qty>=99?'disabled':''}>+</button></div></div><div class="cart-line-total"><span>Subtotal</span><strong>${dollars(p.price*item.qty)}</strong>${p.old?`<small>Save ${dollars((p.old-p.price)*item.qty)}</small>`:''}</div></article>`;
    }).join('')}</div>${shop==='Sunday Objects'?`<div class="shop-voucher ${voucherActive?'voucher-applied':''}"><span class="voucher-icon">${icon('gift',17)}</span><div><strong>${voucherActive?'10% shop voucher applied':'A little something from the shop'}</strong><small>${promoEligible?'10% off this shop’s selected items · minimum $80':`Add ${dollars(Math.max(0,80-shopSubtotal))} more from Sunday Objects to unlock 10% off`}</small></div><button type="button" data-cart-action="voucher" data-shop="${shop}" ${promoEligible?'':'disabled'}>${voucherActive?'Remove':'Apply'} ${icon(voucherActive?'check':'arrow',14)}</button></div>`:''}<footer class="cart-shop-foot"><span>${selectedRows.length?`${selectedRows.length} selected · ${dollars(shopSubtotal)} shop subtotal`:'No items from this shop selected'}</span><span>${compareSubtotal?`Sale savings ${dollars(compareSubtotal)}`:''}${selectedRows.length?` · Shipping ${shopSubtotal>=75?'on us':dollars(5.95)}`:''}</span></footer></section>`;
  }).join('')}</div>` : `<section class="cart-empty"><span class="empty-bag-icon">${icon('cart',29)}</span><p class="eyebrow">A LITTLE SPACE FOR SOMETHING GOOD</p><h2>Your cart is taking a breather.</h2><p>Find something thoughtful from one of our independent shops and it’ll be waiting here.</p><a class="button-primary" href="/products">Explore the marketplace ${icon('arrow',16)}</a></section>`;
  const savings = totals.compare + totals.voucher;
  return `<div class="cart-content-grid"><div class="cart-list-column">${content}${cart.saved.length?`<section class="saved-for-later"><div class="saved-heading"><div><p class="eyebrow">GOOD THINGS TO KEEP IN MIND</p><h2>Saved for later <span>${cart.saved.length}</span></h2></div><a href="/products">Find something else ${icon('arrow',14)}</a></div>${cart.saved.map(saved=>{const p=products.find(product=>product.id===saved.id);return p?`<article class="saved-item"><img src="${photo(p.image,200)}" alt="${p.alt}"><span><strong>${p.name}</strong><small>${p.shop} · ${dollars(p.price)}</small></span><button data-cart-action="restore" data-id="${p.id}" ${availabilityForProduct(p.id).status==='out-of-stock'?'disabled':''}>${availabilityForProduct(p.id).status==='out-of-stock'?t('Out of stock'):t('Move to cart')}</button></article>`:''}).join('')}</section>`:''}</div><aside class="order-summary"><div class="summary-heading"><div><p class="eyebrow">A CLEAR VIEW OF THE GOOD STUFF</p><h2>Order summary</h2></div><span class="summary-bag-count">${totals.units} ${totals.units===1?'item':'items'}</span></div><div class="summary-lines"><div><span>Selected items</span><strong>${totals.selected.length} ${totals.selected.length===1?'item':'items'} · ${totals.units} ${totals.units===1?'piece':'pieces'}</strong></div><div><span>Items subtotal</span><strong>${dollars(totals.subtotal)}</strong></div>${totals.compare?`<div class="summary-saving"><span>Sale savings</span><strong>−${dollars(totals.compare)}</strong></div>`:''}${totals.voucher?`<div class="summary-saving"><span>Shop voucher</span><strong>−${dollars(totals.voucher)}</strong></div>`:''}<div><span>Shipping estimate</span><strong>${totals.shipping?dollars(totals.shipping):totals.selected.length?'Free':'—'}</strong></div></div><div class="summary-total"><span>Estimated total</span><strong>${dollars(Math.max(0,totals.subtotal-savings+totals.shipping))}</strong></div><p class="summary-explain">Includes selected items from <strong>${totals.groups.filter(g=>g.items.length).length} ${totals.groups.filter(g=>g.items.length).length===1?'independent shop':'independent shops'}</strong>. Each shop packs and ships its own order.</p><button class="checkout-button" type="button" data-cart-action="checkout" ${totals.selected.length?'':'disabled'}>${icon('check',17)} Continue to checkout ${icon('arrow',16)}</button><p class="checkout-note">You’ll review shipping details for each shop next. No payment is taken in this prototype.</p><a class="keep-shopping" href="/products">${icon('arrow',15)} Keep discovering</a><div class="summary-trust">${icon('check',15)} Support independent shops with every order</div></aside></div>`;
}
function cartPage() {
  seedCart(); const cart=readCart(); const count=cart.items.length;
  return `${header()}<main class="cart-main page-width"><div class="breadcrumbs"><a href="/">Discover</a>${icon('chevron',14)}<span>Your cart</span></div><section class="cart-intro"><div><p class="eyebrow">YOUR SHOPHUB BAG</p><h1>A few good finds.</h1><p>Picked from thoughtful shops, ready for your home.</p></div><div class="cart-trust">${icon('check',18)} <span>Every purchase supports an independent shop</span></div></section><div class="cart-title-row"><div><h2>Your cart <span id="cart-line-count">${count}</span></h2><p>Products from a few good people.</p></div><a href="/products">Keep shopping ${icon('arrow',15)}</a></div><div id="cart-content">${renderCartContent()}</div></main>${footer()}`;
}

const CHECKOUT_STATE_KEY = 'shophub-checkout-state-v1';
const defaultCheckoutState = () => ({
  addresses: [
    { id: 'home', label: 'Home', name: 'Lan Nguyen', phone: '+84 90 1234 567', street: '21 Nguyen Hue Street', ward: 'Ben Nghe Ward, District 1', city: 'Ho Chi Minh City' },
    { id: 'office', label: 'Office', name: 'Minh Tran', phone: '+84 90 222 1075', street: '14 Le Loi Street', ward: 'Ben Thanh Ward, District 1', city: 'Ho Chi Minh City' },
  ], selectedAddress: 'home', addressForm: null, shipping: {}, payment: 'cod', success: false,
});
function readCheckoutState() {
  const base = defaultCheckoutState();
  try {
    const saved = JSON.parse(sessionStorage.getItem(CHECKOUT_STATE_KEY));
    return saved ? { ...base, ...saved, addresses: Array.isArray(saved.addresses) ? saved.addresses : base.addresses, shipping: saved.shipping || {} } : base;
  } catch { return base; }
}
function writeCheckoutState(state) {
  try { sessionStorage.setItem(CHECKOUT_STATE_KEY, JSON.stringify(state)); } catch { /* Keep the checkout usable for this page load. */ }
}
function checkoutShipping(group, method) {
  if (method === 'express') return 9.95;
  return group.subtotal >= 75 ? 0 : 5.95;
}
function checkoutPage() {
  return `${header()}<main class="checkout-page page-width"><div class="checkout-breadcrumb"><a href="/cart">${t('Cart')}</a>${icon('chevron',14)}<span>${t('Checkout')}</span></div><div class="checkout-heading"><div><p class="eyebrow">${t('Secure checkout preview')}</p><h1>${t('Checkout')}</h1></div><nav class="checkout-steps" aria-label="${t('Checkout')}"><span class="checkout-step is-complete"><i>1</i>${t('Cart')}</span><span class="checkout-step-divider"></span><span class="checkout-step is-current"><i>2</i>${t('Checkout')}</span></nav></div><div id="checkout-content">${renderCheckoutContent()}</div></main>${footer()}`;
}
const ACCOUNT_STATE_KEY = 'shophub-customer-account-v1';
const defaultAccountState = () => ({ profile:{name:'Lan Nguyen',email:'lan.nguyen@example.com',phone:'+84 90 1234 567'}, notifications:true, editingProfile:false, addressForm:null });
const escapeAccountValue = value => String(value??'').replace(/[&<>"']/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function readAccountState() {
  const base=defaultAccountState();
  try { const saved=JSON.parse(sessionStorage.getItem(ACCOUNT_STATE_KEY)); return saved?{...base,...saved,profile:Object.fromEntries(Object.entries(base.profile).map(([key,value])=>[key,typeof saved.profile?.[key]==='string'&&saved.profile[key].trim()?saved.profile[key]:value]))}:base; }
  catch { return base; }
}
function writeAccountState(state) { try { sessionStorage.setItem(ACCOUNT_STATE_KEY,JSON.stringify(state)); } catch { /* Keep the account preview usable in memory. */ } }
function readAccountCheckoutState() {
  const checkout=readCheckoutState();
  checkout.addressForm=null;
  const addresses=Array.isArray(checkout.addresses)?checkout.addresses:[];
  const chosen=addresses.find(address=>address.isDefault)||addresses[0];
  checkout.addresses=addresses.map(address=>({...address,isDefault:address.id===chosen?.id}));
  if(!addresses.some(address=>address.id===checkout.selectedAddress))checkout.selectedAddress=chosen?.id||'';
  writeCheckoutState(checkout);
  return checkout;
}
function accountAddressForm(checkout, addressState) {
  if(!addressState.addressForm)return '';
  const existing=checkout.addresses.find(address=>address.id===addressState.addressForm);
  const values=existing||{name:'',phone:'',street:'',ward:'',city:''};
  const makeDefault=existing?Boolean(existing.isDefault):!checkout.addresses.length;
  return `<form class="account-address-form" id="account-address-form"><div class="account-address-form-heading"><div><p class="eyebrow">${t(existing?'Edit address':'Add address')}</p><h3>${t('Address details')}</h3></div><button type="button" class="account-icon-button" data-account-action="cancel-address" aria-label="${t('Cancel')}">${icon('close',17)}</button></div><div class="account-form-grid"><label><span>${t('Recipient full name')}</span><input name="name" autocomplete="name" value="${escapeAccountValue(values.name)}" required></label><label><span>${t('Phone number')}</span><input name="phone" type="tel" autocomplete="tel" value="${escapeAccountValue(values.phone)}" required></label><label class="account-form-wide"><span>${t('Street address')}</span><input name="street" autocomplete="street-address" value="${escapeAccountValue(values.street)}" required></label><label><span>${t('Ward / district')}</span><input name="ward" value="${escapeAccountValue(values.ward)}" required></label><label><span>${t('City / province')}</span><input name="city" autocomplete="address-level1" value="${escapeAccountValue(values.city)}" required></label></div><label class="account-default-choice"><input type="checkbox" name="makeDefault" ${makeDefault?'checked':''}><span class="account-checkbox"></span>${t('Make default address')}</label><div class="account-form-actions"><button class="button-primary" type="submit">${t('Save address')}</button><button class="button-secondary" type="button" data-account-action="cancel-address">${t('Cancel')}</button></div></form>`;
}
function accountContent() {
  const account=readAccountState();
  const checkout=readAccountCheckoutState();
  const profile=account.profile;
  const orders=readOrders();
  const savedCount=readCart().saved.filter(item=>products.some(product=>product.id===item.id)).length;
  const profileSection=account.editingProfile?`<form class="account-profile-form" id="account-profile-form"><label><span>${t('Full name')}</span><input name="name" autocomplete="name" value="${escapeAccountValue(profile.name)}" required></label><label><span>${t('Email address')}</span><input name="email" type="email" autocomplete="email" value="${escapeAccountValue(profile.email)}" required></label><label><span>${t('Phone number')}</span><input name="phone" type="tel" autocomplete="tel" value="${escapeAccountValue(profile.phone)}" required></label><div class="account-form-actions"><button class="button-primary" type="submit">${t('Save changes')}</button><button class="button-secondary" type="button" data-account-action="cancel-profile">${t('Cancel')}</button></div></form>`:`<div class="account-profile-details"><div><span>${t('Full name')}</span><strong>${escapeAccountValue(profile.name)}</strong></div><div><span>${t('Email address')}</span><strong>${escapeAccountValue(profile.email)}</strong></div><div><span>${t('Phone number')}</span><strong>${escapeAccountValue(profile.phone)}</strong></div><button class="account-outline-button" type="button" data-account-action="edit-profile">${icon('edit',15)} ${t('Edit profile')}</button></div>`;
  const addresses=checkout.addresses.length?`<div class="account-address-list">${checkout.addresses.map(address=>`<article class="account-address-card ${address.isDefault?'is-default':''}"><div class="account-address-card-top"><span class="account-address-label">${t(address.label||'Other')}</span>${address.isDefault?`<span class="account-default-badge">${icon('check',12)} ${t('Default address')}</span>`:''}</div><strong>${escapeAccountValue(address.name)}</strong><span class="account-address-phone">${escapeAccountValue(address.phone)}</span><p>${escapeAccountValue(address.street)}, ${escapeAccountValue(address.ward)}, ${escapeAccountValue(address.city)}</p><div class="account-address-actions"><button type="button" data-account-action="edit-address" data-id="${escapeAccountValue(address.id)}">${t('Edit address')}</button>${!address.isDefault?`<button type="button" data-account-action="set-default" data-id="${escapeAccountValue(address.id)}">${t('Set as default')}</button>`:''}<button class="account-remove-link" type="button" data-account-action="remove-address" data-id="${escapeAccountValue(address.id)}">${t('Remove address')}</button></div></article>`).join('')}</div>`:`<div class="account-address-empty"><span class="account-empty-pin">${icon('pin',20)}</span><div><strong>${t('No saved addresses yet')}</strong><p>${t('Add a delivery address to make checkout quicker.')}</p></div></div>`;
  return `<section class="account-welcome"><div class="account-welcome-mark">${escapeAccountValue(profile.name.split(/\s+/).map(part=>part[0]).slice(0,2).join('').toUpperCase())}</div><div class="account-welcome-copy"><p class="eyebrow">${t('YOUR SHOPHUB ACCOUNT')}</p><h2>${t('Welcome back, {name}',{name:escapeAccountValue(profile.name)})}</h2><p>${t('Manage your details, delivery addresses, and saved finds.')}</p></div><div class="account-member-chip"><span>${icon('sparkle',15)} ${t('ShopHub member')}</span><small>${t('Member since')} ${t('August 2024')}</small></div></section><section class="account-quick-links" aria-label="${t('Account overview')}"><a class="account-quick-card account-orders-quick" href="/orders"><span class="account-quick-icon">${icon('bag',19)}</span><span><small>${t('Orders')}</small><strong>${orders.length} ${t('recent orders')}</strong></span><span class="account-quick-arrow">${icon('arrow',16)}</span></a><a class="account-quick-card account-wishlist-quick" href="/wishlist"><span class="account-quick-icon">${icon('heart',19)}</span><span><small>${t('Wishlist')}</small><strong>${savedCount} ${t('saved products')}</strong></span><span class="account-quick-arrow">${icon('arrow',16)}</span></a><a class="account-quick-card account-address-quick" href="#account-addresses"><span class="account-quick-icon">${icon('pin',19)}</span><span><small>${t('Delivery addresses')}</small><strong>${checkout.addresses.length} ${t('saved addresses')}</strong></span><span class="account-quick-arrow">${icon('arrow',16)}</span></a></section><div class="account-main-grid"><section class="account-panel account-profile-panel"><div class="account-panel-heading"><span class="account-section-icon">${icon('user',18)}</span><div><p class="eyebrow">${t('Account overview')}</p><h2>${t('Profile information')}</h2></div></div>${profileSection}</section><section class="account-panel account-preferences-panel"><div class="account-panel-heading"><span class="account-section-icon">${icon('settings',18)}</span><div><p class="eyebrow">${t('YOUR SHOPHUB ACCOUNT')}</p><h2>${t('Account preferences')}</h2></div></div><div class="account-preference-row"><span class="account-preference-icon">${icon('globe',17)}</span><span><strong>${t('Language preference')}</strong><small>${t('Change language using the control in the header.')}</small></span><b>${getLanguage()==='vi'?'VI':'EN'}</b></div><label class="account-preference-row account-notification-row"><span class="account-preference-icon">${icon('bell',17)}</span><span><strong>${t('Order updates')}</strong><small>${t('Receive local order and delivery updates in this prototype.')}</small></span><input type="checkbox" data-account-notifications ${account.notifications?'checked':''}><span class="account-toggle" aria-hidden="true"></span></label><p class="account-prototype-note">${icon('info',14)} ${t('Preferences are saved for this browser session only.')}</p></section></div><section class="account-panel account-addresses-panel" id="account-addresses"><div class="account-addresses-heading"><div class="account-panel-heading"><span class="account-section-icon">${icon('pin',18)}</span><div><p class="eyebrow">${t('YOUR DELIVERY DETAILS')}</p><h2>${t('Saved addresses')}</h2></div><span class="account-address-count">${checkout.addresses.length}</span></div><button class="account-add-address" type="button" data-account-action="add-address" ${addressStateOpen(account)?'disabled':''}>${icon('plus',16)} ${t('Add address')}</button></div>${addresses}${accountAddressForm(checkout,account)}</section>`;
}
function addressStateOpen(account=readAccountState()) { return Boolean(account.addressForm); }
function accountPage() {
  const account=readAccountState();
  readAccountCheckoutState();
  document.title=`${t('My account')} — ShopHub`;
  return `${header('account')}<main class="account-page page-width"><div class="account-breadcrumb"><a href="/">${t('Discover')}</a>${icon('chevron',13)}<span>${t('My account')}</span></div><header class="account-page-heading"><div><p class="eyebrow">${t('YOUR SHOPHUB ACCOUNT')}</p><h1>${t('My account')}</h1></div><a href="/orders">${t('View all orders')} ${icon('arrow',15)}</a></header><div id="account-content">${accountContent()}</div></main>${footer()}`;
}
function renderCheckoutContent() {
  const state = readCheckoutState();
  const cart = readCart();
  const cartSummary = cartTotals(cart);
  const groups = cartSummary.groups.filter(group => group.items.length).map((group, index) => ({
    ...group,
    key: `shop-${index}`,
    method: state.shipping[group.shop] || 'standard',
    shipping: checkoutShipping(group, state.shipping[group.shop] || 'standard'),
  }));
  const selectedAddress = state.addresses.find(address => address.id === state.selectedAddress);
  const shippingTotal = groups.reduce((sum, group) => sum + group.shipping, 0);
  const voucherTotal = groups.reduce((sum, group) => sum + (cart.vouchers.includes(group.shop) && group.subtotal >= 80 ? group.subtotal * .1 : 0), 0);
  const grandTotal = Math.max(0, cartSummary.subtotal - cartSummary.compare - voucherTotal + shippingTotal);

  if (!cartSummary.selected.length) return `<section class="checkout-empty"><span class="checkout-empty-icon">${icon('cart',27)}</span><p class="eyebrow">${t('Checkout')}</p><h2>${t('Checkout is unavailable')}</h2><p>${t('Choose at least one cart item to continue.')}</p><a class="button-primary" href="/cart">${t('Return to cart')} ${icon('arrow',16)}</a></section>`;
  if (state.success) return `<section class="checkout-success"><span class="checkout-success-icon">${icon('check',28)}</span><p class="eyebrow">${t('Secure checkout preview')}</p><h2>${t('Checkout preview complete')}</h2><p>${t('Your checkout preview is ready.')}</p><div class="checkout-success-note">${t('No order was created and no payment was taken.')}</div><div class="checkout-success-meta"><span>${t('Order details by shop')}</span><strong>${groups.length} ${t(groups.length === 1 ? '1 shop' : 'shops')} · ${cartSummary.units} ${t('items')}</strong></div><a class="button-primary" href="/products">${t('Continue exploring')} ${icon('arrow',16)}</a><a class="checkout-return-link" href="/cart">${t('Back to cart')}</a></section>`;

  const addressForm = state.addressForm ? (() => {
    const existing = state.addresses.find(address => address.id === state.addressForm);
    const values = existing || { name: '', phone: '', street: '', ward: '', city: '' };
    return `<form class="checkout-address-form" id="checkout-address-form"><label><span>${t('Recipient full name')}</span><input name="name" autocomplete="name" value="${values.name}" required></label><label><span>${t('Phone number')}</span><input name="phone" type="tel" autocomplete="tel" value="${values.phone}" required></label><label class="address-wide"><span>${t('Street address')}</span><input name="street" autocomplete="street-address" value="${values.street}" required></label><label><span>${t('Ward / district')}</span><input name="ward" value="${values.ward}" required></label><label><span>${t('City / province')}</span><input name="city" autocomplete="address-level1" value="${values.city}" required></label><div class="address-form-actions"><button class="button-primary" type="button" data-checkout-action="save-address">${t('Save address')}</button><button class="button-secondary" type="button" data-checkout-action="cancel-address">${t('Cancel')}</button></div></form>`;
  })() : `<div class="checkout-address-list">${state.addresses.map(address => `<article class="checkout-address-card ${address.id === state.selectedAddress ? 'is-selected' : ''}"><label class="checkout-address-choice"><input type="radio" name="checkout-address" value="${address.id}" ${address.id === state.selectedAddress ? 'checked' : ''}><span class="checkout-radio"></span><span class="checkout-address-copy"><strong>${address.name}</strong><span>${address.phone}</span><span>${address.street}, ${address.ward}, ${address.city}</span></span></label><span class="checkout-address-label">${t(address.label)}</span><button class="checkout-address-edit" type="button" data-checkout-action="edit-address" data-id="${address.id}" aria-label="${t('Edit address')}: ${address.name}">${t('Edit address')}</button></article>`).join('')}<button class="checkout-add-address" type="button" data-checkout-action="add-address">${icon('plus',17)} ${t('Add a new address')}</button></div>`;

  const addressSection = `<section class="checkout-section"><div class="checkout-section-heading"><span class="checkout-section-number">01</span><div><h2>${t('Shipping details')}</h2><p>${t('Choose a delivery address')}</p></div></div>${addressForm}</section>`;
  const orderSections = `<section class="checkout-section"><div class="checkout-section-heading"><span class="checkout-section-number">02</span><div><h2>${t('Your order')}</h2><p>${t('Only items selected in your cart are included.')}</p></div><a class="checkout-edit-cart" href="/cart">${t('Back to cart')}</a></div><div class="checkout-shop-groups">${groups.map(group => {
    const voucherActive = cart.vouchers.includes(group.shop);
    const voucherEligible = group.shop === 'Sunday Objects' && group.subtotal >= 80;
    return `<section class="checkout-shop-group"><header class="checkout-shop-heading"><span class="shop-avatar">${group.shop.split(' ').map(part => part[0]).join('').slice(0,2)}</span><div><a href="/products?shop=${encodeURIComponent(group.shop)}">${group.shop} ${icon('external',13)}</a><small>${t('Verified independent shop')}</small></div><span class="checkout-shop-count">${group.items.reduce((sum, row) => sum + row.item.qty, 0)} ${t('items')}</span></header><div class="checkout-products">${group.items.map(({ item, product }) => `<article class="checkout-line"><img src="${photo(product.image,180)}" alt="${product.alt}"><div class="checkout-product-copy"><strong>${product.name}</strong><span>${item.variant}</span><small>${t('Unit price')}: ${dollars(product.price)}${product.old ? ` <s>${dollars(product.old)}</s>` : ''}</small></div><div class="checkout-quantity"><span>${t('Quantity')}</span><div class="quantity-control"><button type="button" aria-label="Decrease ${product.name} quantity" data-checkout-action="quantity" data-id="${product.id}" data-delta="-1" ${item.qty <= 1 ? 'disabled' : ''}>−</button><output>${item.qty}</output><button type="button" aria-label="Increase ${product.name} quantity" data-checkout-action="quantity" data-id="${product.id}" data-delta="1" ${item.qty >= 99 ? 'disabled' : ''}>+</button></div></div><div class="checkout-line-total"><span>${t('Line total')}</span><strong>${dollars(product.price * item.qty)}</strong></div></article>`).join('')}</div><div class="checkout-shipping"><div class="checkout-subhead"><strong>${t('Shipping method')}</strong><small>${t('Delivery option')}</small></div><div class="checkout-shipping-options"><label class="checkout-option ${group.method === 'standard' ? 'is-selected' : ''}"><input type="radio" name="${group.key}-shipping" value="standard" data-shipping="${group.shop}" ${group.method === 'standard' ? 'checked' : ''}><span class="checkout-radio"></span><span><strong>${t('Standard delivery')}</strong><small>${t('Arrives in 3–5 business days')}</small></span><b>${group.subtotal >= 75 ? t('Free') : dollars(5.95)}</b></label><label class="checkout-option ${group.method === 'express' ? 'is-selected' : ''}"><input type="radio" name="${group.key}-shipping" value="express" data-shipping="${group.shop}" ${group.method === 'express' ? 'checked' : ''}><span class="checkout-radio"></span><span><strong>${t('Express delivery')}</strong><small>${t('Arrives in 1–2 business days')}</small></span><b>${dollars(9.95)}</b></label></div></div>${group.shop === 'Sunday Objects' ? `<div class="checkout-voucher ${voucherActive && voucherEligible ? 'is-applied' : ''}"><span class="voucher-icon">${icon('gift',17)}</span><div><strong>${t('Shop voucher')}</strong><small>${voucherEligible ? t('10% off when you spend $80') : t('Spend $80 or more to use this voucher.')}</small><span class="checkout-voucher-state">${voucherActive && voucherEligible ? t('Voucher applied') : t('Not applied')}</span></div><button type="button" data-checkout-action="voucher" data-shop="${group.shop}" ${voucherEligible || voucherActive ? '' : 'disabled'}>${voucherActive ? t('Remove voucher') : t('Apply voucher')}</button></div>` : ''}</section>`;
  }).join('')}</div></section>`;
  const paymentSection = `<section class="checkout-section"><div class="checkout-section-heading"><span class="checkout-section-number">03</span><div><h2>${t('Payment method')}</h2><p>${t('Review your selections before placing this demo order.')}</p></div></div><div class="checkout-payment-options">${[
    ['cod','card','Cash on Delivery','Pay when your order arrives.'],
    ['card','card','Mock card payment','Demo only — no card details needed.'],
    ['wallet','bag','Mock e-wallet','Demo only — no wallet connection.'],
  ].map(([value, iconName, label, description]) => `<label class="checkout-payment-option ${state.payment === value ? 'is-selected' : ''}"><input type="radio" name="payment-method" value="${value}" data-payment ${state.payment === value ? 'checked' : ''}><span class="checkout-radio"></span><span class="checkout-payment-icon">${icon(iconName,19)}</span><span><strong>${t(label)}</strong><small>${t(description)}</small></span></label>`).join('')}</div></section>`;
  const addressReady = selectedAddress && ['name','phone','street','ward','city'].every(key => selectedAddress[key]?.trim());
  const summarySection = `<aside class="checkout-summary"><div class="checkout-summary-heading"><div><p class="eyebrow">${t('Secure checkout preview')}</p><h2>${t('Order summary')}</h2></div><span>${groups.length} ${t(groups.length === 1 ? '1 shop' : 'shops')}</span></div><div class="checkout-summary-shops">${groups.map(group => `<div><span>${group.shop}</span><strong>${group.shipping ? dollars(group.shipping) : t('Free')}</strong></div>`).join('')}</div><div class="checkout-summary-lines"><div><span>${t('Items subtotal')}</span><strong>${dollars(cartSummary.subtotal)}</strong></div>${cartSummary.compare ? `<div><span>${t('Sale savings')}</span><strong>−${dollars(cartSummary.compare)}</strong></div>` : ''}${voucherTotal ? `<div><span>${t('Voucher discount')}</span><strong>−${dollars(voucherTotal)}</strong></div>` : ''}<div><span>${t('Shipping')}</span><strong>${shippingTotal ? dollars(shippingTotal) : t('Free')}</strong></div></div><div class="checkout-summary-total"><span>${t('Estimated total')}</span><strong>${dollars(grandTotal)}</strong></div><button class="checkout-place-order" type="button" data-checkout-action="place-order" ${addressReady && !state.addressForm ? '' : 'disabled'}>${icon('check',18)} ${t('Place order')} ${icon('arrow',16)}</button><p class="checkout-summary-note">${t('No order was created and no payment was taken.')}</p><a class="checkout-return-link" href="/cart">${icon('arrow',14)} ${t('Back to cart')}</a></aside>`;
  return `<div class="checkout-layout"><div class="checkout-main-column">${addressSection}${orderSections}${paymentSection}</div>${summarySection}</div>`;
}

const ORDERS_KEY = 'shophub-orders-v1';
const orderStatuses = ['all','pending','confirmed','processing','shipping','delivered','cancelled'];
const sampleOrders = [
  { id:'SH-260924-5816', checkoutId:'CK-260924-1028', date:'2026-09-24', shop:'North & Tone', status:'shipping', tracking:'NT-8042-7719', items:[{id:'studio-headphones',qty:1,variant:'Sand · Wireless'}] },
  { id:'SH-260924-5817', checkoutId:'CK-260924-1028', date:'2026-09-24', shop:'Marlow Goods', status:'processing', items:[{id:'everyday-tote',qty:1,variant:'Cognac · Large'},{id:'leather-wallet',qty:1,variant:'Chestnut · Standard'}] },
  { id:'SH-260922-4301', checkoutId:'CK-260922-7763', date:'2026-09-22', shop:'Sunday Objects', status:'confirmed', items:[{id:'ceramic-vase',qty:2,variant:'Oat · 8.5 in'}] },
  { id:'SH-260921-2844', checkoutId:'CK-260921-3305', date:'2026-09-21', shop:'Common Ground', status:'pending', items:[{id:'cloud-runner',qty:1,variant:'Chalk · US 8'}] },
  { id:'SH-260916-9028', checkoutId:'CK-260916-2210', date:'2026-09-16', shop:'Wilder Home', status:'delivered', reviewed:false, items:[{id:'linen-throw',qty:1,variant:'Sage · 55 × 75 in'}] },
  { id:'SH-260913-1182', checkoutId:'CK-260913-5512', date:'2026-09-13', shop:'Kindred Supply', status:'delivered', reviewed:true, items:[{id:'weekend-sunglasses',qty:1,variant:'Tortoise · Standard'},{id:'bloom-bottle',qty:1,variant:'Clear / moss · 20 oz'}] },
  { id:'SH-260909-6620', checkoutId:'CK-260909-0418', date:'2026-09-09', shop:'Sunday Objects', status:'cancelled', items:[{id:'pour-over-set',qty:1,variant:'Ivory · Standard'}] },
  { id:'SH-260903-5177', checkoutId:'CK-260903-8911', date:'2026-09-03', shop:'North & Tone', status:'delivered', reviewed:false, items:[{id:'wireless-speaker',qty:1,variant:'Forest · Standard'}] },
];
function readOrders() {
  try {
    const saved = sessionStorage.getItem(ORDERS_KEY);
    if (saved !== null) { const parsed = JSON.parse(saved); return Array.isArray(parsed) ? parsed : []; }
    sessionStorage.setItem(ORDERS_KEY, JSON.stringify(sampleOrders));
  } catch { /* The prototype remains usable with its in-memory sample list. */ }
  return sampleOrders.map(order => ({...order,items:order.items.map(item=>({...item}))}));
}
function writeOrders(orders) { try { sessionStorage.setItem(ORDERS_KEY,JSON.stringify(orders)); } catch { /* Local state still updates for this page load. */ } }
function orderProduct(item) { return products.find(product=>product.id===item.id) || products[0]; }
function orderAmounts(order) {
  const subtotal=order.items.reduce((sum,item)=>sum+orderProduct(item).price*item.qty,0);
  const savings=order.items.reduce((sum,item)=>{const product=orderProduct(item);return sum+Math.max(0,product.old-product.price)*item.qty;},0);
  const voucher=Number(order.voucherDiscount ?? (order.shop==='Sunday Objects'&&subtotal>=80?subtotal*.1:0));
  const shipping=Number(order.shippingFee ?? (order.status==='cancelled'?0:subtotal>=75?0:5.95));
  return {subtotal,savings,voucher,shipping,total:Math.max(0,subtotal-voucher+shipping)};
}
function orderTotal(order) { return orderAmounts(order).total; }
function orderDate(date) { return new Intl.DateTimeFormat(getLanguage()==='vi'?'vi-VN':'en-US',{year:'numeric',month:'short',day:'numeric'}).format(new Date(`${date}T12:00:00`)); }
function orderIsoDateOffset(date,days) { const value=new Date(`${date}T12:00:00`);value.setDate(value.getDate()+days);return value.toISOString().slice(0,10); }
function orderDateOffset(date,days) { return orderDate(orderIsoDateOffset(date,days)); }
function orderStatusLabel(status) { return t(status[0].toUpperCase()+status.slice(1)); }
function orderShipping(order) {
  const recipients={
    'North & Tone':{name:'Alex Morgan',phone:'+1 (415) 555-0138',address:'1218 Oak Street, Apt 4B, Portland, OR 97205'},
    'Marlow Goods':{name:'Jamie Rivera',phone:'+1 (503) 555-0174',address:'88 NW Alder Avenue, Portland, OR 97209'},
    'Sunday Objects':{name:'Taylor Chen',phone:'+1 (212) 555-0146',address:'42 Orchard Lane, Apt 2, Brooklyn, NY 11211'},
    'Common Ground':{name:'Riley Brooks',phone:'+1 (206) 555-0182',address:'905 Pine Street, Seattle, WA 98101'},
    'Wilder Home':{name:'Morgan Lee',phone:'+1 (415) 555-0191',address:'670 Valencia Street, San Francisco, CA 94110'},
    'Kindred Supply':{name:'Casey Parker',phone:'+1 (312) 555-0160',address:'19 North Street, Chicago, IL 60610'},
  };
  return { ...(recipients[order.shop]||recipients['North & Tone']), method:order.shippingMethod||(order.status==='shipping'?'Express delivery':'Standard delivery'), fee:orderAmounts(order).shipping };
}
function orderPayment(order) {
  const method=order.paymentMethod||(order.status==='shipping'||order.status==='pending'?'Cash on Delivery':order.status==='cancelled'?'Mock card payment':order.shop==='Kindred Supply'?'Mock e-wallet':'Mock card payment');
  const status=order.paymentStatus||(order.status==='cancelled'?'Not charged (sample)':order.status==='pending'?'Awaiting confirmation':method==='Cash on Delivery'?'Payment due on delivery':order.status==='confirmed'||order.status==='processing'?'Payment authorized (sample)':'Paid (sample)');
  return {method,status,reference:order.paymentReference||`PAY-${order.id}`};
}
function orderLine(order,item,index) {
  const product=orderProduct(item);
  return `<div class="orders-item"><a class="orders-item-image" href="/products/${product.id}" tabindex="-1"><img src="${photo(product.image,180)}" alt="${product.alt}" loading="lazy"></a><div class="orders-item-copy"><a class="orders-item-name" href="/products/${product.id}">${product.name}</a><span>${t('Variant')}: ${item.variant}</span><span>${t('Quantity')}: ${item.qty}</span></div><div class="orders-item-price"><small>${t('Unit price')}</small><strong>${dollars(product.price)}</strong><span>${t('Line total')}: ${dollars(product.price*item.qty)}</span></div></div>`;
}
function renderOrderCard(order) {
  const total=orderTotal(order); const itemCount=order.items.reduce((sum,item)=>sum+item.qty,0);
  const actions=[];
  actions.push(`<a class="orders-action orders-action-secondary" href="/orders/${encodeURIComponent(order.id)}">${t('View order')}</a>`);
  if(order.status==='shipping') actions.push(`<button class="orders-action orders-action-secondary" type="button" data-order-action="track" data-id="${order.id}">${t('Track order')}</button>`);
  if(['pending','confirmed'].includes(order.status)) actions.push(`<button class="orders-action orders-action-quiet" type="button" data-order-action="cancel" data-id="${order.id}">${t('Cancel order')}</button>`);
  if(order.status==='delivered') {
    actions.push(`<button class="orders-action orders-action-secondary" type="button" data-order-action="buy-again" data-id="${order.id}">${t('Buy again')}</button>`);
    actions.push(`<button class="orders-action orders-action-quiet" type="button" data-order-action="review" data-id="${order.id}" ${order.reviewed?'disabled':''}>${t(order.reviewed?'Review submitted':'Leave a review')}</button>`);
  }
  return `<article class="orders-card"><div class="orders-card-head"><div class="orders-id-block"><span class="orders-label">${t('Order ID')}</span><a href="/orders/${encodeURIComponent(order.id)}" class="orders-id">${order.id}</a><span class="orders-date">${t('Placed on')} ${orderDate(order.date)}</span></div><span class="orders-status orders-status-${order.status}"><i></i>${orderStatusLabel(order.status)}</span></div><div class="orders-shop-row"><span class="orders-shop-avatar">${order.shop.slice(0,1)}</span><a href="/products?shop=${encodeURIComponent(order.shop)}">${order.shop}</a><span class="orders-shop-caption">${t('Seller order')}</span><span class="orders-checkout-ref">${t('Checkout')}: ${order.checkoutId}</span></div><div class="orders-items">${order.items.map((item,index)=>orderLine(order,item,index)).join('')}</div><div class="orders-card-total"><span>${itemCount} ${t(itemCount===1?'item':'items')} · ${t('Order total')}</span><strong>${dollars(total)}</strong></div><div class="orders-card-foot"><small>${t('Packed and shipped by')} ${order.shop}</small><div class="orders-actions">${actions.join('')}</div></div></article>`;
}
function ordersEmpty(noOrders=false) {
  return `<section class="orders-empty"><span class="orders-empty-icon">${icon(noOrders?'bag':'search',26)}</span><p class="eyebrow">${noOrders?t('A fresh start'):t('No matches found')}</p><h2>${t(noOrders?'No orders yet':'No orders match your search')}</h2><p>${t(noOrders?'Your ShopHub orders will show up here once you find something you love.':'Try another order ID, product, shop, or status filter.')}</p>${noOrders?`<button class="button-primary" type="button" data-order-action="restore-samples">${t('Restore sample orders')}</button>`:`<button class="orders-action orders-action-secondary" type="button" data-order-action="clear-search">${t('Clear search and filters')}</button>`}<a class="orders-empty-link" href="/products">${t('Return to shopping')} ${icon('arrow',15)}</a></section>`;
}
function orderListPage() {
  const orders=readOrders(); const params=new URLSearchParams(location.search); const active=params.get('status')||'all'; const query=params.get('q')||'';
  const matched=orders.filter(order=>(active==='all'||order.status===active)&&(!query||`${order.id} ${order.checkoutId} ${order.shop} ${order.items.map(item=>orderProduct(item).name).join(' ')}`.toLowerCase().includes(query.toLowerCase()))).sort((a,b)=>b.date.localeCompare(a.date));
  document.title=`${t('My Orders')} — ShopHub`;
  return `${header()}<main class="orders-page page-width"><div class="orders-crumb"><a href="/">${t('Discover')}</a>${icon('chevron',13)}<span>${t('My Orders')}</span></div><section class="orders-heading"><div><p class="eyebrow">${t('YOUR SHOPHUB ACCOUNT')}</p><h1>${t('My Orders')}</h1><p>${t('Every shop sends its own order, so each one has its own updates.')}</p></div><div class="orders-count"><strong>${orders.length}</strong><span>${t(orders.length===1?'order':'orders')} ${t('in your history')}</span></div></section><section class="orders-tools" aria-label="${t('Order search and filters')}"><form class="orders-search" id="orders-search" role="search">${icon('search',18)}<label class="sr-only" for="order-query">${t('Search orders')}</label><input id="order-query" name="q" type="search" value="${query.replaceAll('&','&amp;').replaceAll('"','&quot;')}" placeholder="${t('Search by order ID, product, or shop')}" autocomplete="off"><button type="submit">${t('Search')}</button>${query?`<button class="orders-search-clear" type="button" data-order-action="clear-search" aria-label="${t('Clear search')}">${icon('close',15)}</button>`:''}</form><div class="orders-status-filter" role="group" aria-label="${t('Filter orders by status')}">${orderStatuses.map(status=>{const count=status==='all'?orders.length:orders.filter(order=>order.status===status).length;return `<button type="button" class="orders-filter ${active===status?'is-active':''}" data-order-status="${status}" aria-pressed="${active===status}">${t(status==='all'?'All orders':status[0].toUpperCase()+status.slice(1))}<span>${count}</span></button>`;}).join('')}</div></section><div class="orders-results-heading"><h2>${active==='all'?t('Recent orders'):orderStatusLabel(active)}</h2><span>${matched.length} ${t(matched.length===1?'order':'orders')}</span></div><section class="orders-list" aria-live="polite">${orders.length===0?ordersEmpty(true):matched.length?matched.map(renderOrderCard).join(''):ordersEmpty(false)}</section><div class="orders-bottom-link"><span>${t('Need something else?')}</span><a href="/cart">${t('Go to your cart')} ${icon('arrow',14)}</a><a href="/products">${t('Keep shopping')} ${icon('arrow',14)}</a></div></main>${footer()}`;
}
function orderProgress(order) {
  if(order.status==='cancelled') return `<div class="detail-cancelled-state"><span class="detail-cancelled-icon">${icon('close',17)}</span><div><strong>${t('This order was cancelled')}</strong><small>${t('Cancelled on')} ${orderDate(order.cancelledDate||orderIsoDateOffset(order.date,1))}</small></div></div><ol class="detail-stepper detail-stepper-cancelled" aria-label="${t('Order progress')}"><li class="is-complete"><span class="detail-step-dot">${icon('check',13)}</span><span>${t('Pending')}</span></li>${order.cancelledAfterConfirmation?`<li class="is-complete"><span class="detail-step-dot">${icon('check',13)}</span><span>${t('Confirmed')}</span></li>`:''}<li class="is-cancelled" aria-current="step"><span class="detail-step-dot">${icon('close',12)}</span><span>${t('Cancelled')}</span></li></ol>`;
  const steps=['Pending','Confirmed','Processing','Shipping','Delivered']; const active=steps.findIndex(label=>label.toLowerCase()===order.status);
  return `<ol class="detail-stepper" aria-label="${t('Order progress')}">${steps.map((label,index)=>{const complete=index<active,current=index===active;return `<li class="${complete?'is-complete':''} ${current?'is-current':''}" ${current?'aria-current="step"':''}><span class="detail-step-dot">${complete?icon('check',13):index+1}</span><span>${t(label)}</span>${index<=active?`<small>${orderDateOffset(order.date,index)}</small>`:''}</li>`;}).join('')}</ol>`;
}
function orderTracking(order) {
  const delivered=order.status==='delivered';const active=delivered?5:3;
  const milestones=['Order confirmed','Preparing your order','Handed to carrier','In transit','Out for delivery','Delivered'];
  return `<section class="order-detail-panel detail-tracking-panel" id="tracking"><div class="detail-panel-heading"><span class="detail-panel-icon">${icon('truck',18)}</span><div><p class="eyebrow">${t('SHIPMENT UPDATES')}</p><h2>${t('Tracking information')}</h2></div><span class="detail-tracking-code">${t('Tracking ID')} <strong>${order.tracking||`TR-${order.id.slice(-6)}`}</strong></span></div><div class="detail-tracking-current"><span class="detail-live-dot"></span><div><strong>${t(milestones[active])}</strong><small>${t('Latest sample update')} · ${order.shop==='North & Tone'?'Portland Distribution Center':'Local sorting center'}</small></div><span>${orderDateOffset(order.date,active)}</span></div><ol class="detail-tracking-list">${milestones.map((milestone,index)=>{const complete=index<active, current=index===active;return `<li class="${complete?'is-complete':''} ${current?'is-current':''}"><span class="detail-tracking-marker">${complete?icon('check',11):''}</span><div><strong>${t(milestone)}</strong>${index<=active?`<small>${orderDateOffset(order.date,index)} · ${index===active?t('Latest update'):t('Completed')}</small>`:`<small>${t('Not yet reached')}</small>`}</div></li>`;}).join('')}</ol><p class="detail-sample-note">${t('Tracking updates are sample data and do not reflect a live shipment.')}</p></section>`;
}
function renderOrderDetail(order) {
  const amounts=orderAmounts(order),shipping=orderShipping(order),payment=orderPayment(order);const itemCount=order.items.reduce((sum,item)=>sum+item.qty,0);
  const actionMarkup=order.status==='shipping'?`<a class="detail-action detail-action-primary" href="#tracking">${icon('truck',16)} ${t('Track order')}</a>`:['pending','confirmed'].includes(order.status)?`<button class="detail-action detail-action-danger" type="button" data-order-action="cancel" data-id="${order.id}">${icon('close',15)} ${t('Cancel order')}</button>`:['delivered','cancelled'].includes(order.status)?`<button class="detail-action detail-action-primary" type="button" data-order-action="buy-again" data-id="${order.id}">${icon('cart',16)} ${t('Buy again')}</button>${order.status==='delivered'?`<button class="detail-action detail-action-secondary" type="button" data-order-action="review" data-id="${order.id}" ${order.reviewed?'disabled':''}>${icon('star',15)} ${t(order.reviewed?'Review submitted':'Write a review')}</button>${order.reviewed?`<small class="detail-review-note">${t('Review saved in this prototype.')}</small>`:''}`:''}`:`<p class="detail-action-note">${t('Your shop is preparing this order. No action is needed right now.')}</p>`;
  const lineRows=order.items.map(item=>{const product=orderProduct(item);return `<article class="detail-product-row"><a class="detail-product-image" href="/products/${product.id}"><img src="${photo(product.image,240)}" alt="${product.alt}"></a><div class="detail-product-copy"><a href="/products/${product.id}" class="detail-product-name">${product.name}</a><span>${t('Variant')}: ${item.variant}</span><span>${t('Quantity')}: ${item.qty}</span></div><div class="detail-product-price"><small>${t('Unit price')}</small><strong>${dollars(product.price)}</strong><span>${t('Line total')}: ${dollars(product.price*item.qty)}</span></div></article>`;}).join('');
  document.title=`${t('Order details')} · ${order.id} — ShopHub`;
  return `${header()}<main class="order-detail-page page-width"><div class="order-detail-breadcrumb"><a href="/">${t('Discover')}</a>${icon('chevron',13)}<a href="/orders">${t('My Orders')}</a>${icon('chevron',13)}<span>${order.id}</span></div><header class="order-detail-heading"><div><p class="eyebrow">${t('SHOPHUB ORDER')}</p><h1>${t('Order details')}</h1><div class="order-detail-meta"><strong>${order.id}</strong><span>${t('Placed on')} ${orderDate(order.date)}</span><span>${t('Checkout')}: ${order.checkoutId}</span></div></div><div class="order-detail-heading-actions"><span class="orders-status orders-status-${order.status}"><i></i>${orderStatusLabel(order.status)}</span><a class="order-detail-back" href="/orders">${icon('arrow',15)} ${t('Back to My Orders')}</a></div></header><div class="detail-prototype-banner">${icon('sparkle',16)}<span><strong>${t('Prototype order record')}</strong>${t('This sample order is for demonstration. Payment and delivery updates are not live.')}</span></div><div class="order-detail-layout"><div class="order-detail-main"><section class="order-detail-panel detail-progress-panel"><div class="detail-panel-heading"><span class="detail-panel-icon">${icon('check',18)}</span><div><p class="eyebrow">${t('ORDER STATUS')}</p><h2>${t('Order progress')}</h2></div></div>${orderProgress(order)}</section><section class="order-detail-panel detail-products-panel"><div class="detail-panel-heading detail-products-heading"><span class="detail-panel-icon">${icon('bag',18)}</span><div><p class="eyebrow">${t('SELLER ORDER')}</p><h2>${t('Products in this order')}</h2></div><span class="detail-item-count">${itemCount} ${t(itemCount===1?'item':'items')}</span></div><div class="detail-shop-block"><span class="detail-shop-avatar">${order.shop.slice(0,1)}</span><div><a href="/products?shop=${encodeURIComponent(order.shop)}">${order.shop} ${icon('arrow',13)}</a><small>${t('Packed and shipped by')} ${order.shop}</small></div><span class="detail-shop-order-label">${t('Separate shop order')}</span></div><div class="detail-product-list">${lineRows}</div></section>${order.status==='shipping'?orderTracking(order):''}<section class="order-detail-panel detail-shipping-panel"><div class="detail-panel-heading"><span class="detail-panel-icon">${icon('pin',18)}</span><div><p class="eyebrow">${t('DELIVERY')}</p><h2>${t('Shipping information')}</h2></div><span class="detail-method-chip">${t(shipping.method)}</span></div><div class="detail-info-grid"><div class="detail-info-card"><span>${t('Recipient')}</span><strong>${shipping.name}</strong><small>${shipping.phone}</small></div><div class="detail-info-card detail-address-card"><span>${t('Delivery address')}</span><strong>${shipping.address}</strong></div><div class="detail-info-card"><span>${t('Shipping method')}</span><strong>${t(shipping.method)}</strong><small>${shipping.fee?dollars(shipping.fee):t('Free shipping')}</small></div></div></section><section class="order-detail-panel detail-payment-panel"><div class="detail-panel-heading"><span class="detail-panel-icon">${icon('card',18)}</span><div><p class="eyebrow">${t('PAYMENT RECORD')}</p><h2>${t('Payment information')}</h2></div></div><div class="detail-payment-grid"><div><span>${t('Payment method')}</span><strong>${t(payment.method)}</strong></div><div><span>${t('Payment status')}</span><strong class="detail-payment-state">${t(payment.status)}</strong></div><div><span>${t('Payment reference')}</span><strong class="detail-reference">${payment.reference}</strong></div></div><p class="detail-sample-note">${t('Prototype payment record only. No payment was processed.')}</p></section><section class="order-detail-help"><div class="detail-help-icon">${icon('help',19)}</div><div><h2>${t('Need help with this order?')}</h2><p>${t('Our support team can help with delivery or product questions.')}</p></div><button type="button" class="detail-action detail-action-secondary" data-order-action="help" aria-expanded="false" aria-controls="order-help-panel">${t('Get order help')}</button><div class="detail-help-panel" id="order-help-panel" hidden><strong>${t('We’re here to help')}</strong><p>${t('Share this order ID with ShopHub support:')} <b>${order.id}</b></p><small>${t('This support preview does not send a message.')}</small></div></section></div><aside class="order-detail-aside"><section class="order-detail-panel detail-summary-panel"><div class="detail-aside-heading"><p class="eyebrow">${t('ORDER TOTAL')}</p><h2>${t('Price summary')}</h2><span>${itemCount} ${t(itemCount===1?'item':'items')} · ${order.shop}</span></div><div class="detail-summary-lines"><div><span>${t('Items subtotal')}</span><strong>${dollars(amounts.subtotal)}</strong></div>${amounts.savings?`<div class="detail-saving-line"><span>${t('Sale savings')}</span><strong>−${dollars(amounts.savings)}</strong></div>`:''}${amounts.voucher?`<div class="detail-saving-line"><span>${t('Voucher discount')}</span><strong>−${dollars(amounts.voucher)}</strong></div>`:`<div><span>${t('Voucher discount')}</span><strong>${t('None applied')}</strong></div>`}<div><span>${t('Shipping')}</span><strong>${shipping.fee?dollars(shipping.fee):t('Free')}</strong></div></div>${amounts.savings?`<p class="detail-price-note">${t('Sale savings are already reflected in item prices.')}</p>`:''}<div class="detail-grand-total"><span>${t('Final order total')}</span><strong>${dollars(amounts.total)}</strong></div><p class="detail-summary-footnote">${t('Order totals are sample values for this prototype.')}</p></section><section class="order-detail-panel detail-actions-panel"><h2>${t('Order actions')}</h2><div class="detail-action-list">${actionMarkup}</div><a class="detail-all-orders-link" href="/orders">${t('View all orders')} ${icon('arrow',14)}</a></section><section class="detail-order-context"><span class="detail-context-icon">${icon('sparkle',17)}</span><div><strong>${t('One shop, one order')}</strong><p>${t('Each seller packs and ships its own part of a marketplace checkout.')}</p></div></section></aside></div></main>${footer()}`;
}
function orderPreviewPage() {
  const id=decodeURIComponent(location.pathname.split('/').filter(Boolean).at(-1)); const order=readOrders().find(entry=>entry.id===id);
  if(!order){document.title=`${t('Order not found')} — ShopHub`;return `${header()}<main class="order-detail-page page-width"><a href="/orders" class="order-detail-back">${icon('arrow',15)} ${t('Back to My Orders')}</a><section class="detail-not-found"><span class="orders-empty-icon">${icon('bag',26)}</span><h1>${t('Order not found')}</h1><p>${t('This order is not in your current sample order history.')}</p><a class="button-primary order-preview-button" href="/orders">${t('Back to My Orders')}</a></section></main>${footer()}`;}
  return renderOrderDetail(order);
}

function detail() {
  const id = decodeURIComponent(location.pathname.split('/').filter(Boolean).at(-1)); const p = products.find(x=>x.id===id) || products[0]; document.title = `${p.name} — ShopHub`;
  return `${header()}<main class="detail-main page-width"><div class="breadcrumbs"><a href="/">Discover</a>${icon('chevron',14)}<a href="/products?category=${encodeURIComponent(p.category)}">${p.category}</a>${icon('chevron',14)}<span>${p.name}</span></div><section class="detail-layout"><div class="gallery"><div class="gallery-main"><img id="main-image" src="${photo(p.image,1200)}" alt="${p.alt}"><span class="product-flag">${p.flag}</span><button class="gallery-save save-button ${isWishlisted(p.id)?'is-saved':''}" type="button" data-action="save" data-name="${p.name}" data-id="${p.id}" aria-pressed="${isWishlisted(p.id)}" aria-label="Save ${p.name}">${icon('heart',19)}</button></div><div class="gallery-thumbs"><button class="thumb is-active" data-image="${photo(p.image,1200)}" aria-label="View product image 1"><img src="${photo(p.image,180)}" alt=""></button><button class="thumb" data-image="${photo('photo-1523275335684-37898b6baf30',1200)}" aria-label="View product image 2"><img src="${photo('photo-1523275335684-37898b6baf30',180)}" alt=""></button><button class="thumb" data-image="${photo('photo-1526170375885-4d8ecf77b99f',1200)}" aria-label="View product image 3"><img src="${photo('photo-1526170375885-4d8ecf77b99f',180)}" alt=""></button><button class="thumb" data-image="${photo('photo-1490312278390-ab64016e0aa9',1200)}" aria-label="View product image 4"><img src="${photo('photo-1490312278390-ab64016e0aa9',180)}" alt=""></button></div><div class="gallery-caption">${icon('sparkle',15)} A real little something, chosen with care.</div></div>
  <div class="product-detail-copy"><div class="detail-topline"><a href="/products?shop=${encodeURIComponent(p.shop)}">${p.shop} <span class="verified-badge">✓ Verified shop</span></a><button class="share-link" data-action="share">Share ${icon('external',15)}</button></div><h1>${p.name}</h1><div class="detail-rating"><span>${icon('star',16)} ${p.rating}</span><a href="#reviews">${p.reviews} reviews</a><i></i><span class="stock-dot"></span> In stock</div><div class="detail-price">${dollars(p.price)} ${p.old?`<s>${dollars(p.old)}</s><span class="sale-pill">Save ${Math.round((1-p.price/p.old)*100)}%</span>`:''}</div><p class="detail-description">${p.detail}</p><div class="detail-trust-row"><span>${icon('truck',17)} Ships free over $75</span><span>${icon('check',17)} Easy 30-day returns</span></div><div class="variant-picker"><div><strong>Color</strong><span id="selected-color">${p.color}</span></div><div class="swatches"><button class="swatch swatch-sand selected" aria-label="Sand color" aria-pressed="true" data-color="${p.color}"></button><button class="swatch swatch-sage" aria-label="Sage color" aria-pressed="false" data-color="Sage"></button><button class="swatch swatch-clay" aria-label="Clay color" aria-pressed="false" data-color="Clay"></button></div></div><div class="purchase-row"><div class="quantity-control"><button type="button" aria-label="Decrease quantity" data-action="qty-down">−</button><output id="quantity">1</output><button type="button" aria-label="Increase quantity" data-action="qty-up">+</button></div><button class="button-primary add-product" data-action="purchase" data-name="${p.name}" data-id="${p.id}">${icon('cart',18)} Add to bag</button><button class="buy-now" data-action="buy" data-name="${p.name}" data-id="${p.id}">Buy now ${icon('arrow',16)}</button></div><div class="delivery-card">${icon('truck',20)}<span><strong>A good thing is on its way.</strong><small>Order today and it ships from ${p.shop} in 1–2 business days.</small></span></div><div class="accordion-list"><details open><summary>Meet the maker <span>${icon('down',15)}</span></summary><p>${p.shop} is an independent studio making useful, lasting pieces in small batches. Every order is packed with care and ships directly from the maker.</p></details><details><summary>Shipping & returns <span>${icon('down',15)}</span></summary><p>Carefully packed and dispatched in 1–2 business days. Returns are welcome within 30 days of delivery.</p></details><details><summary>Details & care <span>${icon('down',15)}</span></summary><p>${p.detail} Keep it looking its best with the care notes included in your package.</p></details></div></div></section>
  <section class="specs-section"><div class="specs-story"><p class="eyebrow">THE LITTLE DETAILS</p><h2>Good design<br><em>lives in the details.</em></h2><p>${p.detail}</p></div><div class="spec-table">${p.specs.map(([a,b])=>`<div><span>${a}</span><strong>${b}</strong></div>`).join('')}</div></section>
  <section class="reviews-section" id="reviews"><div class="review-summary"><p class="eyebrow">KIND WORDS FROM CUSTOMERS</p><h2>It’s getting lots of love.</h2><div class="review-score"><strong>${p.rating}</strong><span>${icon('star',17)}${icon('star',17)}${icon('star',17)}${icon('star',17)}${icon('star',17)}<small>Based on ${p.reviews} reviews</small></span></div><div class="rating-bars">${[5,4,3,2,1].map((n,i)=>`<div><span>${n} star</span><i><b style="width:${[78,16,4,1,1][i]}%"></b></i><small>${[78,16,4,1,1][i]}%</small></div>`).join('')}</div></div><div class="review-cards"><article><span class="review-stars">★★★★★</span><p>“So happy I found this little shop. The quality is lovely and it feels even more special in person.”</p><strong>Jamie R.</strong><small>Verified buyer · 2 weeks ago</small></article><article><span class="review-stars">★★★★★</span><p>“Exactly what I hoped for. Thoughtful packaging, fast shipping, and the details are just right.”</p><strong>Priya M.</strong><small>Verified buyer · 1 month ago</small></article></div></section>
  <section class="product-section">${sectionTitle('GOES NICELY WITH','More good things to discover')}<div class="product-grid">${products.filter(x=>x.id!==p.id).slice(0,4).map(card).join('')}</div></section></main>${footer()}`;
}

const path = location.pathname; const app = document.querySelector('#app');
app.innerHTML = path === '/checkout' || path === '/checkout/' ? checkoutPage() : path === '/account' || path === '/account/' ? accountPage() : path === '/wishlist' || path === '/wishlist/' ? wishlistPage() : /^\/orders\/[^/]+\/?$/.test(path) ? orderPreviewPage() : path === '/orders' || path === '/orders/' ? orderListPage() : path.startsWith('/products/') ? detail() : path.startsWith('/products') ? listing() : path.startsWith('/cart') ? cartPage() : home();
const currentLanguage = getLanguage();
document.documentElement.lang = currentLanguage;
applyTranslations(app, currentLanguage);
syncWishlistButtons();
document.title = localizedPageTitle(path, location.search, currentLanguage) || translateText(document.title, currentLanguage);
const description = document.querySelector('meta[name="description"]');
if (description) description.content = localizedDescription(path, description.content, currentLanguage);
const searchQuery = new URLSearchParams(location.search).get('q');
if(searchQuery) document.querySelectorAll('.header-search input').forEach(input=>input.value=searchQuery);

const toast = document.querySelector('#toast-region'); let toastTimer;
function notify(message) { toast.innerHTML = `${icon('check',18)}<span>${translateText(message)}</span>`; toast.classList.add('is-visible'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2400); }
function syncWishlistButtons() {
  document.querySelectorAll('.save-button[data-id]').forEach(button=>{const saved=isWishlisted(button.dataset.id);button.classList.toggle('is-saved',saved);button.setAttribute('aria-pressed',String(saved));button.setAttribute('aria-label',`${t(saved?'Remove from wishlist':'Save to wishlist')} ${button.dataset.name||''}`.trim());});
}
let currentRows = [];
let currentPage = 1;
function showPage(page) {
  currentPage = Math.max(1, Math.min(page, Math.ceil(currentRows.length / 9)));
  const start = (currentPage - 1) * 9;
  document.querySelector('#result-grid').innerHTML = currentRows.slice(start, start + 9).map(card).join('');
  applyTranslations(document.querySelector('#result-grid'));
  document.querySelector('#shown-count').textContent = Math.min(start + 9, currentRows.length);
  const nav = document.querySelector('.pagination');
  nav.querySelector('[data-page="1"]').classList.toggle('page-current', currentPage === 1);
  nav.querySelector('[data-page="2"]').classList.toggle('page-current', currentPage === 2);
  nav.querySelectorAll('[data-page="1"],[data-page="2"]').forEach(button=>button.setAttribute('aria-current',String(Number(button.dataset.page)===currentPage?'page':'false')));
  nav.querySelector('[data-page="prev"]').disabled = currentPage === 1;
  nav.querySelector('[data-page="next"]').disabled = currentPage >= Math.ceil(currentRows.length / 9);
}
function updateResults() {
  const params = new URLSearchParams(location.search); const cat = [...document.querySelectorAll('input[name="category"]:checked')].map(e=>e.value); const shop = [...document.querySelectorAll('input[name="shop"]:checked')].map(e=>e.value); const rating = document.querySelector('input[name="rating"]:checked')?.value; const min = Number(document.querySelector('#min-price')?.value||0); const max = Number(document.querySelector('#max-price')?.value||9999); const query = params.get('q')||'';
  const rows = products.filter(p=>(!query||`${p.name} ${p.category} ${p.shop}`.toLowerCase().includes(query.toLowerCase()))&&(!cat.length||cat.includes(p.category))&&(!shop.length||shop.includes(p.shop))&&p.price>=min&&p.price<=max&&(!rating||Number(p.rating)>=Number(rating))&&(!params.has('deal')||p.old));
  const order=document.querySelector('#sort')?.value; if(order==='rating') rows.sort((a,b)=>Number(b.rating)-Number(a.rating)); if(order==='price-low') rows.sort((a,b)=>a.price-b.price); if(order==='price-high') rows.sort((a,b)=>b.price-a.price);
  currentRows=rows; currentPage=1; showPage(1); document.querySelector('#result-grid').hidden=false; document.querySelector('#result-count').textContent=rows.length; document.querySelector('#no-results').hidden=Boolean(rows.length); applyTranslations(document.querySelector('#no-results')); document.querySelector('.pagination').hidden=rows.length<=9;
}
document.addEventListener('change',e=>{
  if(e.target.matches('#sort,input[name="category"],input[name="shop"],input[name="rating"]')) updateResults();
  if(e.target.matches('[data-shipping]')){const state=readCheckoutState();state.shipping[e.target.dataset.shipping]=e.target.value;writeCheckoutState(state);refreshCheckout();}
  if(e.target.matches('[data-payment]')){const state=readCheckoutState();state.payment=e.target.value;writeCheckoutState(state);refreshCheckout();}
  if(e.target.matches('[name="checkout-address"]')){const state=readCheckoutState();state.selectedAddress=e.target.value;writeCheckoutState(state);refreshCheckout();}
  if(e.target.matches('[data-account-notifications]')){const account=readAccountState();account.notifications=e.target.checked;writeAccountState(account);}
  if(e.target.matches('[data-select-all],[data-shop-select],[data-item-select]')) {
    const cart=readCart();
    if(e.target.matches('[data-select-all]')) cart.items.forEach(item=>item.selected=e.target.checked);
    else if(e.target.matches('[data-shop-select]')) cart.items.filter(item=>products.find(p=>p.id===item.id)?.shop===e.target.dataset.shopSelect).forEach(item=>item.selected=e.target.checked);
    else {const item=cart.items.find(row=>row.id===e.target.dataset.itemSelect);if(item)item.selected=e.target.checked;}
    writeCart(cart);refreshCart();
  }
});
document.addEventListener('submit',e=>{
  if(e.target.matches('#orders-search')){e.preventDefault();const query=new FormData(e.target).get('q')?.toString().trim()||'';const params=new URLSearchParams(location.search);query?params.set('q',query):params.delete('q');const next=params.toString();location.href=`/orders${next?`?${next}`:''}`;}
  if(e.target.matches('#account-profile-form')){e.preventDefault();if(!e.target.reportValidity())return;const account=readAccountState();account.profile={...account.profile,...Object.fromEntries(new FormData(e.target))};account.editingProfile=false;writeAccountState(account);refreshAccount();notify(t('Profile saved'));}
  if(e.target.matches('#account-address-form')){e.preventDefault();if(!e.target.reportValidity())return;const account=readAccountState();const checkout=readAccountCheckoutState();const values=Object.fromEntries(new FormData(e.target));const makeDefault=values.makeDefault==='on';delete values.makeDefault;const existing=checkout.addresses.find(address=>address.id===account.addressForm);let address;if(existing){Object.assign(existing,values);address=existing;}else{address={...values,id:`address-${Date.now()}`,label:'Other',isDefault:false};checkout.addresses.push(address);}if(makeDefault||!checkout.addresses.some(item=>item.isDefault)){checkout.addresses=checkout.addresses.map(item=>({...item,isDefault:item.id===address.id}));}if(address.isDefault||checkout.addresses.length===1)checkout.selectedAddress=address.id;writeCheckoutState(checkout);account.addressForm=null;writeAccountState(account);refreshAccount();notify(t('Address saved'));}
});
function refreshCart(){
  const target=document.querySelector('#cart-content');if(!target)return;
  target.innerHTML=renderCartContent();
  applyTranslations(target);
  const cart=readCart();
  document.querySelector('#cart-line-count').textContent=cart.items.length;
  const all=document.querySelector('[data-select-all]');if(all){all.indeterminate=cart.items.some(i=>i.selected)&&!cart.items.every(i=>i.selected);}
  document.querySelectorAll('[data-shop-select]').forEach(box=>{const rows=cart.items.filter(item=>products.find(p=>p.id===item.id)?.shop===box.dataset.shopSelect);box.indeterminate=rows.some(item=>item.selected)&&!rows.every(item=>item.selected);});
  refreshBagCount();
}
function refreshWishlist(){
  const content=document.querySelector('#wishlist-content');if(!content)return;
  content.innerHTML=wishlistContent();applyTranslations(content);
  const count=readCart().saved.filter(row=>products.some(product=>product.id===row.id)).length;
  document.querySelector('#wishlist-count').innerHTML=wishlistCount(count);syncWishlistButtons();refreshBagCount();
}
function refreshAccount(){const target=document.querySelector('#account-content');if(!target)return;target.innerHTML=accountContent();applyTranslations(target);}
function refreshCheckout(){
  const target=document.querySelector('#checkout-content');if(!target)return;
  target.innerHTML=renderCheckoutContent();
  applyTranslations(target);
  refreshBagCount();
}
function addProductToCart(id,qty=1,variant=''){
  const product=products.find(item=>item.id===id);if(!product)return;
  const cart=readCart();const existing=cart.items.find(item=>item.id===id);
  if(existing){existing.qty=Math.min(99,existing.qty+qty);existing.selected=true;if(variant)existing.variant=`${variant} · Standard`;}
  else cart.items.push({id,qty,selected:true,variant:`${variant||product.color} · Standard`});
  cart.saved=cart.saved.filter(item=>item.id!==id);writeCart(cart);refreshBagCount();
}
if(path.startsWith('/cart'))refreshCart();
if(path==='/wishlist'||path==='/wishlist/')refreshWishlist();
if(path === '/checkout' || path === '/checkout/')refreshCheckout();
document.addEventListener('click',e=>{
  const languageButton=e.target.closest('[data-language]');
  if(languageButton){setLanguage(languageButton.dataset.language);location.reload();return;}
  const wishlistAction=e.target.closest('[data-wishlist-action]');
  if(wishlistAction){
    const cart=readCart();const id=wishlistAction.dataset.id;const product=products.find(row=>row.id===id);const kind=wishlistAction.dataset.wishlistAction;
    if(kind==='remove'){cart.saved=cart.saved.filter(row=>row.id!==id);writeCart(cart);refreshWishlist();notify(t('Item removed from your wishlist'));return;}
    if(kind==='add'&&product&&availabilityForProduct(id).status!=='out-of-stock'){addProductToCart(id,1,product.color);refreshWishlist();notify(t('A saved product is ready in your cart.'));return;}
    return;
  }
  const accountAction=e.target.closest('[data-account-action]');
  if(accountAction){
    const account=readAccountState();
    const checkout=readAccountCheckoutState();
    const kind=accountAction.dataset.accountAction;
    if(kind==='edit-profile')account.editingProfile=true;
    if(kind==='cancel-profile')account.editingProfile=false;
    if(kind==='add-address')account.addressForm='new';
    if(kind==='edit-address')account.addressForm=accountAction.dataset.id;
    if(kind==='cancel-address')account.addressForm=null;
    if(kind==='set-default'){
      checkout.addresses=checkout.addresses.map(address=>({...address,isDefault:address.id===accountAction.dataset.id}));
      checkout.selectedAddress=accountAction.dataset.id;writeCheckoutState(checkout);notify(t('Default address updated'));
    }
    if(kind==='remove-address'){
      const removing=checkout.addresses.find(address=>address.id===accountAction.dataset.id);
      checkout.addresses=checkout.addresses.filter(address=>address.id!==accountAction.dataset.id);
      if(removing?.isDefault&&checkout.addresses.length)checkout.addresses=checkout.addresses.map((address,index)=>({...address,isDefault:index===0}));
      const fallback=checkout.addresses.find(address=>address.isDefault)||checkout.addresses[0];
      if(checkout.selectedAddress===accountAction.dataset.id)checkout.selectedAddress=fallback?.id||'';
      if(account.addressForm===accountAction.dataset.id)account.addressForm=null;
      writeCheckoutState(checkout);notify(t('Address removed'));
    }
    writeAccountState(account);refreshAccount();return;
  }
  const orderFilter=e.target.closest('[data-order-status]');
  if(orderFilter){const params=new URLSearchParams(location.search);params.set('status',orderFilter.dataset.orderStatus);const next=params.toString();location.href=`/orders${next?`?${next}`:''}`;return;}
  const orderAction=e.target.closest('[data-order-action]');
  if(orderAction){
    const orders=readOrders();const order=orders.find(row=>row.id===orderAction.dataset.id);const kind=orderAction.dataset.orderAction;
    if(kind==='help'){const panel=document.querySelector('#order-help-panel');const expanded=panel?.hidden??true;if(panel)panel.hidden=!expanded;orderAction.setAttribute('aria-expanded',String(expanded));return;}
    if(kind==='clear-search'){location.href='/orders';return;}
    if(kind==='restore-samples'){writeOrders(sampleOrders);location.href='/orders';return;}
    if(!order)return;
    if(kind==='cancel'&&['pending','confirmed'].includes(order.status)){order.status='cancelled';writeOrders(orders);location.reload();return;}
    if(kind==='track'&&order.status==='shipping'){notify(`${t('Tracking preview')}: ${order.tracking||order.id}`);return;}
    if(kind==='review'&&order.status==='delivered'&&!order.reviewed){order.reviewed=true;writeOrders(orders);location.reload();return;}
    if(kind==='buy-again'&&['delivered','cancelled'].includes(order.status)){
      const cart=readCart();
      order.items.forEach(row=>{const existing=cart.items.find(item=>item.id===row.id);if(existing){existing.qty=Math.min(99,existing.qty+row.qty);existing.selected=true;}else cart.items.push({id:row.id,qty:row.qty,selected:true,variant:row.variant});});
      writeCart(cart);location.href='/cart';return;
    }
  }
  const checkoutAction=e.target.closest('[data-checkout-action]');
  if(checkoutAction){
    const checkoutState=readCheckoutState();
    const kind=checkoutAction.dataset.checkoutAction;
    if(kind==='quantity'){
      const cart=readCart();const item=cart.items.find(row=>row.id===checkoutAction.dataset.id);
      if(item){item.qty=Math.max(1,Math.min(99,item.qty+Number(checkoutAction.dataset.delta)));writeCart(cart);refreshCheckout();}
      return;
    }
    if(kind==='voucher'){
      const cart=readCart();const shop=checkoutAction.dataset.shop;
      cart.vouchers=cart.vouchers.includes(shop)?cart.vouchers.filter(name=>name!==shop):[...cart.vouchers,shop];
      writeCart(cart);refreshCheckout();return;
    }
    if(kind==='edit-address')checkoutState.addressForm=checkoutAction.dataset.id;
    if(kind==='add-address')checkoutState.addressForm='new';
    if(kind==='cancel-address')checkoutState.addressForm=null;
    if(kind==='save-address'){
      const form=document.querySelector('#checkout-address-form');
      if(!form?.reportValidity())return;
      const values=Object.fromEntries(new FormData(form));
      const existing=checkoutState.addresses.find(address=>address.id===checkoutState.addressForm);
      if(existing)Object.assign(existing,values);
      else{const address={...values,id:`address-${Date.now()}`,label:'Other'};checkoutState.addresses.push(address);checkoutState.selectedAddress=address.id;}
      checkoutState.addressForm=null;
    }
    if(kind==='place-order'){
      const address=checkoutState.addresses.find(entry=>entry.id===checkoutState.selectedAddress);
      if(!cartTotals(readCart()).selected.length){refreshCheckout();return;}
      if(!address||!['name','phone','street','ward','city'].every(key=>address[key]?.trim())){notify(t('Please complete every address field'));return;}
      checkoutState.success=true;
    }
    writeCheckoutState(checkoutState);refreshCheckout();return;
  }
  const action=e.target.closest('[data-action]'); const clear=e.target.closest('[data-clear]');
  const cartActionElement=e.target.closest('[data-cart-action]');
  if(cartActionElement){
    const cart=readCart();const cartAction=cartActionElement.dataset.cartAction;const id=cartActionElement.dataset.id;const item=cart.items.find(row=>row.id===id);
    if(cartAction==='quantity'&&item)item.qty=Math.max(1,Math.min(99,item.qty+Number(cartActionElement.dataset.delta)));
    if(cartAction==='remove'&&item){cart.items=cart.items.filter(row=>row.id!==id);notify(`${products.find(p=>p.id===id).name} removed from your cart`);}
    if(cartAction==='remove-selected'){const removed=cart.items.filter(row=>row.selected).length;cart.items=cart.items.filter(row=>!row.selected);notify(`${removed} ${removed===1?'item':'items'} removed from your cart`);}
    if(cartAction==='save'&&item){cart.saved=cart.saved.filter(row=>row.id!==id);cart.saved.push({id});cart.items=cart.items.filter(row=>row.id!==id);notify(`${products.find(p=>p.id===id).name} saved for later`);}
    if(cartAction==='restore'){const saved=cart.saved.find(row=>row.id===id);if(saved){cart.saved=cart.saved.filter(row=>row.id!==id);const existing=cart.items.find(row=>row.id===id);if(existing)existing.selected=true;else cart.items.push({id,qty:1,selected:true,variant:`${products.find(p=>p.id===id).color} · Standard`});notify(`${products.find(p=>p.id===id).name} moved back to your cart`);}}
    if(cartAction==='voucher'){const shop=cartActionElement.dataset.shop;if(cart.vouchers.includes(shop)){cart.vouchers=cart.vouchers.filter(name=>name!==shop);notify('Shop voucher removed');}else{cart.vouchers.push(shop);notify('10% Sunday Objects voucher applied');}}
    if(cartAction==='checkout'){const totals=cartTotals(cart);if(totals.selected.length){location.href='/checkout';return;}}
    writeCart(cart);refreshCart();return;
  }
  if(clear){const u=new URL(location.href);u.searchParams.delete(clear.dataset.clear);location.href=u.pathname+u.search;return;}
  const pageButton=e.target.closest('[data-page]'); if(pageButton&&!pageButton.disabled){const requested=pageButton.dataset.page;showPage(requested==='prev'?currentPage-1:requested==='next'?currentPage+1:Number(requested));document.querySelector('#results-heading').scrollIntoView({behavior:'smooth',block:'start'});return;}
  if(e.target.closest('[data-image]')){const t=e.target.closest('[data-image]');document.querySelector('#main-image').src=t.dataset.image;document.querySelectorAll('.thumb').forEach(x=>x.classList.toggle('is-active',x===t));return;}
  if(e.target.closest('[data-color]')){const t=e.target.closest('[data-color]');document.querySelector('#selected-color').textContent=t.dataset.color;document.querySelectorAll('.swatch').forEach(x=>{x.classList.toggle('selected',x===t);x.setAttribute('aria-pressed',String(x===t));});return;}
  if(!action)return;
  if(action.dataset.action==='save'){const cart=readCart();const id=action.dataset.id;const on=!cart.saved.some(item=>item.id===id);cart.saved=cart.saved.filter(item=>item.id!==id);if(on)cart.saved.push({id});writeCart(cart);syncWishlistButtons();notify(on?`${action.dataset.name} saved to your wishlist`:t('Item removed from your wishlist'));}
  if(action.dataset.action==='add'||action.dataset.action==='purchase'||action.dataset.action==='buy'){addProductToCart(action.dataset.id,Number(document.querySelector('#quantity')?.value||1),document.querySelector('#selected-color')?.textContent||'');syncWishlistButtons();notify(`${action.dataset.name} added to your bag`);}
  if(action.dataset.action==='wishlist') notify('Your saved finds will be waiting when you sign in.');
  if(action.dataset.action==='share'){navigator.clipboard?.writeText(location.href).then(()=>notify('Product link copied')).catch(()=>notify('Product link ready to share'));}
  if(action.dataset.action==='qty-down'||action.dataset.action==='qty-up'){const out=document.querySelector('#quantity');out.value=String(Math.max(1,Number(out.value)+(action.dataset.action==='qty-up'?1:-1)));}
  if(action.dataset.action==='menu'){const nav=document.querySelector('.mobile-nav');const open=nav.classList.toggle('is-open');action.setAttribute('aria-expanded',String(open));}
  if(action.dataset.action==='filter-toggle'){document.querySelector('#filters')?.classList.toggle('filters-open');}
  if(action.dataset.action==='price')updateResults();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('.mobile-nav')?.classList.remove('is-open');document.querySelector('#filters')?.classList.remove('filters-open');}});
if(path.startsWith('/products')&&!path.startsWith('/products/')){const params=new URLSearchParams(location.search);const query=params.get('q')||'';const category=params.get('category')||'';const shop=params.get('shop')||'';currentRows=products.filter(p=>(!query||`${p.name} ${p.category} ${p.shop}`.toLowerCase().includes(query.toLowerCase()))&&(!category||p.category===category)&&(!shop||p.shop.toLowerCase()===shop.toLowerCase())&&(!params.has('deal')||p.old));showPage(1);setTimeout(()=>{document.querySelector('#loading-state')?.remove();document.querySelector('#result-grid').hidden=false;document.querySelector('#no-results').hidden=currentRows.length>0;document.querySelector('.pagination').hidden=currentRows.length<=9;},420);}
