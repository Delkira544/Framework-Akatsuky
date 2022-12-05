import React from 'react'
import { Head, useForm } from '@inertiajs/inertia-react';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Footer from '../Components/Footer'
import '../../css/welcome.css'
import caballo from '../../images/caballito2.gif'
import Image from '../Components/fotos'
import Carousel from 'react-grid-carousel'
import Contactado from '../Components/Contactado';

const Contacto = ({auth, contactos}) => {
  const {data, setData, post, processing, reset, errors} = useForm({
    nombre: '',
    email:'',
    body:''
  })

  const user = auth
  
  const submit = (e) => {

    e.preventDefault()
    //console.log(data)
    post(route('contacto.store'), {onSuccess:()=>reset()})
  }

  return (
    <>
    <Head title="Contacto"/>
    
    <GuestLayout >
    <div className='flex linkcontacto'>
      
      <Link href="/" >
        <Image url={caballo}/>      
      </Link>
      
    </div>
    <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Nombre" />

                    <TextInput
                        name="name"
                        value={data.nombre}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        
                        handleChange={e=>setData('nombre', e.target.value)}
                        required
                    />

                    <InputError  message={errors.title} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={e=>setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.title}   className="mt-2" />
                </div>


                <div className="mt-4 ">
                    <InputLabel forInput="comentario" value="Comentario" />

                    <textarea
                        type="textarea"
                        name="text"
                        value={data.body}
                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                        onChange={e=>setData('body', e.target.value)}
                        required
                    />

                    <InputError message={errors.title}  className="mt-2" />
                </div>

                <div className="flex items-center justify-center mt-4">


                    <PrimaryButton className="ml-4" disabled={processing}>
                        Enviar Comentario
                    </PrimaryButton>
                </div>
            </form>            
    </GuestLayout>
    <div className=" flex  sm:justify-center items-center pt-6 py-9 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                  <div className='px-9 colorinvisible'></div>
                      <div className='px-9 colorinvisible'></div>
                      <Carousel cols={2} rows={1} gap={50} loop>
                        {
                          contactos.map(post => <Carousel.Item><Contactado key={post.id} post={post}/></Carousel.Item>)
                        }
                      </Carousel>
                        <div className='px-9 colorinvisible'></div>
                  <div className='px-9 colorinvisible'></div>
      </div>
    <Footer/>
    </>
  )
}

export default Contacto


/*
{(user)?(<div> hola {user.auth.user.name}</div>):(<div>chao</div>)}
*/