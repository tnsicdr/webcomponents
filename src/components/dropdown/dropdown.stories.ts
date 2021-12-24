import { Meta } from "@storybook/web-components";
import { html } from "lit";
import { Dropdown, IDropdownProps } from ".";
import "./dropdown";

export default {
  title: `${Dropdown.name}`,
} as Meta;

export const Primary = () => html`
  <wc-dropdown label="dropdown"></wc-dropdown>
`
