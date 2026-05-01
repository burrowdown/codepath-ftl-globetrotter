class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pages/guide.html">Guide</a></li>
            <li><a href="/pages/attractions.html">Attractions</a></li>
            <li><a href="/pages/photos.html">Photos</a></li>
          </ul>
        </nav>
        <div class="hero">
          <h1>Hells Canyon</h1>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
