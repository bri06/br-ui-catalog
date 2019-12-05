import { html, css, LitElement } from 'lit-element';

export class BrButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .button {
        background: #118060;
        border-radius: 30px;
        font-size: 12px;
        color: #fff;
        height: 32px;
        display: block;
        border: none;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        transition: all .15s linear;
      }
      .button:hover {
        background: transparent;
        color: #298d70;
        border: 2px solid #298d70;
        cursor: pointer;
      }
      .button:active {
        background-color: #298d70;
      }
    `;
  }

  render() {
    return html`
      <button class="button">
        <slot></<slot>
      </button>
    `;
  }
}
