import React from 'react'
import { Link } from '@inertiajs/inertia-react'
import Imagen from '../../../images/productos/1/imagen.jpg'



export default function CardProducto({ producto }) {

    return (
        <Link href={"/productos/"+ producto.id}>
            <div className='aspect-square dark:bg-zinc-700 rounded-lg p-5'>
                <img className='rounded-md pb-3' src={Imagen} alt="" />
                <div className='dark:text-slate-200 border-b dark:border-amber-800 pb-1'>
                    <p>{producto.nombre}</p>
                    <p>{"$ " + producto.precio.toLocaleString("es-ES")}</p>
                </div>
                <p className='pt-2 dark:text-slate-200'>{producto.descripcion}</p>

            </div>
        </Link>
    )
}
