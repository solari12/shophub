import { icon, productCard, sectionHeading } from './components.js';

const products = [
  { name: 'Studio Wireless Headphones', category: 'Audio', store: 'North & Tone', price: '$89.00', oldPrice: '$119.00', rating: '4.9', flag: 'Best seller', saved: false, alt: 'Cream over-ear wireless headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=720&q=85' },
  { name: 'Everyday Leather Tote', category: 'Accessories', store: 'Marlow Goods', price: '$64.00', oldPrice: '', rating: '4.8', flag: 'Made to last', saved: true, alt: 'Structured leather handbag in warm tan', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=720&q=85' },
  { name: 'Cloud Knit Runner', category: 'Footwear', store: 'Common Ground', price: '$78.00', oldPrice: '$96.00', rating: '4.7', flag: '18% off', saved: false, alt: 'Minimal white everyday sneaker', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=720&q=85' },
];

const recentProducts = [
  { name: 'Modern Table Lamp', category: 'Home', store: 'Sunday Objects', price: '$52.00', oldPrice: '', rating: '4.8', flag: 'Just viewed', saved: false, alt: 'Minimal white lamp on a warm neutral table', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=720&q=85' },
  { name: 'Daily Canvas Sneaker', category: 'Footwear', store: 'Common Ground', price: '$68.00', oldPrice: '', rating: '4.6', flag: 'Just viewed', saved: false, alt: 'Classic low-top canvas sneakers', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=720&q=85' },
];

const orders = [
  { id: '#SH-24891', product: 'Studio Wireless Headphones', detail: 'North & Tone · 1 item', image: products[0].image, status: 'In transit', statusType: 'transit', total: '$89.00', date: 'Oct 02, 2026', action: 'Track order' },
  { id: '#SH-24710', product: 'Everyday Leather Tote', detail: 'Marlow Goods · 1 item', image: products[1].image, status: 'Delivered', statusType: 'delivered', total: '$64.00', date: 'Sep 28, 2026', action: 'Buy again' },
  { id: '#SH-24632', product: 'Cloud Knit Runner', detail: 'Common Ground · 1 item', image: products[2].image, status: 'Processing', statusType: 'processing', total: '$78.00', date: 'Sep 26, 2026', action: 'View order' },
];

const activities = [
  { iconName: 'truck', tone: 'green', title: 'Your order is on the way', detail: 'Studio Wireless Headphones', time: 'Today · 9:42 AM' },
  { iconName: 'check', tone: 'blue', title: 'Order delivered', detail: 'Everyday Leather Tote', time: 'Sep 28 · 2:16 PM' },
  { iconName: 'heart', tone: 'peach', title: 'A saved item is almost gone', detail: 'Only 3 left at Marlow Goods', time: 'Sep 25 · 11:08 AM' },
];

const quickLinks = [
  { iconName: 'bag', label: 'My orders', value: '3 active', action: 'orders', tone: 'green' },
  { iconName: 'heart', label: 'Wishlist', value: '12 saved', action: 'wishlist', tone: 'peach' },
  { iconName: 'cart', label: 'Shopping bag', value: '2 items', action: 'cart', tone: 'lavender' },
  { iconName: 'clock', label: 'Recently viewed', value: '8 products', action: 'recent', tone: 'yellow' },
];

const logo = `<a class="brand" href="/" aria-label="ShopHub marketplace home"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span><span>shop<span class="brand-accent">hub</span><span class="brand-period">.</span></span></a>`;

function renderHeader() {
  return `<header class="topbar"><div class="topbar__inner">${logo}
    <button class="icon-button mobile-menu-toggle" type="button" aria-label="Open account navigation" aria-expanded="false" data-action="mobile-nav">${icon('menu', 21)}</button>
    <nav class="shop-nav" aria-label="Main navigation"><a href="/" data-action="marketplace">Shop</a><a href="/products" data-action="categories">Categories${icon('down', 13)}</a><a href="/products?deal=1" data-action="deals" class="shop-nav__deals">Deals <span class="nav-tag">New</span></a><a href="/products" data-action="sellers">Our sellers</a></nav>
    <label class="search-box"><span class="sr-only">Search ShopHub</span>${icon('search', 19)}<input id="site-search" type="search" placeholder="Search products, shops & more" autocomplete="off"><kbd>⌘ K</kbd></label>
    <div class="topbar__actions"><div class="popover-anchor"><button class="icon-button notification-button" type="button" aria-label="Notifications, 2 unread" aria-expanded="false" data-action="notifications">${icon('bell', 20)}<span class="notification-dot"></span></button><div class="popover notification-popover" data-popover="notifications" hidden><div class="popover__heading"><strong>Notifications</strong><span>2 new</span></div><p>Your order is on the way. It should arrive by Oct 6.</p><p>Someone saved an item from your storefront.</p></div></div>
      <span class="topbar-divider"></span><div class="popover-anchor"><button class="profile-trigger" type="button" aria-expanded="false" data-action="profile"><span class="avatar avatar--small">MC</span><span class="profile-trigger__name">Maya Chen</span>${icon('down', 15)}</button><div class="popover profile-popover" data-popover="profile" hidden><div class="profile-popover__person"><span class="avatar">MC</span><span><strong>Maya Chen</strong><small>maya.chen@email.com</small></span></div><button type="button" data-action="profile-settings">${icon('settings', 16)} Account settings</button><button type="button" data-action="help">${icon('help', 16)} Help & support</button><button type="button" data-action="sign-out">${icon('logout', 16)} Sign out</button></div></div></div>
  </div></header>`;
}

function renderSidebar() {
  const navItem = (iconName, label, action, current = false, suffix = '') => `<button class="sidebar-link${current ? ' is-current' : ''}" type="button"${current ? ' aria-current="page"' : ''} data-action="${action}">${icon(iconName, 18)}<span>${label}</span>${suffix}</button>`;
  return `<aside class="sidebar" id="account-navigation"><div class="sidebar__mobile-title">Your account <button type="button" aria-label="Close navigation" data-action="close-nav">${icon('close', 18)}</button></div><div class="sidebar__section"><p class="sidebar__label">ACCOUNT</p>${navItem('grid', 'Overview', 'overview', true)}${navItem('bag', 'Orders', 'orders', false, '<span class="sidebar-count">3</span>')}${navItem('heart', 'Wishlist', 'wishlist', false, '<span class="sidebar-count">12</span>')}${navItem('clock', 'Recently viewed', 'recent')}</div><div class="sidebar__section"><p class="sidebar__label">YOUR DETAILS</p>${navItem('pin', 'Addresses', 'addresses')}${navItem('card', 'Payment methods', 'payments')}${navItem('gift', 'ShopHub Rewards', 'rewards')}</div><div class="sidebar-help"><span class="sidebar-help__icon">${icon('help', 17)}</span><strong>Need a hand?</strong><p>Our team is here to help with your orders and account.</p><button class="text-link" type="button" data-action="help">Visit help center ${icon('arrow', 14)}</button></div><div class="sidebar__footer">© 2026 ShopHub · <a href="#privacy">Privacy</a></div></aside>`;
}

function renderHero() {
  return `<section class="welcome-card" aria-labelledby="welcome-heading"><div class="welcome-card__copy"><p class="welcome-overline">YOUR SHOPHUB, YOUR FINDS <span class="welcome-sparkle">${icon('sparkle', 13)}</span></p><h2 id="welcome-heading">Good morning, Maya<span class="welcome-period">.</span></h2><p>Good things are finding their way to you. Here's your shopping, all in one place.</p><button type="button" class="hero-button" data-action="marketplace">Explore the marketplace ${icon('arrow', 17)}</button></div><div class="welcome-card__art" aria-hidden="true"><div class="orbit orbit--outer"></div><div class="orbit orbit--inner"></div><div class="hero-sun"></div><div class="hero-object hero-object--one">${icon('bag', 37)}</div><div class="hero-object hero-object--two">${icon('sparkle', 28)}</div><div class="hero-object hero-object--three">${icon('heart', 22)}</div><span class="hero-sticker">good finds<br>live here</span></div><div class="welcome-card__pattern" aria-hidden="true"></div></section>`;
}

function renderStats() {
  const stats = [
    { label: 'Orders in progress', value: '03', note: 'Next delivery Oct 6', iconName: 'truck', tone: 'stat-icon--mint', action: 'orders' },
    { label: 'Saved for later', value: '12', note: '2 items on sale today', iconName: 'heart', tone: 'stat-icon--peach', action: 'wishlist' },
    { label: 'Reward points', value: '2,480', note: '520 points to your next reward', iconName: 'gift', tone: 'stat-icon--yellow', action: 'rewards' },
  ];
  return `<section class="stats-grid" aria-label="Account summary">${stats.map((stat, index) => `<button type="button" class="stat-card" data-action="${stat.action}"><span class="stat-card__top"><span>${stat.label}</span><span class="stat-icon ${stat.tone}">${icon(stat.iconName, 18)}</span></span><strong class="stat-card__value">${stat.value}</strong><span class="stat-card__note">${index === 2 ? `<span class="mini-progress"><i></i></span>` : ''}${stat.note}</span>${icon('arrow', 15, 'stat-card__arrow')}</button>`).join('')}</section>`;
}

function renderQuickAccess() {
  return `<div class="quick-grid">${quickLinks.map((item) => `<button class="quick-card" type="button" data-action="${item.action}"><span class="quick-card__icon quick-card__icon--${item.tone}">${icon(item.iconName, 19)}</span><span class="quick-card__text"><strong>${item.label}</strong><small>${item.value}</small></span>${icon('chevron', 16, 'quick-card__chevron')}</button>`).join('')}</div>`;
}

function renderOrders() {
  const rows = orders.map((order) => `<tr><td><strong class="order-id">${order.id}</strong></td><td><div class="order-product"><img src="${order.image}" alt="" loading="lazy"><span><strong>${order.product}</strong><small>${order.detail}</small></span></div></td><td><span class="status status--${order.statusType}"><i></i>${order.status}</span></td><td><strong class="order-total">${order.total}</strong></td><td><span class="order-date">${order.date}</span></td><td><button type="button" class="order-action" data-action="order-action" data-order="${order.id}" data-label="${order.action}">${order.action}${icon('arrow', 14)}</button></td></tr>`).join('');
  const mobile = orders.map((order) => `<article class="order-mobile-card"><div class="order-mobile-card__top"><strong>${order.id}</strong><span class="status status--${order.statusType}"><i></i>${order.status}</span></div><div class="order-product"><img src="${order.image}" alt="" loading="lazy"><span><strong>${order.product}</strong><small>${order.detail}</small></span></div><div class="order-mobile-card__bottom"><span>${order.date}</span><strong>${order.total}</strong><button type="button" class="order-action" data-action="order-action" data-order="${order.id}" data-label="${order.action}">${order.action}${icon('arrow', 14)}</button></div></article>`).join('');
  return `<section class="panel orders-panel" id="orders-section">${sectionHeading('THE LATEST', 'Recent orders', 'All orders', 'orders')}<div class="table-scroll"><table><thead><tr><th scope="col">ORDER</th><th scope="col">PRODUCT</th><th scope="col">STATUS</th><th scope="col">TOTAL</th><th scope="col">DATE</th><th scope="col"><span class="sr-only">Action</span></th></tr></thead><tbody>${rows}</tbody></table></div><div class="mobile-orders">${mobile}</div></section>`;
}

function renderActivity() {
  return `<section class="panel activity-panel">${sectionHeading('WHAT’S HAPPENING', 'Recent activity', 'See all', 'activity')}<ol class="activity-list">${activities.map((item, index) => `<li class="activity-item"><span class="activity-icon activity-icon--${item.tone}">${icon(item.iconName, 16)}</span><span class="activity-line" aria-hidden="true"></span><div class="activity-copy"><strong>${item.title}</strong><span>${item.detail}</span><small>${item.time}</small></div>${index === 0 ? '<span class="activity-unread" aria-label="Unread"></span>' : ''}</li>`).join('')}</ol><button class="activity-notice" type="button" data-action="notifications">${icon('bell', 16)} You're all caught up on your other updates.</button></section>`;
}

function renderRewards() {
  return `<section class="rewards-card"><div class="rewards-card__top"><span class="rewards-badge">${icon('gift', 17)}</span><span class="rewards-level">THE GOOD STUFF CLUB</span>${icon('sparkle', 18, 'rewards-sparkle')}</div><h3>A little more<br>goes a long way.</h3><p>You've saved <strong>$146</strong> with your member perks this year.</p><div class="rewards-progress"><div><span>Silver member</span><span>Gold · 520 pts to go</span></div><div class="progress-track"><i></i></div></div><button type="button" class="rewards-link" data-action="rewards">Explore your rewards ${icon('arrow', 15)}</button><span class="rewards-decoration" aria-hidden="true">SH</span></section>`;
}

function renderHelpStrip() {
  return `<section class="help-strip"><span class="help-strip__icon">${icon('help', 19)}</span><div><strong>Shopping should feel easy.</strong><span>Find a quick answer or chat with a real person.</span></div><button type="button" class="text-link" data-action="help">We're here ${icon('arrow', 15)}</button></section>`;
}

function renderRecommendations() {
  return `<section class="recommendations" id="recommendations">${sectionHeading('PICKED FOR YOUR NEXT CHAPTER', 'A few things you might love', 'Shop all', 'marketplace')}<div class="product-grid">${products.map(productCard).join('')}</div><p class="empty-search" data-search-empty hidden>No recommendations match <strong></strong>. Try another search.</p></section>`;
}

function renderRecentlyViewed() {
  return `<section class="recently-viewed" id="recently-viewed">${sectionHeading('PICK UP WHERE YOU LEFT OFF', 'Recently viewed', 'See history', 'recent')}<div class="recent-view-grid">${recentProducts.map((product) => `<button class="recent-view-item" type="button" data-action="recent-item" data-product="${product.name}"><img src="${product.image}" alt="${product.alt}" loading="lazy"><span><small>${product.category} · ${product.store}</small><strong>${product.name}</strong><b>${product.price}</b></span>${icon('arrow', 16)}</button>`).join('')}</div></section>`;
}

function renderPage() {
  return `${renderHeader()}<div class="page-frame">${renderSidebar()}<main class="main-content"><div class="mobile-page-label">${icon('grid', 15)} CUSTOMER DASHBOARD</div><div class="breadcrumb"><span>Home</span>${icon('chevron', 12)}<strong>My dashboard</strong></div><div class="page-intro"><div><p class="eyebrow">SUNDAY, OCTOBER 4, 2026</p><h1>Your dashboard</h1></div><button type="button" class="profile-edit" data-action="profile-settings"><span class="avatar avatar--small">MC</span><span>Manage account</span>${icon('external', 14)}</button></div>${renderHero()}${renderStats()}<div class="content-layout"><div class="content-primary">${renderOrders()}${renderRecommendations()}${renderRecentlyViewed()}</div><aside class="content-rail"><section class="quick-panel">${sectionHeading('ONE TAP AWAY', 'Quick access', '', '')}${renderQuickAccess()}</section>${renderActivity()}${renderRewards()}${renderHelpStrip()}</aside></div><footer class="page-footer"><span>${logo}<small>Made for the things you love.</small></span><span>Questions? <button type="button" data-action="help">We're here to help.</button></span></footer><div class="mobile-scrim" data-action="close-nav" hidden></div></main></div>`;
}

document.querySelector('#app').innerHTML = renderPage();

const toastRegion = document.querySelector('#toast-region');
let toastTimeout;
function showToast(message) {
  toastRegion.innerHTML = `<div class="toast">${icon('check', 17)}<span>${message}</span><button type="button" aria-label="Dismiss notification" data-action="dismiss-toast">${icon('close', 15)}</button></div>`;
  toastRegion.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toastRegion.classList.remove('is-visible'), 3200);
}

function togglePopover(name, trigger) {
  const popover = document.querySelector(`[data-popover="${name}"]`);
  const isOpen = !popover.hidden;
  document.querySelectorAll('[data-popover]').forEach((item) => { item.hidden = true; });
  document.querySelectorAll('[data-action="notifications"], [data-action="profile"]').forEach((item) => item.setAttribute('aria-expanded', 'false'));
  if (!isOpen) {
    popover.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
  }
}

const actionMessages = {
  overview: 'You’re already on your dashboard.',
  orders: 'Your recent orders are right here.',
  wishlist: 'Your saved finds are waiting for you.',
  cart: 'Your shopping bag has 2 items.',
  recent: 'Your browsing history is just below.',
  addresses: 'Address book preview — account settings are coming soon.',
  payments: 'Payment methods preview — account settings are coming soon.',
  rewards: 'You have 2,480 points and $146 in member savings.',
  marketplace: 'Marketplace preview — your next find is just a search away.',
  categories: 'Browse the marketplace categories from the search bar.',
  deals: 'Today’s deals are ready to explore.',
  sellers: 'Meet the independent sellers behind your favorite finds.',
  activity: 'You’re up to date on your recent activity.',
  'profile-settings': 'Profile settings preview.',
  help: 'Help center preview — our customer team is here for you.',
  'sign-out': 'Sign out is disabled in this prototype.',
};

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target) {
    if (!event.target.closest('.popover-anchor')) {
      document.querySelectorAll('[data-popover]').forEach((item) => { item.hidden = true; });
      document.querySelectorAll('[data-action="notifications"], [data-action="profile"]').forEach((item) => item.setAttribute('aria-expanded', 'false'));
    }
    return;
  }
  if (target instanceof HTMLAnchorElement && target.hash) event.preventDefault();
  const { action, product, label, order } = target.dataset;

  if (action === 'notifications' || action === 'profile') {
    togglePopover(action, target);
    return;
  }
  if (action === 'mobile-nav') {
    const sidebar = document.querySelector('.sidebar');
    const isOpen = sidebar.classList.toggle('is-open');
    target.setAttribute('aria-expanded', String(isOpen));
    document.querySelector('.mobile-scrim').hidden = !isOpen;
    document.body.classList.toggle('nav-open', isOpen);
    return;
  }
  if (action === 'close-nav') {
    document.querySelector('.sidebar').classList.remove('is-open');
    document.querySelector('.mobile-menu-toggle').setAttribute('aria-expanded', 'false');
    document.querySelector('.mobile-scrim').hidden = true;
    document.body.classList.remove('nav-open');
    return;
  }
  if (action === 'favorite') {
    const isSaved = target.getAttribute('aria-pressed') === 'true';
    target.setAttribute('aria-pressed', String(!isSaved));
    target.classList.toggle('is-saved', !isSaved);
    target.setAttribute('aria-label', `${isSaved ? 'Add to' : 'Remove from'} wishlist: ${product}`);
    showToast(isSaved ? `${product} removed from your wishlist` : `${product} saved to your wishlist`);
    return;
  }
  if (action === 'add-cart') {
    showToast(`${product} added to your shopping bag`);
    return;
  }
  if (action === 'order-action') {
    showToast(`${label} · ${order}`);
    return;
  }
  if (action === 'recent-item') {
    showToast(`${product} product preview`);
    return;
  }
  if (action === 'dismiss-toast') {
    toastRegion.classList.remove('is-visible');
    return;
  }

  const message = actionMessages[action];
  if (message) {
    if (['orders', 'recent'].includes(action)) {
      document.querySelector(action === 'orders' ? '#orders-section' : '#recently-viewed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.matchMedia('(max-width: 960px)').matches) {
      document.querySelector('.sidebar').classList.remove('is-open');
      document.querySelector('.mobile-scrim').hidden = true;
      document.body.classList.remove('nav-open');
    }
    showToast(message);
  }
});

document.querySelector('#site-search').addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  let count = 0;
  document.querySelectorAll('[data-searchable]').forEach((card) => {
    const visible = !query || card.dataset.searchable.includes(query);
    card.hidden = !visible;
    if (visible) count += 1;
  });
  document.querySelector('.recommendations').classList.toggle('is-filtering', Boolean(query));
  const emptyState = document.querySelector('[data-search-empty]');
  emptyState.hidden = count !== 0;
  emptyState.querySelector('strong').textContent = event.target.value.trim();
});

document.querySelector('#site-search').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && event.currentTarget.value.trim()) {
    showToast(`Showing matching finds for “${event.currentTarget.value.trim()}”`);
    document.querySelector('#recommendations').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (event.key === 'Escape') event.currentTarget.value = '';
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    document.querySelector('#site-search').focus();
  }
  if (event.key === 'Escape') {
    document.querySelectorAll('[data-popover]').forEach((item) => { item.hidden = true; });
    document.querySelectorAll('[data-action="notifications"], [data-action="profile"]').forEach((item) => item.setAttribute('aria-expanded', 'false'));
    document.querySelector('.sidebar').classList.remove('is-open');
    document.querySelector('.mobile-scrim').hidden = true;
    document.body.classList.remove('nav-open');
  }
});
