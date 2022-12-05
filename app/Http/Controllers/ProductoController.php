<?php

namespace App\Http\Controllers;

use App\Models\ComentarioProducto;
use App\Models\Producto;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductoController extends Controller
{

    public function index()
    {

        return Inertia::render("Productos/Index", [
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
        //$comentarios = Producto::find($producto->id)->comentarios()->user();

        /*
        $comentarios = Producto::find(1)->comentarios()
        ->join("users", function($query){
            $query->on('users.id','=','comentario_productos.user_id');
        })->get();
         */
        $comentarios = ComentarioProducto::with('user:id,name')->where("producto_id", '=', $producto->id)->latest()->get();
        $usuario = Auth::user();
        return Inertia::render('Productos/Show', [
            'producto' => $producto,
            'comentarios' => $comentarios,
            'usuario' => $usuario
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
