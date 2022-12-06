<?php

namespace App\Policies;

use App\Models\ComentarioProducto;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ComentarioProductoPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user)
    {
        //
    }

    public function view(User $user, ComentarioProducto $comentarioProducto)
    {
        //
    }

    public function create(User $user)
    {
        //
    }

    public function update(User $user, ComentarioProducto $comentarioProducto)
    {
        return $comentarioProducto->user()->is($user);
    }

    public function delete(User $user, ComentarioProducto $comentarioProducto)
    {
        return $comentarioProducto->user()->is($user);
    }

    public function restore(User $user, ComentarioProducto $comentarioProducto)
    {
        //
    }


    public function forceDelete(User $user, ComentarioProducto $comentarioProducto)
    {
        //
    }
}
