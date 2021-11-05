import {LitElement, html, css} from 'lit-element';
import {customElement} from "lit/decorators.js";


@customElement("lit-form")
export class LitForm extends LitElement {

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


    change(event: CustomEvent) {
        console.log(event.detail);
    }

    override render() {
        return html`
            <form action="?submit" method="get">
                Custom components: <br/>
                <lit-input name="input_name" @valueChanged="${this.change}">Label</lit-input>
                <lit-button type="submit" @click="">Submit</lit-button>
                <lit-button type="reset">Clear</lit-button>
                <br />
                
            </form>
        `;
    }
}