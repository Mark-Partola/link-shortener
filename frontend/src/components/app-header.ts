import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { api } from "../api/api";
import { config } from "../config";

import "./app-logo";
import "./app-input";
import "./app-button";

@customElement("app-header")
export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #f5f8fa;
      width: 100%;
      padding-bottom: 20px;
      overflow: hidden;
    }

    .app-layout {
      max-width: 960px;
      margin: 0 auto;
      padding: 20px;
    }

    .app-header-field {
      display: flex;
    }

    .app-header-result {
      margin-top: 10px;
      height: 0;
      overflow: hidden;
      animation: slide-down 0.5s forwards;
    }

    .error {
      color: #a33;
    }

    @keyframes slide-down {
      to {
        height: 1.5em;
      }
    }
  `;

  @property()
  value: string = "";

  @property({ type: Boolean })
  loading: boolean = false;

  @property({ type: Boolean })
  error: boolean = false;

  @property()
  hash: string | null = null;

  render() {
    return html`
      <div class="app-layout">
        <app-logo></app-logo>
      </div>
      <div class="app-layout">
        <slot></slot>
        <div class="app-header-field">
          <app-input @change="${this.handleChange}"></app-input>
          <app-button .loading="${this.loading}" @click="${this.handleSubmit}">
            Link
          </app-button>
        </div>
        ${this.error
          ? html`<div class="app-header-result error">
              Something went wrong. Check your URL
            </div>`
          : null}
        ${this.hash
          ? html`<div class="app-header-result">
              <a href="${this.hash}">${this.hash}</a>
            </div>`
          : null}
      </div>
    `;
  }

  handleChange(e: CustomEvent<{ value: string }>) {
    this.value = e.detail.value;
  }

  async handleSubmit() {
    this.loading = true;
    this.error = false;
    this.hash = null;

    try {
      const response = await api.shorten(this.value);

      this.hash = `${config.BACKEND_URL}/${response.hash}`;
    } catch {
      this.error = true;
    }

    this.loading = false;
  }
}
