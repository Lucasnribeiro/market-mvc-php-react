<?php

namespace App;

use App\Controllers\AuthController;
use App\Controllers\OrderController;
use App\Controllers\ProductsController;
use App\Controllers\ProductTypesController;
use App\Controllers\SalesController;
use App\Controllers\UsersController;
use App\Middlewares\AuthMiddleware;
use App\Controllers\HomeController;
use Framework\Router;

class Routes extends Router{
    public static function routes(){

        Router::post('/login', [AuthController::class, 'login']);
        Router::post('/register', [AuthController::class, 'register']);

        Router::get('/products', [ProductsController::class, 'list'], AuthMiddleware::class);
        Router::post('/products', [ProductsController::class, 'create'], AuthMiddleware::class);

        Router::post('/product_types', [ProductTypesController::class, 'create'], AuthMiddleware::class);
        Router::get('/product_types', [ProductTypesController::class, 'list'], AuthMiddleware::class);

        Router::post('/sales', [SalesController::class, 'create'], AuthMiddleware::class);

        Router::get('/users', [UsersController::class, 'list'], AuthMiddleware::class);

        Router::get('/orders', [OrderController::class, 'list'], AuthMiddleware::class);

        Router::get('/', [HomeController::class, 'index']);

    }   

    
}
