<?php

namespace App\Middlewares;

use App\Models\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Framework\Middleware\BaseMiddleware;
use Framework\Request;
use UnexpectedValueException;

class AuthMiddleware extends BaseMiddleware{

    public static function run(Request $request){
        $headers = getallheaders();
        $jwt = self::getBearerToken($headers['Authorization']);
        if($jwt){
            try{
                $decoded = JWT::decode($jwt, new Key(JWT_KEY, 'HS256'));
                $user = new User();
                $user = $user->getBy('id', $decoded->user_id);

                $request->user = $user;
            } catch (UnexpectedValueException $e){

                BaseMiddleware::NotAuthorized();

            }
        }else{
            BaseMiddleware::NotAuthorized();
        }
    }

    private static function getBearerToken($header) {
        if (preg_match('/Bearer\s(\S+)/', $header, $matches)) {
            return $matches[1];
        }
        return null;
    }
}


