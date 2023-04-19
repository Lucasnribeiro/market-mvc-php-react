<?php

namespace App\Controllers;

use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleProduct;
use Framework\Controller\ApiResource;
use Framework\Request;

/**
 * This is separate from the sales controller so we can just have concerns
 * around the user and it's placed orders. You should not create any sale
 * through this controller. Use the SaleController instead.
 *
*/

class OrderController extends ApiResource
{
    public function list(Request $request){
        $sales = new Sale();
        $user_id = $request->user[0]['id'];
        $sales = $sales->getBy('user_id', $user_id);
        $response = [];

        foreach($sales as $key => $sale){
            $sale_items = new SaleProduct();
            $sale_items = $sale_items->getWithInnerJoin(
                'sale_id', 
                $sale['id'], 
                ['sale_products.id', 'products.name', 'products.price', 'products.tax'], 
                ['table' => 'products', 'base_column' => 'id', 'referenced_column' => 'product_id']
            );
            $response[$key] = ['sale' => $sale, 'items' => $sale_items];
        }

        $this->response($response);
    }

    public function show(Request $request){
        $sale = new Sale();
        $user_id = $request->user[0]['id'];

        $sale = $sale->getBy('id', $request->params['id']);

        $this->response($sale);
    }
    
}
