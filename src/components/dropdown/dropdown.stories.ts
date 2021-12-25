import { Meta } from "@storybook/web-components";
import { html } from "lit";
import { Dropdown, IDropdownProps } from ".";
import "./dropdown";

export default {
  title: `${Dropdown.name}`,
} as Meta;

export const Primary = () => html` <wc-dropdown></wc-dropdown> `;

export const Slotted = () => html`
  <wc-dropdown label="dropdown">
    <div slot="button">Button</div>
    <ul slot="contents">
      <li>First</li>
      <li>Second</li>
    </ul>
  </wc-dropdown>
`;

export const Multiple = () => html`
  <wc-dropdown label="dropdown">
    <div slot="button">Button</div>
    <ul slot="contents">
      <li>First</li>
      <li>Second</li>
    </ul>
  </wc-dropdown>

  <wc-dropdown label="dropdown">
    <div slot="button">Button</div>
    <ul slot="contents">
      <li>First</li>
      <li>Second</li>
    </ul>
  </wc-dropdown>
`;
