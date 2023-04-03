<?php

namespace App\Controllers;

use App\Models\Product;
use Framework\Controller\ApiResource;
use Framework\Request;

class ProductsController extends ApiResource
{
    public function list(Request $request){
        echo 'list';
    }

    public function show(Request $request){
        echo '$request';
    }
    
}
