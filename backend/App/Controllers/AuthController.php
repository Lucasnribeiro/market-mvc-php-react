<?php

namespace App\Controllers;

use App\Models\User;
use Framework\Controller\ApiResource;
use Framework\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class AuthController extends ApiResource{

    public function register(Request $request){
        
        $user = new User();

        //This isn't very secure. We are not blocking the user to send a data array that alters
        //unwanted rows.
        $request->json['created_at'] = date('Y-m-d H:i:s');
        $request->json['password']   = password_hash($request->json['password'], PASSWORD_DEFAULT);
        
        //im not dealing with any errors that might happen, like a bad insert or creating a user with 
        //an existing username
        $user->insert($request->json);

        $this->response('User created successfully');

    }

    public function login(Request $request){
        //verify user password by getting the hash from the db
        $user = new User();
        $user = $user->getBy('username', $request->json['username']);
        if(sizeof($user) == 0){
            $this->response('User not found');
        }

        if(password_verify($request->json['password'], $user[0]['password'])){
            $payload = [
                'user_id' => $user[0]['id'],
            ];
            $this->response(
                [
                    'token'      => JWT::encode($payload, JWT_KEY, 'HS256'),
                    'user'       => $user
                ]
            );
        }else{
            $this->response('Wrong password');
        }

        $this->response('Login failed');
    }

}