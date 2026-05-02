class AttractionCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const flip = this.hasAttribute('flip');
    const traveler = this.getAttribute('traveler');
    const access = this.getAttribute('access');
    const link = this.getAttribute('link');
    const description = this.innerHTML;

    this.innerHTML = `
      <article class="card${flip ? ' card--flip' : ''}">
        <img src="${image}" alt="${title}" />
        <div class="card__content">
          <h3>${title}</h3>
          ${traveler ? `<span class="card__tag">Best for: ${traveler}</span>` : ''}
          ${access ? `<p class="card__meta">Access point: ${access}</p>` : ''}
          <p>${description}</p>
          ${link ? `<a class="card__link" href="${link}" target="_blank" rel="noopener">Learn more →</a>` : ''}
        </div>
      </article>
    `;
  }
}

customElements.define('attraction-card', AttractionCard);
