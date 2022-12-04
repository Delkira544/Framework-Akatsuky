import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import '../../css/welcome.css';
import Image from '../Components/fotos'
import Footer from '../Components/Footer'

import ImagenInferior from '../../images/pecopeco.gif'
import Anuncio1 from '../../images/publicidad/rickroll-roll.gif'
import Anuncio2 from '../../images/publicidad/ad-example.gif'



export default function Welcome(props) {

    var textointroduccion =  <p >
                    Este es Akatsuki Store, una pagina hecha por el proyecto de mismo
                    nombre <ins>Akatsuki Proyect</ins> . <br />
                    Somos Akatsuki , del Japones: <q> あかつき </q> para decir Amanecer,
                    en este sentido usamos el nombre en referencia para el inicio de
                    este proyecto y futuros por parte de este equipo. <br />
                    <br />
                    El principal movimiento de este proyecto es venta de servicios y
                    productos del area de las Ciencias de la Computacion con un gran
                    enfoque en la experiencia de venta para garantizar la satisfaccion
                    del usuario. <br />
                    <br />
                    Contamos con una amplia gama de productos como venta de tarjetas
                    graficas de ultima generacion. Venta de prestacion de servicios
                    tecnicos de computacion como clases de programacion en este caso
                    concreto el gran lenguaje de programacion llamado 
                    <strong> Emojicode</strong>, tambien instalacion y arreglo de
                    sistemas operativos enfocados en Linux. Servicios de maquetado ,
                    diseño y arreglo de paginas web a domicilio(Costo de Servicio
                    incluye tarifa de transporte de personal). Y ultimo pero no menos
                    importante , reventa de monedas virtuales para juegos online con
                    precios mejores que los originales. <br /><br />
                    Apreciamos su visita a la pagina y esperamos que los productos
                    <br />
                    y servicios ofrecidos sean de su agrado.
                </p> 


    return (
        <>
            <Head title="Akatsuki Store" />
            
            <div className="min-h-screen fondo flex flex-row">
               <div className=''> 
                    <div className=' py-2 navbarcito colornose'>
                        aqui va el navbar 
                    </div>
                    <div className='py-2 colorinvisible'></div>   
                    <div className="flex "> 
                        <div className='px-2 colorinvisible'></div>
                        <div className=' colorrojo anuncioizquierda flex'>
                            <Image url={Anuncio1}/>
                            ¡Tu Anuncio podria estar aqui, Contactanos!
                        </div>
                        <div className='px-2 colorinvisible'></div>  
                        <div className='colorrojo textocentrado  textocentral centro'>
                            <div className='  textocentrado px-6 py-6 colornose text-xl titulosuperior'>
                                <h1><strong>Akatsuki Store</strong></h1>
                            </div>
                            <h2><strong>¡Bienvenid@!</strong></h2>
                            <div className='flex'>
                            <div className='px-6 colorinvisible'></div>
                            <div className='d-flex py-3'>                            
                                <hr />                        
                                {textointroduccion}
                                <hr />
                            </div>
                            <div className='px-6 colorinvisible'></div>
                            
                            </div>

                            <Image url={ImagenInferior}/>
                             
                        </div>
                        
                        <div className='px-2 colorinvisible'></div>
                        <div className='colorrojo anuncioderecha flex '>
                            <Image url={Anuncio2}/>
                            ¡Tu Anuncio podria estar aqui, Contactanos!
                        </div>
                        
                        <div className='px-2 colorinvisible'></div>                           
                    </div>
                    <div className='py-2 colorinvisible'></div>    
                    <Footer/>             
                </div>
                
            </div>
            
        </>
    );
}


/*


*/