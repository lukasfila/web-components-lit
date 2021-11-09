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

    onClick() {
        this.dispatchEvent(new Event("buttonClick"))
    }

    override render() {
        return html`
            <button @click=${this.onClick} type="${this.type}"><slot></slot></button>
        `;
    }
}