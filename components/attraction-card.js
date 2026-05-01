class AttractionCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const flip = this.hasAttribute('flip');
    const description = this.innerHTML;

    this.innerHTML = `
      <article class="card${flip ? ' card--flip' : ''}">
        <img src="${image}" alt="${title}" />
        <div class="card__content">
          <h2>${title}</h2>
          <p>${description}</p>
        </div>
      </article>
    `;
  }
}

customElements.define('attraction-card', AttractionCard);
