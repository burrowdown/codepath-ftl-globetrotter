class SiteHeader extends HTMLElement {
  connectedCallback() {
    const inPages = window.location.pathname.includes('/pages/');
    const base = inPages ? '../' : '';

    const links = [
      { href: `${base}index.html`, label: 'Home' },
      { href: `${base}pages/guide.html`, label: 'Guide' },
      { href: `${base}pages/attractions.html`, label: 'Attractions' },
      { href: `${base}pages/photos.html`, label: 'Photos' },
    ];

    const path = window.location.pathname;
    const isActive = ({ href }) => {
      const filename = href.split('/').pop() || 'index.html';
      return path.endsWith(filename) ||
        (filename === 'index.html' && (path.endsWith('/') || path === ''));
    };

    const renderLinks = () =>
      links
        .map((link) => {
          const current = isActive(link) ? ' aria-current="page"' : '';
          return `<li><a href="${link.href}"${current}>${link.label}</a></li>`;
        })
        .join('\n            ');

    this.innerHTML = `
      <header>
        <div class="header-inner">
          <div class="header-text">
            <h1>Hells Canyon</h1>
            <p class="tagline">North America's Deepest River Gorge</p>
          </div>
          <nav class="header-nav" aria-label="Site navigation">
            <ul>
              ${renderLinks()}
            </ul>
          </nav>
          <div class="hamburger-wrap">
            <button class="hamburger-btn" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav class="mobile-nav" aria-label="Site navigation">
              <ul>
                ${renderLinks()}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
