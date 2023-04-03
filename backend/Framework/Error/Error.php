<?php

namespace Framework\Error;


class Error{

    public static function errorPage($message){
        echo "<h1>$message</h1>";
    }
}