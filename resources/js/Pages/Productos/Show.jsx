import React from 'react'

import hola from '@/../images/productos/4/imagen.jpg'

import ComentarioProducto from '@/Components/ComentarioProducto'

import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head, InertiaLink } from '@inertiajs/inertia-react'
import Navbar from '@/Layouts/NavBar'




function Show({ producto, comentarios, usuario }) {
   const { data, setData, post, processing, reset, errors } = useForm({
      'producto_id': producto.id,
      'titulo': '',
      'cuerpo': ''
   })

   const enviar = (evento) => {
      evento.preventDefault()
      post(route("comentarioProducto.store"), { onSuccess: () => reset() })
      console.log(usuario)

   }

   return (
      <Navbar
         usuario={usuario}
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

                     </div>
                     <p>{producto.descripcion}</p>

                  </div>

               </div>
            </div>

            <div className='dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-12 py-9 mt-3'>

               <div className='bg-gray-700'>
                  <h1 className='w-'>Agregar un Comentario</h1>
                  <form className='' onSubmit={enviar}>
                     <input
                        value={data.titulo}
                        onChange={e => setData('titulo', e.target.value)}
                        type="text"
                        placeholder='Titulo'
                        className='block w-full'
                        autoFocus
                     />
                     <InputError message={errors.titulo} />
                     <textarea
                        value={data.cuerpo}
                        onChange={e => setData('cuerpo', e.target.value)} g
                        type="text"
                        placeholder='Comentario'
                        className='block w-full text-gray'
                        autoFocus
                     >
                     </textarea>
                     <InputError message={errors.cuerpo} />
                     <PrimaryButton
                        
                        disabled={processing}
                     >
                        Comentar
                     </PrimaryButton>
                  </form>

               </div>

               <div className='bg-white mt-5'>
                  {
                     comentarios.map( comentario =>
                        <ComentarioProducto key={comentario.id} comentario={comentario} id={usuario?usuario.id:""} />

                     )
                  }

               </div>
            </div>
         </div>

      </Navbar>
   )
}

export default Show