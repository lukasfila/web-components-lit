import {LitElement, html, css} from 'lit-element';
import {customElement, property} from "lit/decorators.js";

@customElement("lit-button")
export class LitButton extends LitElement {
    @property()
    type: "button"|"submit"|"reset" = "button";

    static override styles = css`
        button {
          font-family: "Tahoma",sans-serif;
          border: 1px solid black;
          font-size: 10pt;
        }
    `;

    override render() {
        return html`
            <button type="${this.type}"><slot></slot></button>
        `;
    }
}