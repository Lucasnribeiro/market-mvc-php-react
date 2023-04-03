<?php

namespace Framework;

use App\Routes;
use Framework\Error\ControllerNotFound;

/**
 * Summary of Router
 */
class Router{
    public static $routes = array();

    private $querystrings;

    private static $middleware;

    /**
     * Summary of __construct
     */
    public function __construct(){
        $this->buildURI();

    }

    public static function get($path, $resolve){
        self::$routes[] = array(
            'path' => $path, 
            'class' => $resolve[0], 
            'function' => $resolve[1]
        );

        return [$path, $resolve];
    }

    public function middleware($middleware){
        self::$middleware = new $middleware;
    }

    public static function post($path, $resolve){
        self::$routes[] = array(
            'path' => $path, 
            'class' => $resolve[0], 
            'function' => $resolve[1]
        );

        return [$path, $resolve];
    }

    public static function group($group){
        //resolve the middleware
        self::$middleware = new $group['middleware'];

    }

    private function callController($class, $function, $args, $querystrings, $data = null){

        if(Router::$middleware !== null){
            call_user_func([Router::$middleware, 'run']);
        }

        $request = new Request();
        $request->params         = $args;
        $request->querystrings   = $querystrings;
        $request->data           = $data;

        $controller = new $class;
        
        call_user_func([$controller, $function], $request);

    }

    private function getQueryStrings(){
        if (isset($_SERVER['QUERY_STRING'])){

            parse_str($_SERVER['QUERY_STRING'], $arr);
            return $arr;

        }else{

            return []; 

        }
    }

    private function buildURI(){

        Routes::routes();

        $request_uri = $_SERVER['REQUEST_URI'];
        $querystrings = $this->getQueryStrings();
        $removed_querystrings = preg_replace('/\?.*/', '', $request_uri);
        $url = preg_split('@/@', $removed_querystrings, -1, PREG_SPLIT_NO_EMPTY);
        
        foreach(Routes::$routes as $route => $declared_route){
            $path = preg_split('@/@', $declared_route['path'], -1, PREG_SPLIT_NO_EMPTY);
            if(sizeof($path) == sizeof($url)){
                if($url[0] === $path[0]){
                    preg_match_all('!{.*?}+!', $declared_route['path'], $params);
                    $params = preg_replace("/[^a-zA-Z 0-9]+/", "", $params[0] );
                    $this->callController($declared_route['class'], $declared_route['function'], $params, $querystrings);
                    //controller found and executed, stop routing execution
                    die();
                }
            }
        }

        ControllerNotFound::throwError();

    }
}