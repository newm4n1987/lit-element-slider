import { LitElement, html } from 'lit-element';

class AppShell extends LitElement {
  render() {
    return html`
      <h1>App Shell</h1>
    `;
  }
}

window.customElements.define('app-shell', AppShell);
