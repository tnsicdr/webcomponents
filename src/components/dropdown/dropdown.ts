import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

export interface IDropdownProps {}

@customElement("wc-dropdown")
export class Dropdown extends LitElement implements IDropdownProps {
  static styles = css`
    button {
      background: none;
      border: 0;
      color: currentColor;
      padding: 0;
    }

    button > * {
      pointer-events: none;
    }

    .wc-dropdown-children[data-expanded="false"] {
      display: none;
    }
  `;

  @state()
  private dropdownState: boolean = false;

  private _boundOutsideClickHandler: (e: MouseEvent) => void;

  constructor() {
    super();
    this.dropdownState = false;
    this._boundOutsideClickHandler = this._handleOutsideClick.bind(this);
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener("click", this._boundOutsideClickHandler);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("click", this._boundOutsideClickHandler);
  }

  private _handleOutsideClick(e: MouseEvent): void {
    if (!this.dropdownState) {
      return;
    }

    const children = Array.from(this.childNodes).concat([this]);

    if (e.target instanceof Element) {
      if (!children.includes(e.target)) {
        console.log(e.target)
        console.log('not contained in')
        console.log(children)
        this.dropdownState = false;
        this.requestUpdate();
      }
    }    
  }

  private _handleDropdownClick(e: MouseEvent): void {
    this.dropdownState = !this.dropdownState;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="wc-dropdown">
        <button @click=${this._handleDropdownClick}>
          <slot name="button"></slot>
        </button>
        <div
          class="wc-dropdown-children"
          data-expanded="${this.dropdownState.toString()}"
        >
          <slot name="contents"></slot>
        </div>
      </div>
    `;
  }
}
