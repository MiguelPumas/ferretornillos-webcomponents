import { LitElement } from "lit-element/lit-element";
import { icons } from "./icons";


export class IconosFerre extends LitElement {
    static get properties(){
        return{
            icon:{
                type: String
            }
        };
    }

    constructor(){
        super();
        this.icon= 'reloj';
    }
    
    render(){
        return html`
            ${icons[this.icon]}
        `;
    }
}
customElements.define('iconos-ferre', IconosFerre);