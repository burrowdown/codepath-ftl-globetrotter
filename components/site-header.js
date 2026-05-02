class SiteHeader extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;
    const isActive = (href) =>
      href === '/' ? path === '/' || path === '/index.html' : path === href;

    const links = [
      { href: '/', label: 'Home' },
      { href: '/pages/guide.html', label: 'Guide' },
      { href: '/pages/attractions.html', label: 'Attractions' },
      { href: '/pages/photos.html', label: 'Photos' },
    ];

    const renderLinks = () =>
      links
        .map(({ href, label }) => {
          const current = isActive(href) ? ' aria-current="page"' : '';
          return `<li><a href="${href}"${current}>${label}</a></li>`;
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
