import {LitElement, html, css} from 'lit-element';
import {customElement, property} from 'lit/decorators.js';

@customElement("lit-input")
export class LitInput extends LitElement {
    @property()
    value: string = "";

    @property()
    name = "";

    static override styles = css`
        label {
          font-family: "Tahoma",sans-serif;
          font-size: 10pt;
        }
        input {
          font-family: "Tahoma",sans-serif;
          border: 1px dashed black;
          font-size: 10pt;
        }
    `;

    valueChanged() {
        this.value = this.shadowRoot!.querySelector("input")!.value;
        this.dispatchEvent(new Event("valueChanged"));
    }

    override render() {
        return html`
            <label for="${this.id}"><slot></slot></label>
            <input 
                @keyup="${this.valueChanged}" 
                name="${this.name}" 
                value="${this.value}" 
                id="${this.id}" 
                style="${this.style}"
            />
        `;
    }
}