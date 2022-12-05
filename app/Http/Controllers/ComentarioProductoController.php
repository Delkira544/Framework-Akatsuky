<?php

namespace App\Http\Controllers;

use App\Models\ComentarioProducto;
use App\Models\Producto;
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

        $comentario->producto_id = $request->input("producto_id");
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
        //
    }

    public function destroy(ComentarioProducto $comentarioProducto)
    {
        //
    }
}
