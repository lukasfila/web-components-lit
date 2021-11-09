import {LitElement, html, css} from 'lit-element';
import {customElement, property} from "lit/decorators.js";


export interface ILitResize {
	width?: number;
	height?: number;
	scale?: number;
}

@customElement("lit-resize")
export class LitResize extends LitElement {
	@property()
	data: ILitResize = {};


	static override styles = css`
        h1 {
        	font-size: 20px;
       	}
    `;

	override render() {
		return html`
            <div style="width: ${this.data.width}px; height: ${this.data.height}px; transform: scale(${this.data.scale});"><slot></slot></div>
        `;
	}
}