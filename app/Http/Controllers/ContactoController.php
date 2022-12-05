<?php

namespace App\Http\Controllers;

use App\Models\Contacto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactoController extends Controller
{

    public function index()
    {
        return Inertia::render('Contacto',[
            'contactos' => Contacto::with('user:id,name')->latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        //validar datos
        $validated = $request->validate([
            'nombre'=>'required|string|max:100',
            'email'=>'required|string|max:100',
            'body'=>'required|string|max:500'
        ]);

        $request->user()->contactos()->create($validated);
        return redirect(route('contacto.index'));

    }

    public function update(Request $request, Contacto $contacto)
    {
        //
        $this->authorize('update', $contacto);
        $validated = $request->validate([
            'body'=>'required|string|max:300'
        ]);

        $contacto->update($validated);
        return redirect(route('contacto.index'));
    }


    public function destroy(Contacto $contacto)
    {
        //
        $this->authorize('delete', $contacto);
        $contacto->delete();
        return redirect(route('contacto.index'));
    }
}
