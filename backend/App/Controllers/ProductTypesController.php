<?php

namespace App\Controllers;

use App\Models\ProductType;
use Framework\Controller\ApiResource;
use Framework\Request;

class ProductTypesController extends ApiResource
{
    public function list(Request $request){
        $product_types = new ProductType();
        $product_types = $product_types->getAll();

        $this->response($product_types);
    }

    public function show(Request $request){
        $product_types = new ProductType();
        $product_types = $product_types->getBy('id', $request->params['id']);

        $this->response($product_types);
    }

    public function create(Request $request){
        $product_types = new ProductType();
        
        $request->json['created_at'] = date('Y-m-d H:i:s');

        $product_types->insert($request->json);

        $this->response('Product type created');
    }
    
}
