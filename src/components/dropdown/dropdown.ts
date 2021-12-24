import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface IDropdownProps {
  label: string;
}

export class Dropdown extends LitElement implements IDropdownProps {
  static styles = css`
    .dropdown-children[data-expanded="false"] {
      display: none;
    }
  `;

  @property() label: string = "";

  render() {
    const clickHandler = (e: MouseEvent) => {
      const eventTarget = e.target as HTMLButtonElement;
      const parent = eventTarget.parentElement;
      const container = parent?.querySelector(".dropdown-children");

      if (container instanceof HTMLElement) {
        if (container.dataset.expanded === "false") {
          container.dataset.expanded = "true";
        } else {
          container.dataset.expanded = "false";
        }
      }
    };

    return html`
      <div class="dropdown">
        <button @click=${clickHandler}>${this.label}</button>
        <div class="dropdown-children" data-expanded="false">test</div>
      </div>
    `;
  }
}

customElements.define("wc-dropdown", Dropdown);
