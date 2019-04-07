import { LitElement, html } from 'lit-element';
import './components/slider-element';
import './components/slider-carousel';

class AppShell extends LitElement {
  render() {
    return html`
      <slider-element></slider-element>
      <slider-carousel></slider-carousel>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
