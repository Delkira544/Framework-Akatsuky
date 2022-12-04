import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

import { Head } from '@inertiajs/inertia-react'

import hola from '@/../images/productos/4/imagen.jpg'
import BotonGenerico from '@/Components/BotonGenerico'
import ImageComponent from '@/Components/ImageComponent'
import ComentarioProducto from '@/Components/ComentarioProducto'



function Show({ producto }) {
   return (
      <AuthenticatedLayout
      >
         <Head title={producto.nombre} />
         <div className="max-w-7xl mx-auto sm:px-6 lg:px-1 py-2">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-12 py-9">
               <div className='flex bg-white'>

                  <img className='w-1/2 m-4' src={hola} alt="" />
                  <div className='w-1/2 py-4 px-7 bg-stone-700'>
                     <h1 className='border-b pb-1'>{producto.nombre}</h1>
                     <div className='flex'>
                        <p className='basis-2/3 ml-2'>{"$ " + producto.precio.toLocaleString("es-ES")}</p>
                        <BotonGenerico color="blue" >LOl</BotonGenerico>
                     </div>
                     <p>{producto.descripcion}</p>

                  </div>

               </div>
            </div>

            <div className='bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-12 py-9 mt-3'>
               <h1 className='w-'>Comentarios</h1>
               <div className='bg-white'>
                  <ComentarioProducto></ComentarioProducto>

               </div>
            </div>
         </div>

      </AuthenticatedLayout>
   )
}

export default Show