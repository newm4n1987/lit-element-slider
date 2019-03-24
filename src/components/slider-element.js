import { LitElement, html, css } from 'lit-element';

class SliderElement extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
      }
      .wrapper-image img {
        border-radius: 50%;
        height: 250px;
        width: 250px;
        object-fit: cover;
      }
    `;
  }

  static get properties() {
    return {
      items: {
        type: Array
      },
      index: {
        type: Number
      }
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
          <button class="prev" @click="${() => this.prev()}">PREV</button>
          <button class="next" @click="${() => this.next()}">NEXT</button>
        </div>
      </section>
    `;
  }
  prev() {
    if(this.index <= 0) {
      this.index = 0;
    }else {
      this.index--;
    }
  }

  next() {
    if(this.index == (this.items.length-1)) {
      this.index = this.items.length-1;
    }else {
      this.index++;
    }
  }

  printSlider() {
    return html`
      <div class="wrapper-image">
        <img src="${this.items[this.index].image}" alt="${this.items[this.index].name}">
      </div>
    `;
  }

}

window.customElements.define('slider-element', SliderElement);
