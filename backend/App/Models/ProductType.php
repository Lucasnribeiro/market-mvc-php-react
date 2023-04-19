<?php

namespace App\Models;
use Framework\Model\BaseModel;

class ProductType extends BaseModel {
    /**
     * The model construct
     *
     */
    public function __construct() {

        /**
        * The database table name.
        */
        $this->table = 'product_types';
        /**
        * The rows of this table.
        */
        $this->rows  = ['id', 'title', 'created_at', 'deleted_at'];

    }
}