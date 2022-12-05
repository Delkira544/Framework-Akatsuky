<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComentarioProducto extends Model
{
    use HasFactory;

    public function producto(){
        return $this -> belongsTo(Producto::class, "producto_id");
    }

    public function user(){
        return $this -> belongsTo(User::class);
    }
    protected $fillable =[
        'titulo',
        'cuerpo'
    ];
}
