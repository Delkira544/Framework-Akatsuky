<?php

use App\Http\Controllers\ComentarioProductoController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\NosotrosController; //! Se incluye el controlador de nosotros
use App\Http\Controllers\ProductoController; //! Importamos el controlador de productos
use App\Http\Controllers\ProfileController;

use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/**
 * Aqui se creo la ruta que apunta a la vista de react por medio de inertia.
 */
Route::get('/nosotros', function () {
    return Inertia::render('Nosotros/Index', [
       "usuario" => Auth::user()
    ]);

})->middleware([])->name('nosotros');

Route::resource('productos', ProductoController::class)
    ->only(["index", "show"])
    ->middleware([]);

Route::resource('comentarioProducto', ComentarioProductoController::class)
    ->only(['store', 'update', 'destroy'])
    ->middleware(["auth", "verified"]);





Route::resource('contacto', ContactoController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth']);


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'usuario' => Auth::user()
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
