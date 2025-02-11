import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
      }
      .card {
        width: 400px;
        border: 2px solid black;
        padding: 16px;
      }
      .card img {
        width: 400px;
        height: 200px;
      }
      .card h2 {
        margin: 8px 0;
      }
      .card a {
        background-color: blue;
        color: white;
        padding: 8px;
        display: block;
        text-align: center;
        text-decoration: none;
      }
      .fancy {
        background-color: orange;
      }
    `;
  }

  constructor() {
    super();
    // Set default values
    this.title = 'The Last Person';
    this.description = 'A hilarious sketch about people being bad at driving';
    this.image = 'https://pyxis.nymag.com/v1/imgs/d5b/ba6/8190fc62ab3a596c2587131a644a1a7852-07-key-peele-2.2x.rhorizontal.w710.jpg';
    this.link = 'https://www.youtube.com/watch?v=CI_mFIfFars';
    this.fancy = false;
  }

  render() {
    return html`
      <div class="card ${this.fancy ? 'fancy' : ''}">
        <img src="${this.image}" alt="Key and Peele">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <a href="${this.link}">Details</a>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);