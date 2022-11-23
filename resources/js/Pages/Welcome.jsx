import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import '../../css/welcome.css';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen fondo sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block colornose">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                <button className='btn btn-primary'>Register</button>
                            </Link>
                        </>
                    )}
                </div>
                        <div className='align-self-start colorinvisible'><img src="../../images/publicidad/rickroll.gif" alt="?" /></div>
                        <div className="align-self-center colorrojo flex-fill">
                            <div>
                                <hr />
                                <p >
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
                                    <strong>Emojicode</strong>, tambien instalacion y arreglo de
                                    sistemas operativos enfocados en Linux. Servicios de maquetado ,
                                    diseño y arreglo de paginas web a domicilio(Costo de Servicio
                                    incluye tarifa de transporte de personal). Y ultimo pero no menos
                                    importante , reventa de monedas virtuales para juegos online con
                                    precios mejores que los originales. <br /><br />
                                    Apreciamos su visita a la pagina y esperamos que los productos
                                    <br />
                                    y servicios ofrecidos sean de su agrado.
                                </p>
                                <hr />
                            </div>
                        </div>
                        
                   

            </div>
        </>
    );
}
