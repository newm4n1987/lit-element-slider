import { LitElement, html, css } from 'lit-element';

class SliderElement extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
      }
      .wrapper-image {
        display: flex;
        justify-content: center;
        height: 250px;
        margin-bottom: 20px;
      }
      img {
        border-radius: 50%;
        height: 250px;
        width: 250px;
        object-fit: cover;
      }

      /* This is the animation code. */
      .next {
        animation: next 1.5s ease;
      }

      @keyframes next {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-150px);
            opacity: 0;
        }
        50% {
            transform: translateX(150px);
            opacity: 0;
        }
        70% {
            transform: translateX(0);
            opacity: 1;
        }
      }

      .prev {
        animation: prev 1.5s ease;
      }

      @keyframes prev {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(150px);
            opacity: 0;
        }
        50% {
            transform: translateX(-150px);
            opacity: 0;
        }
        70% {
            transform: translateX(0);
            opacity: 1;
        }
      }
    `;
  }

  static get properties() {
    return {
      items: Array,
      index: Number
    };
  }

  constructor() {
    super();
    this.items = [
      { name: 'Javier', image: '/images/slider/1.jpg' },
      { name: 'Javier 2', image: '/images/slider/2.jpg' },
      { name: 'Javier 3', image: '/images/slider/3.jpg' },
    ];
    this.index = 0;
  }

  render() {
    return html`
      <section>
        ${this.printSlider()}
        <div class="action-btns">
          <button class="btn-prev" @click="${() => this.prev()}">PREV</button>
          <button class="btn-next" @click="${() => this.next()}">NEXT</button>
        </div>
      </section>
    `;
  }
  prev() {
    this.imgElement.removeAttribute('class');
    setTimeout(() => {
      this.imgElement.classList.add('prev');
      setTimeout(() => {
        if (this.index <= 0) {
          this.index = 0;
        } else {
          this.index--;
        }
      }, 500);
    }, 100);
  }

  next() {
    this.imgElement.removeAttribute('class');
    setTimeout(() => {
      this.imgElement.classList.add('next');
      setTimeout(() => {
        if (this.index == (this.items.length - 1)) {
          this.index = this.items.length - 1;
        } else {
          this.index++;
        }
      }, 500);
    }, 100);
  }

  printSlider() {
    return html`
      <div class="wrapper-image">
        <img src="${this.items[this.index].image}" alt="${this.items[this.index].name}">
      </div>
    `;
  }

  get imgElement() {
    return this.shadowRoot.querySelector('img');
  }

}

window.customElements.define('slider-element', SliderElement);
