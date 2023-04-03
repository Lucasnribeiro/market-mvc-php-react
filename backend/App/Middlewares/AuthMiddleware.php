<?php

namespace App\Middlewares;
use Framework\Middleware\BaseMiddleware;


class AuthMiddleware extends BaseMiddleware{

    public function run(){
        $headers = getallheaders();
        
        if (in_array('Authorization', $headers)) {
            echo $headers['Authorization'];
        }
    }
}


