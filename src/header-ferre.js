import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';

export class Header extends LitElement {

    static get styles(){
        return css`
        #logo-img{	
            background: url('../images/logo.webp') no-repeat;
            width: 260px;
            height: 100px;
            margin: 5px 5px 5px 5px;
        }
        #horarios, #direccion, #telefono {
            width: 20%;
            float: left;
            height: 100px;
        }
        #horas{
            float:left;
        }
        svg{
            width: 48px;
            height: 48px;
            margin-top: 10px;
            fill: red;
            float: left;

        }
        
        #Ferrelogo a {
            color: #000;
            text-decoration: none;
            background: #FFF;
            /*clear: both;*/
        }
        #logo-img{	
            background: url('../images/logo.webp') no-repeat;
            width: 260px;
            height: 100px;
            margin: 5px 5px 5px 5px;
        }
        #Ferrelogo{
            float: left;
        }
        #horarios ul, #direccion ul, #telefono ul{
            text-decoration: none;
            list-style: none;
            margin-top:15px;
            margin-left: 20px;
        }
        
        #telefono{
            margin: 5px 100px 10px 10px;
            float: left;
        }
        #reloj{
            margin-top: 15px;
            margin-left: 25px;
            justify-content: center;
            float:left
        }

        @media (min-width:  992px) and (max-width: 1199px){

            body{
                background-color: #F00 ;
                font-family: 'Oxygen', sans-serif;
                font-size:1em;
            }
            
                #Ferrelogo a {
                color: #000;
                text-decoration: none;
                background: #FFF;
                clear: both;
            }
            
            #logo-img{	
                background: url('../images/logo.webp') no-repeat;
                width: 300px;
                height: 100px;
                margin: 5px 10px 10px 50px;
            }
            
            #horarios, #direccion, #telefono {
                margin-top:15px;
                width: 20%;
                float: left;
                height: 100px;
                justify-items:center;
                font-size: 20px;
                display:
            }
            
            #horarios ul, #direccion ul, #telefono ul{
                text-decoration: none;
                list-style: none;
            }
            
             } /* fin 992px - 1199px */
            
            
            @media (min-width:  768px) and (max-width:  991px){
            
            body{
                background-color: #F00 ;
                font-family: 'Oxygen', sans-serif;
                font-size:1em;
            }
            
                #Ferrelogo a {
                color: #000;
                text-decoration: none;
                background: #FFF;
                /*clear: both;*/
            }
            
            #logo-img{	
                background: url('../images/logo.webp') no-repeat;
                width: 260px;
                height: 100px;
                margin: 5px 5px 5px 5px;
            }
            
            #horarios, #direccion, #telefono {
                width: 20%;
                float: left;
                height: 100px;
                margin: 0;
                text-align: Center;
                justify-content: center;
            }
            
            #horarios ul, #direccion ul, #telefono ul{
                text-decoration: none;
                list-style: none;
            }

            #reloj{
                margin-top: 10px;
                margin-left: 25px;
                justify-content: center;
                float:left;
                height:25px;
                width:25px;
            }
            
            } /*Fin 768 px -991px*/
            
            @media (max-width: 767px){
                body{
                background-color: #F00 ;
                font-family: 'Oxygen', sans-serif;
                font-size: 14px;
            }
                    #Ferrelogo a {
                color: #000;
                text-decoration: none;
                background: #FFF;
                /*clear: both;*/
            }
            
            #logo-img{	
                background: url('../images/logo.webp') no-repeat;
                width: 75px;
                height: 100px;
                margin: 5px 5px 5px 5px;
            }
            
            #horarios, #direccion, #telefono {
                width: 25%;
                float: left;
                height: 100px;
                margin: 0;
                text-align: Center;
                font-size:.75em;
            }
            
            #horarios ul, #direccion ul, #telefono ul{
                text-decoration: none;
                list-style: none;
            }
            #reloj{
                display:none;
            }
            #header-nav{
                background-color: #FFF;
                height: 150px;
            }
            
            }
            
        
        `;
    }
    

    render() {
        return html`
            <div id="Ferrelogo">
                <a href="index.html">
                    <div id="logo-img" alt="Logo image"></div>
                </a>
            </div><!--Fin id Ferrelogo-->
            
            <div id="horarios">
           
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>

					<ul>
						<li>L-V 8:00-18:00</li>
						<li>Sábado 8:00- 14:00</li>
					</ul>
                <!-- </div>     -->
			</div> <!--Fin div horarios-->	
				<div id="direccion">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
					<ul>
						<li>Sostenes Rocha 13, Centro</li>
						<li>36100, Silao Gto.</li>
					</ul>
				</div><!--fin div direccion-->	
				<div id="telefono">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
					<ul>
						<li>472-722-5975</li>
						<li>472-723-4172</li>
					</ul>					
				</div><!--fin div telefono-->

        
        `;
    }

    _asignImag(src){
        if(src='reloj'){
            return icons.reloj;
        }
    }
}
customElements.define('header-ferre', Header);