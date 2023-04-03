<?php

namespace App\Models;
use Framework\Model\BaseModel;

class Product extends BaseModel {
    /**
     * The model construct
     *
     */
    public function __construct() {

        /**
        * The database table name.
        */
        $this->table = 'products';
        /**
        * The rows of this table.
        */
        $this->rows  = ['id', 'name'];

    }
}