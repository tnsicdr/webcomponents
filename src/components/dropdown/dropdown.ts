import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface IDropdownProps {
}

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

    .dropdown-children[data-expanded="false"] {
      display: none;
    }
  `;

  render() {
    const clickHandler = (e: MouseEvent) => {
      console.log('click')
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
        <button @click=${clickHandler}>
          <slot name="button">Dropdown</slot>
        </button>
        <div class="dropdown-children" data-expanded="false">
          <slot name="contents"></slot>
        </div>
      </div>
    `;
  }
}
