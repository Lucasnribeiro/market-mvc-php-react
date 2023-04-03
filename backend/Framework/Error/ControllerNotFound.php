<?php


namespace Framework\Error;


class ControllerNotFound extends Error{

    public static function throwError(){
        Error::errorPage('Controller not found');
    }
}