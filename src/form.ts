import {LitElement, html, css} from 'lit-element';
import {customElement, property} from "lit/decorators.js";

@customElement("lit-form")
export class LitForm extends LitElement {
    @property()
    searchText: string = "";

    static override styles = css`
        web-input {
            color: blue;
        }
        label {
            color: black;
        }
        button {
            background: #efefef;
            border: 1px solid gray;
        }
    `;

    change() {
        const inputElement = this.shadowRoot!.querySelector("lit-input");
        this.searchText = inputElement.value || "";
    }

    submit() {
        this.dispatchEvent(new Event("formSubmit"));
    }

    override render() {
        return html`
            <form action="?submit" method="GET">
                <lit-input name="input_name" @valueChanged="${this.change}" value=${this.searchText}>Label</lit-input>
                <lit-button type="submit" @click="${this.submit}">Submit</lit-button>
            </form>
        `;
    }
}