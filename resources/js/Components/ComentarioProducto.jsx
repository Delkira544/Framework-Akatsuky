import React, { useState } from 'react'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import Dropdown from './Dropdown'
import InputError from './InputError'
import PrimaryButton from './PrimaryButton'
import { Link, useForm, usePage } from '@inertiajs/inertia-react'


dayjs.extend(relativeTime)


const ComentarioProducto = ({ comentario, id }) => {
  const { auth } = usePage().props
  const [editing, setEditing] = useState(false)
  const { data, setData, patch, processing, reset, errors } = useForm({
    titulo: comentario.titulo,
    cuerpo: comentario.cuerpo
  })

  const submit = (evento) => {
    evento.preventDefault()
    patch(route('comentarioProducto.update', comentario.id), { onSuccess: () => setEditing(false) })
  }


  return (
    <div className='p-5 flex space-x-2 dark:bg-slate-800 border-2 mb-4 rounded-lg'>
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <div className='border-b w-full pb-2'>
            <span className='dark:text-gray-300'>{comentario.user.name}</span>
            <small className='ml-2 text-sm dark:text-gray-400'>{dayjs(comentario.created_at).fromNow()}</small>
            {comentario.created_at !== comentario.updated_at && <small className='text-sm text-gray-600'>&middot; edited</small>}
          </div>
          {
            comentario.user.id === id &&
            <Dropdown>
              <Dropdown.Trigger>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content>

                <button
                  className='dark:bg-gray-700 block w-full px-4 py-2 text-left text-sm leading-5 dark:text-gray-200 hover:bg-gray-600 focus:bg-gray-400 focus:text-gray-900 transition duration-150 ease-in-out'
                  onClick={() => setEditing(true)}
                >
                  Editar
                </button>
                <Link
                  as={"button"}
                  className='dark:bg-gray-700 block w-full px-4 py-2 text-left text-sm leading-5 dark:text-gray-200 hover:bg-gray-600 focus:bg-gray-400 focus:text-gray-900 transition duration-150 ease-in-out'
                  href={route("comentarioProducto.destroy", comentario.id)}
                  method="delete"
                >
                  Eliminar
                </Link>

              </Dropdown.Content>
            </Dropdown>
          }
        </div>
        {editing
          ? <form onSubmit={submit}>
            <input
              value={data.titulo}
              onChange={e => setData('titulo', e.target.value)}
              type="text"
              className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200'
              autoFocus
            />

            <textarea
              value={data.cuerpo}
              onChange={e => setData('cuerpo', e.target.value)}
              type="text"
              className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200'
            >

            </textarea>
            <InputError message={errors.message} />
            <div className='space-x-2'>
              <PrimaryButton className='mt-4'>Actualizar</PrimaryButton>
              <button className='mt-4' onClick={() => setEditing(false) && reset()} >Cancelar</button>

            </div>

          </form>
          : (
            <>
              <p className='mt-4 text-lg dark:text-gray-300'>{comentario.titulo}</p>
              <p className='mt-4 dark:text-gray-300'>{comentario.cuerpo}</p>
            </>

          )
        }
      </div>
    </div>
  )
}

export default ComentarioProducto