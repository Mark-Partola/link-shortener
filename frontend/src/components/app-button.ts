import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./app-header";

@customElement("app-button")
export class AppButton extends LitElement {
  static styles = css`
    button {
      min-width: 100px;
      height: 100%;
      background-color: #5d3be5;
      border: none;
      color: #fff;
      padding: 0 20px;
      transition: all 0.2s ease-in-out;
      border-radius: 8px;
      margin-left: 10px;
      cursor: pointer;
      transform: translateZ(0);
    }

    button:hover {
      transform: scale(1.05) translateZ(0);
    }
  `;

  @property({ type: Boolean })
  loading = false;

  render() {
    return html`<button>
      ${this.loading ? this.renderLoader() : html`<slot></slot>`}
    </button>`;
  }

  renderLoader() {
    return html`
      <svg viewBox="0 0 100 100" width="20">
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke-width="8"
          stroke="#fff"
          stroke-dasharray="50.26548245743669 50.26548245743669"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    `;
  }
}
