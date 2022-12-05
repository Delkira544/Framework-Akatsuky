<?php

namespace App\Http\Controllers;

use App\Models\ComentarioProducto;
use App\Models\Producto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductoController extends Controller
{

    public function index()
    {
        
        return Inertia::render("Productos/Index",[
            'productos' => Producto::all()
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
       //
    }


    public function show(Producto $producto)
    {
        $comentarios = Producto::find($producto->id)->comentarios()->where("titulo", "hjasdfol")->get();
        
        return Inertia::render('Productos/Show', [
            'producto' => $producto,
            'comentarios' => $comentarios
        ]);
    }

    public function edit(Producto $producto)
    {
        //
    }

    public function update(Request $request, Producto $producto)
    {
        //
    }

    public function destroy(Producto $producto)
    {
        //
    }
}
