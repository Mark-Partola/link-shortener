import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-input")
export class AppInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 50%;
    }

    input {
      box-sizing: border-box;
      width: 100%;
      border: none;
      border-radius: 10px;
      height: 50px;
      box-shadow: 0 0 40px rgba(34, 60, 80, 0.1);
      padding: 0 10px;
      font-size: 18px;
      font-family: inherit;
      font-weight: 300;
    }

    ::placeholder {
      color: #ccc;
    }
  `;

  render() {
    return html`<input
      placeholder="https://long-url.example.com/path/to"
      @input="${this.handleInput}"
    />`;
  }

  handleInput(e: KeyboardEvent) {
    const options = {
      detail: { value: (e.target as HTMLInputElement).value },
      bubbles: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("change", options));
  }
}
