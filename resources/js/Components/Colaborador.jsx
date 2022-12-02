import React from 'react';
import jorge from '../../images/jorge.png'
import christian from '../../images/Delkira22.jpeg'

import DiscorIcon from '../../images/icons/github_chiquito.png'
import FacebookIcon from '../../images/icons/fb_chiquito.png'
import InstagramIcon from '../../images/icons/insta_chiquito.png'


export default function Colaborador({ usuario }) {

    return (
        <div className='flex flex-row pr-9 pb-4'>
            <div className="basis-3/6 my-6 mx-9 bg-gray-100">
                <img src={"~/resources/images/jorge.png"} alt="" className=' h-full w-full aspect-video' />
            </div>
            <div className="basis-5/6 p-4 bg-gray-500">
                <div className="flex flex-col">
                    <h1 className='font-sans text-3xl text-center pb-6'>{usuario.nombre}</h1>
                    <p className='font-sans break-words'>
                        {usuario.descripcion}
                    </p>
                    <div className="grid grid-cols-5 pt-11">
                        <div className="col-end-6 col-span-2 flex flex-nowrap">
                            <a href={"https://github.com/"+usuario.redes[0]}><img src={DiscorIcon} alt="" className='w-2/5' /></a>
                            <a href="https://www.facebook.com/"><img src={FacebookIcon} alt="" className='w-2/5' /></a>
                            <a href="https://www.instagram.com/"><img src={InstagramIcon} alt="" className='w-2/5' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
