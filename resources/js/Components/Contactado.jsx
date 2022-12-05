import React, { useState } from 'react'
import Carousel from 'react-grid-carousel'
import PrimaryButton from '@/Components/PrimaryButton';

import InputError from './InputError';
import InputLabel from './InputLabel';
import { useForm, usePage } from '@inertiajs/inertia-react';
import Dropdown from './Dropdown';



const Contactado = ({post}) => {
    const {auth} = usePage().props
    const [editing, setEditing] = useState(false)
    const {data, setData, patch, processing, reset, errors} = useForm({
        nombre: post.nombre,
        body: post.body
    })

    const submit = (e) =>{
        e.preventDefault()
        patch(route('contacto.update', post.id), {onSuccess: ()=> setEditing(false)})
    }

  return ( 
    <>
        <div className="w-full flex sm:max-w-xxl items-center mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">

            {editing ? <form onSubmit={submit} className=" w-full">
                            
                                    <InputLabel forInput="comentario" value="Ingrese nuevo Comentario:" />
                                    <textarea
                                        type="textarea"
                                        name="text"
                                        value={data.body}
                                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                                        onChange={e=>setData('body', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title}  className="mt-2" />
                                    <div className='py-2 colorinvisible'></div>
                                    <div className='flex items-center justify-center'>
                                        <PrimaryButton>Confirmar</PrimaryButton>
                                        <div className='px-1 colorinvisible'></div>
                                        <PrimaryButton onClick={()=>setEditing(false) && reset}>Cancelar</PrimaryButton>
                                    </div> 
                        </form>
                        
            :(
                <>
                    <div className='px-2 items-center text-center bg-gray-300 rounded  '><p>{post.nombre}</p></div>
                    <div className='px-2 colorinvisible'></div>
                    <div className='bg-gray-100 rounded text-center w-full px-2 '><p>{post.body}{post.created_at !== post.updated_at && <small>(Editado)</small>}</p></div>
                </>)
            }
            
        </div>
        {post.user.id === auth.user.id && 
         <div className='px-2 py-2 flex items-center justify-center'>
            <Dropdown.Link as="button" href={route('contacto.destroy', post.id)} method='delete'><PrimaryButton>Borrar</PrimaryButton></Dropdown.Link>
            <div className='px-1 colorinvisible'></div>
            <PrimaryButton onClick={()=> setEditing(true)}>Editar</PrimaryButton>
        </div>
        }
   
    
    </>
  )
}

export default Contactado

