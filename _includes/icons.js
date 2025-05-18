import * as si from "simple-icons/icons";

export function simpleIcon({ name, className }) {
  let icon = si["si" + name];
  return `
    <svg
      role="img"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      class="icon__svg ${className}"
      style="fill: #${icon.hex}"
      aria-hidden="true">
      <path d="${icon.path}" />
    </svg>
  `;
}
