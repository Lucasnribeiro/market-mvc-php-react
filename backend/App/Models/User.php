<?php

namespace App\Models;
use Framework\Model\BaseModel;

class User extends BaseModel {

    public $name;
    public $username;
    public $password;
    public $created_at;
    public $deleted_at;
    /**
     * The model construct
     *
     */
    public function __construct() {

        /**
        * The database table name.
        */
        $this->table = 'users';
        /**
        * The rows of this table.
        */
        $this->rows  = ['id', 'name', 'username', 'password', 'role', 'created_at', 'deleted_at'];

    }
}