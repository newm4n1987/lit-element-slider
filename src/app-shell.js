import { LitElement, html } from 'lit-element';
import './components/slider-element';

class AppShell extends LitElement {
  render() {
    return html`
      <slider-element></slider-element>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
