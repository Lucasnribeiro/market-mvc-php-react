<?php

namespace App\Controllers;

use App\Models\Product;
use Framework\Controller\ApiResource;
use Framework\Request;

class ProductsController extends ApiResource
{
    public function list(Request $request){
        $products = new Product();
        $products = $products->getAll();

        $this->response($products);
    }

    public function show(Request $request){
        $products = new Product();
        $products = $products->getBy('id', $request->params['id']);

        $this->response($products);
    }

    public function create(Request $request){
        $product = new Product();

        $request->json['created_at'] = date('Y-m-d H:i:s');

        $product->insert($request->json);

        $this->response('Product created');
    }
    
}
