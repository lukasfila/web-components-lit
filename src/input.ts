import {LitElement, html, css} from 'lit-element';
import {customElement, property} from 'lit/decorators.js';

@customElement("lit-input")

export class LitInput extends LitElement {
    @property()
    value = "";

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
        console.log("value changed input");
        this.dispatchEvent(new CustomEvent("valueChanged", {bubbles: true, detail: this.shadowRoot!.querySelector("input")!.value}))
    }

    override attributeChangedCallback(name: string, _old: string | null, value: string | null) {
        super.attributeChangedCallback(name, _old, value);
        console.log(name);
    }

    override render() {
        return html`
            <label><slot></slot></label>
            <input @keyup="${this.valueChanged}" name="${this.name}" value="${this.value}" id="${this.id}" style="${this.style}"/>
        `;
    }
}