import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import '../../css/welcome.css';
import Image from '../Components/fotos'
import Footer from '../Components/Footer'

import ImagenInferior from '../../images/pecopeco.gif'
import ImagenInferior2 from '../../images/tacatacataca.gif'
import ImagenInferior3 from '../../images/ok.gif'
import ImagenInferior4 from '../../images/7587.gif'
import Anuncio1 from '../../images/publicidad/rickroll-roll.gif'
import Anuncio2 from '../../images/publicidad/ad-example.gif'
import Carousel from 'react-grid-carousel'
import Navbar from '@/Layouts/NavBar';


export default function Welcome(props) {
  class Timer extends React.Component {
    constructor(props, usuario) {
      super(props);
      this.state = { seconds: 0 };
    }

    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <div>
          Segundos: {this.state.seconds}
        </div>
      );
    }
  }
  var textointroduccion = <p >
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
    <Navbar
    usuario={props.usuario}
    >
      <Head title="Index" />

      <div className="min-h-screen fondo flex flex-row">
        <div className=''>
          <div className='py-2 colorinvisible'></div>
          <div className="flex ">
            <div className='px-2 colorinvisible'></div>
            <div className=' colorrojo anuncioizquierda flex'>
              <Image url={Anuncio1} />
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
              <Carousel cols={1} rows={1} gap={100} loop autoplay={2000} >
                <Carousel.Item>
                  <Image url={ImagenInferior} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image url={ImagenInferior2} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image url={Anuncio1} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image url={ImagenInferior3} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image url={ImagenInferior4} />
                </Carousel.Item>
              </Carousel>


            </div>

            <div className='px-2 colorinvisible'></div>
            <div className='colorrojo anuncioderecha flex '>
              <Image url={Anuncio2} />
              ¡Tu Anuncio podria estar aqui, Contactanos!
            </div>

            <div className='px-2 colorinvisible'></div>
          </div>
          <div className='py-2 colorinvisible'></div>
          <Footer />
        </div>

      </div>

    </Navbar>
  );
}


/*


*/