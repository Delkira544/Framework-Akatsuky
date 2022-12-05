import React from 'react'
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"



dayjs.extend(relativeTime)


const ComentarioProducto = ({ comentario }) => {
    return (
        <div className='p-5 flex space-x-2'>

            <div className='flex-1'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-gray-800'>{"persona"}</span>
                        <small className='ml-2 text-sm text-gray-600'>{dayjs(comentario.created_at).fromNow()}</small>
                    </div>
                </div>
                <p className='mt-4 text-lg text-gray'>{comentario.titulo}</p>
                <p className='mt-4 text-gray'>{comentario.cuerpo}</p>
            </div>
        </div>
    )
}

export default ComentarioProducto