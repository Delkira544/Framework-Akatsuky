import React from 'react'
import { Head } from '@inertiajs/inertia-react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Footer from '../Components/Footer'
import '../../css/welcome.css'
import caballo from '../../images/caballito2.gif'
import Image from '../Components/fotos'

export default function Contacto(props){
  return (
    <>
    <Head title="Akatsuki Store - Contacto"/>
    
    <GuestLayout>
    <div className='flex linkcontacto'>
      <Link href="/" >
        <Image url={caballo}/>      
      </Link>
    </div>
    <form >
                <div>
                    <InputLabel forInput="name" value="Nombre" />

                    <TextInput
                        name="name"
                        
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        
                        required
                    />

                    <InputError  className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        
                        className="mt-1 block w-full"
                        autoComplete="username"
                       
                        required
                    />

                    <InputError  className="mt-2" />
                </div>


                <div className="mt-4 ">
                    <InputLabel forInput="comentario" value="Comentario" />

                    <textarea
                        type="textarea"
                        name="text"
                        
                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                        
                        required
                    />

                    <InputError  className="mt-2" />
                </div>

                <div className="flex items-center justify-center mt-4">


                    <PrimaryButton className="ml-4" >
                        Enviar Comentario
                    </PrimaryButton>
                </div>
            </form>


            
    </GuestLayout>
    <GuestLayout>
    <div className='flex justify-center'>
      
      <div><PrimaryButton>Editar</PrimaryButton></div>
      <div><PrimaryButton>Borrar</PrimaryButton></div>
      <div className='bg-gray-100 rounded text-center w-full'><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore adipisci maiores illum repudiandae doloremque tempore reiciendis distinctio maxime facilis tenetur nostrum suscipit, amet quia eum sint est quam consequuntur impedit?</p></div>
    </div>
    </GuestLayout>
    
    </>
  )
}

