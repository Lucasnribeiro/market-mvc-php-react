<?php

namespace App\Models;
use Framework\Model\BaseModel;

class SaleProduct extends BaseModel {
    /**
     * The model construct
     *
     */
    public function __construct() {

        /**
        * The database table name.
        */
        $this->table = 'sale_products';
        /**
        * The rows of this table.
        */
        $this->rows  = ['id', 'sale_id', 'product_id', 'user_id', 'created_at', 'deleted_at'];

    }
}