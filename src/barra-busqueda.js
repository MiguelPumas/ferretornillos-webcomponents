import { LitElement, html, css } from 'lit-element';

export class BarraBusqueda extends LitElement {

    static get styles(){
        return css `
            a svg{
                fill: #000;
                width: 30px;
                height: 30px
            }
            #casita{
                margin-top: 1%;
                margin-left: 20%
            }
            #listaproductos,#busquedaproductos {
                margin-top: 1%;
            }
            #casita, #listaproductos {
                float:left;
                height: 60px;
                width: 100px;
                background-color: #FFF;
                margin-bottom:15px;
                justify-content: center;
                display: flex;
            }
            #barra-busqueda{
                background-color: red;
                width: 90%;
                height: 80px;
                margin: 0 2.5% 0 2.5%;
            }
            #casita a, #listaproductos a{
                 margin:0;
                 text-decoration: none;
                 color: #000;
                }
            #listaproductos{
                font-size: 1em;
            }
            #casita a p, #listaproductos a p{
                margin: 0;
                font-weight: bolder;
                font-size: .75em;
            }
            #busquedaproductos{
                width: 400px;
                height: 60px;
                float: left;
                font-size: .75em;
                background-color: red;
                color: #FFF;
                font-weight: bolder;
                margin-left: 15px;
            }
            @media (min-width:  768px) and (max-width:  991px){
                #busquedaproductos{
                    width: 175px;
                    height: 60px;
                    float: left;
                    font-size: .75em;
                    background-color: red;
                    color: #FFF;
                    font-weight: bolder;
                    margin-top:15px;
                    margin-left: 15px;
                }

            }

            @media (max-width: 767px){
                a svg{
                    display: none;
                }
                #casita, #listaproductos {
                    float:left;
                    height: 30px;
                    width: 70px;
                    background-color: #FFF;
                    margin-bottom:15px;
                    margin-top:15px;
                    font-size: .75em;
                    text-align: center;
                    margin-left: 5%;
                }
                #busquedaproductos{
                    width: 150px;
                    height: 60px;
                    float: left;
                    font-size: .75em;
                    background-color: red;
                    color: #FFF;
                    font-weight: bolder;
                    margin-top:15px;
                }
            }
            @media( max-width :480px){
                #casita, #listaproductos {
                    float:left;
                    height: 30px;
                    width: 50px;
                    background-color: #FFF;
                    margin-bottom:15px;
                    margin-top:15px;
                    font-size: .75em;
                    text-align: center;
                }
                #busquedaproductos{
                    width: 100px;
                    height: 60px;
                    float: left;
                    font-size: .75em;
                    background-color: red;
                    color: #FFF;
                    font-weight: bolder;
                    margin-top:15px;
                }
                #buscar{
                    width: 100px;
                }

            }
        `;
    }
   

    render() {
        return html`
        <div id="barra-busqueda">
            <div id="casita">
                <a href="index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                    <p>Inicio</p>
                </a>
                
            </div>
            <div id="listaproductos">
                <a href=#>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g fill-rule="evenodd"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"/></g></svg>
                <p>Lista Productos</p>
                </a>
            </div>
            <div id="busquedaproductos">
                <input type="text"
                id="buscar" >
                <input type="radio" name="opcion" id="descripcion">
                <label>Descripción</label>
                <input type="radio" name="opcion" id="codigo">
                <label>Código</label>
            </div>
            
        </div>
        `;
    }
}
customElements.define('barra-busqueda', BarraBusqueda);