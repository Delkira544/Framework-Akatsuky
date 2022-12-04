import React from 'react'

const ComentarioProducto = ({ comentario }) => {
    return (
        <div className='p-5 flex space-x-2'>

            <div className='flex-1'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-gray-800'>{"sdfasdf"}</span>
                        <small className='ml-2 text-sm text-gray-600'>{""}</small>
                    </div>
                </div>
                <p className='mt-4 text-lg text-white'>{"sdfs"}</p>
                <p className='mt-4 text-white'>{"sdkfjskld"}</p>
            </div>
        </div>
    )
}

export default ComentarioProducto