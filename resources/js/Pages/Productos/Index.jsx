import React from 'react'
import CardProducto from '@/Components/Productos/CardProducto'
import Navbar from '@/Layouts/NavBar'
import { Head } from '@inertiajs/inertia-react'

function Index({ productos }) {

    return (
        <Navbar
            header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">Productos</h2>}
        >
            <Head title='Productos' />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-1 py-2">
                <div className="grid sm:grid-cols-2 gap-8 xl:grid-cols-3 gap-2 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg px-12 py-9">

                    {
                        productos.map( producto => 
                            <CardProducto key={producto.id} producto={producto}/>
                        )
                    }

                </div>
            </div>

        </Navbar>
    )
}

export default Index