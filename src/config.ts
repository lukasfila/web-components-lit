import {LitElement, html, css} from 'lit-element';
import {customElement, property} from "lit/decorators.js";
import {ComplexData} from "./data/object";


@customElement("lit-config")
export class LitConfig extends LitElement {
	@property()
	complexObject: ComplexData | null = null;


	static override styles = css`
        h1 {
        	font-size: 20px;
       	}
    `;

	override render() {
		return html`
            <pre>${JSON.stringify(this.complexObject)}</pre>
        `;
	}
}