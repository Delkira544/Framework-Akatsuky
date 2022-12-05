import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Imagen from '../../../images/productos/1/imagen.jpg'



export default function CardProducto({ producto }) {

    return (
        <Link href={"/productos/"+ producto.id}>
            <div className='aspect-square bg-[#7D6F6D] rounded-lg p-5'>
                <img className='rounded-md pb-3' src={Imagen} alt="" />
                <div className='border-b border-blue-800 pb-1'>
                    <p>{producto.nombre}</p>
                    <p>{"$ " + producto.precio.toLocaleString("es-ES")}</p>
                </div>
                <p className='pt-2'>{producto.descripcion}</p>

            </div>
        </Link>
    )
}
