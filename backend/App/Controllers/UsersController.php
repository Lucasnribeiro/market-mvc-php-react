<?php

namespace App\Controllers;

use App\Models\User;
use Framework\Controller\ApiResource;
use Framework\Request;

class UsersController extends ApiResource
{
    public function list(Request $request){
        $users = new User();
        $users = $users->getAll();

        $this->response($users);
    }

    public function show(Request $request){
        $users = new User();
        $users = $users->getBy('id', $request->params['id']);

        $this->response($users);
    }

    public function create(Request $request){
        $user = new User();

        $user->insert($request->data);
    }
    
}
