import { LitElement, html, css } from 'lit-element';

class SliderCarousel extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .carousel-wrapper {
        margin: 0 auto;
        width: 300px;
        height: 180px;
        position: relative;
        overflow: hidden;
      }
      .carousel {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 1s ease;
      }
      .button-wrapper {
        display: flex;
        justify-content: center;
      }
    `;
  }

  static get properties() {
    return {
      imagesList: Array,
      index: Number,
    };
  }

  constructor() {
    super();
    this.index = 0;
    this.imagesList = [
      '/images/slider/1.jpg',
      '/images/slider/3.jpg',
      '/images/slider/1.jpg',
      '/images/slider/3.jpg',
      '/images/slider/1.jpg',
      '/images/slider/3.jpg',
      '/images/slider/1.jpg',
      '/images/slider/3.jpg',
    ];
  }

  render() {
    return html`
      <section>
        <div class="carousel-wrapper">
          <div class="carousel">
            ${this.imagesList.map(image => html`<img src="${image}">`)}
          </div>
        </div>
        <div class="button-wrapper">
          <button class="prev" @click="${() => this.prevSlide()}">PREV</button>
          <button class="next" @click="${() => this.nextSlide()}">NEXT</button>
        </div>
      </section>
    `;
  }

  nextSlide() {
    if ((this.index + 1) == this.imagesList.length) {
      return;
    }
    this.index++;
    this.carouselClass.style.transform = `translateX(-${this.carouselWidthMultiplyIndex}px)`;
  }

  prevSlide() {
    if ((this.index - 1) < 0) {
      return;
    }
    this.index--;
    this.carouselClass.style.transform = `translateX(-${this.carouselWidthMultiplyIndex}px)`;
  }

  get carouselClass() {
    return this.shadowRoot.querySelector('.carousel');
  }

  get carouselWidthMultiplyIndex() {
    return this.carouselClass.offsetWidth * this.index;
  }

}

window.customElements.define('slider-carousel', SliderCarousel);
