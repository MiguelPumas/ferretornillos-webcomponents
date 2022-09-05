import { LitElement, html, css } from 'lit-element';

export class AccesoLogin extends LitElement {

    static get properties() {
        return{
            closed: {
                type: Boolean
            }
        };
    }

    constructor (){
        super();
        this.closed=true;
    }

    static get styles(){
        return css`
            .closed{
                display: none;
            }
            section{
                position:absolute;
            }
        `;
    }

    render() {
        return html`
            <div class="trigger" @click="${this.toogle}">
                <slot name="trigger"></slot>
            </div>
            <section class="${this.closed ? 'closed': ''}">
                <slot></slot>
            </section>
        `;
    }

    toogle() {
        this.closed = ! this.closed;
    }
}
customElements.define('accesos-login', AccesoLogin);