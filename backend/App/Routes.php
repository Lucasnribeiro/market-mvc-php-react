<?php

namespace App;

use App\Controllers\ProductsController;
use App\Middlewares\AuthMiddleware;
use Framework\Router;

class Routes extends Router{
    public static function routes(){

        Router::post('/login', [AuthController::class, 'login']);

        Router::group(['middleware' => AuthMiddleware::class, 'routes' => [
            Router::get('/products', [ProductsController::class, 'list']),
            Router::get('/products/{id}', [ProductsController::class, 'show']),
            Router::get('/products/{id}/{user}', [ProductsController::class, 'show'])
        ]]);
    }

    
}
