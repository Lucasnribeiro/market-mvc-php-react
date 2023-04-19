<?php

namespace App\Controllers;

use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleProduct;
use Framework\Controller\ApiResource;
use Framework\Request;

class SalesController extends ApiResource
{
    public function list(Request $request){
        $products = new Product();
        $products = $products->getAll();

        $this->response($products);
    }

    public function listOrders(Request $request){
        $products = new Product();
        $user_id = $request->user[0]['id'];
        $products = $products->getBy('id', $user_id);;

        $this->response($products);
    }

    public function show(Request $request){
        $products = new Product();
        $products = $products->getBy('id', $request->params['id']);

        $this->response($products);
    }

    public function create(Request $request){
        $sale = new Sale();
        $user_id = $request->user[0]['id'];
        $total_sale = 0;
        $total_tax  = 0;

        $sale_id = $sale->insert([
            'user_id' => $user_id, 
            'tax' => 0, 'total' => 0, 
            'created_at' => date('Y-m-d H:i:s')
        ]);

        foreach($request->json as $key => $product){
            $product_model = new Product();
            $sale_product = new SaleProduct();

            $product_query = $product_model->getBy('id', $product['id']);

            $total_sale += $product_query[0]['price'];
            $total_tax  += $product_query[0]['price'] * ($product_query[0]['tax'] / 100);

            $sale_product->insert([
                'sale_id' => $sale_id, 
                'product_id' => $product_query[0]['id'], 
                'user_id' => $user_id, 
                'created_at' => date('Y-m-d H:i:s')
            ]);
        }

        $sale = $sale->update(
            [
            'tax' => $total_tax, 
            'total' => $total_sale
            ], 
            [
            'column' => 'id', 
            'value' => $sale_id
        ]);

    }
    
}
