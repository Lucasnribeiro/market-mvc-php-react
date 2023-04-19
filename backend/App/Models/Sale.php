<?php

namespace App\Models;
use Framework\Model\BaseModel;

class Sale extends BaseModel {
    /**
     * The model construct
     *
     */
    public function __construct() {

        /**
        * The database table name.
        */
        $this->table = 'sales';
        /**
        * The rows of this table.
        */
        $this->rows  = ['id', 'user_id', 'tax', 'total', 'created_at', 'deleted_at'];

    }
}