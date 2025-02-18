import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.title = '';
    this.image = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
      }

      .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        max-width: 300px;
      }

      img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 4px;
      }

      h2 {
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.2;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
        cursor: pointer;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }

      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, pink);
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
    `;
  }

  openChanged(e) {
    if (e.target.getAttribute('open') !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <h2>${this.title}</h2>
        ${this.image ? html`<img src="${this.image}" alt="${this.title}"/>` : ''}
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot></slot>
          </div>
        </details>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);