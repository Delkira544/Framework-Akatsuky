<?php

namespace App\Http\Controllers;

use App\Models\ComentarioProducto;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComentarioProductoController extends Controller
{
    
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        
        $comentario = new ComentarioProducto;
        $id = Auth::id();

        $validado = $request->validate([
            'titulo' => 'required|string|max:40', //Mediante esto de hace que el campo sea requerido, 
            //que tiene que ser un string y que maximo puede tener 100 caracteres
            'cuerpo' => 'required|string|max:255',
        ]);

        $comentario->producto_id = $request->input("producto_id");
        $comentario->user_id = $id;
        $comentario->titulo = $request->input("titulo");
        $comentario->cuerpo = $request->input("cuerpo");
        $comentario->save();

        return 0;
    }

    public function show(ComentarioProducto $comentarioProducto)
    {
        //
    }

    public function edit(ComentarioProducto $comentarioProducto)
    {
        //
    }

    public function update(Request $request, ComentarioProducto $comentarioProducto)
    {
        $this->authorize('update', $comentarioProducto);

        $validado = $request->validate([
            'titulo' => 'required|string|max:40', //Mediante esto de hace que el campo sea requerido, 
            //que tiene que ser un string y que maximo puede tener 100 caracteres
            'cuerpo' => 'required|string|max:255',
        ]);

        $comentarioProducto->titulo = $request->input("titulo");
        $comentarioProducto->cuerpo = $request->input("cuerpo");

        $comentarioProducto->update();

        return 0;
    }

    public function destroy(ComentarioProducto $comentarioProducto)
    {
        $this->authorize('delete', $comentarioProducto);
        $comentarioProducto->delete();
        return 0;
    }
}
