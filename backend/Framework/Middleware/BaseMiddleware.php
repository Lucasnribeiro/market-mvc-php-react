<?php 



namespace Framework\Middleware;

use Framework\Request;

class BaseMiddleware {

    public static function run(Request $request){

    }

    public static function NotAuthorized(){
        header('Content-type: application/json');
        http_response_code(401);
        echo json_encode( 'NOT AUTHORIZED' );
        die();
    }
}