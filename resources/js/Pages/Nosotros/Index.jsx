import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import Colaborador from '@/Components/Colaborador';


function Index(props) {
    let Jorge = {
        nombre: "Jorge Soto Contreras (Linich)",
        edad: 23, 
        descripcion: "Ingeniero Civil en Informatica, Graduado de la Pontifice Universidad Catolica de Temuco\
        con Doctorado en ciencias de Desarrollo Web Con 20 años de experiencia en el rubro de la informatica.\
        Programando desde los 3 años, salio de la cuna y en lugar de caminar , programaba. su lenguaje\
        favorito es MayaScript y EmojiCode.",
        imagen: "jorge", 
        redes: ["Linich14", "ssdfs", "sdasda"]
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">¿ Quienes Somos Nosotros ?</h2>}
        >
            <Head title="Nosotros" />

            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-1">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg py-9">

                        <Colaborador usuario={Jorge} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index
