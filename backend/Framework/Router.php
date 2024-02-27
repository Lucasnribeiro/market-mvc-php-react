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

    private $middleware;

    /**
     * Summary of __construct
     */
    public function __construct(){
        $this->buildURI();
    }

    private function register(string $method, $path, $resolve, $middleware) {
        self::$routes[] = array(
            'path'         => $path, 
            'class'        => $resolve[0], 
            'function'     => $resolve[1],
            'method'       => $method,
            'middleware'   => $middleware
        );

        return [$path, $resolve];
    }
    
    public static function get($path, $resolve, $middleware = null){
        return $this->register('GET', $path, $resolve, $middleware);
    }

    public static function post($path, $resolve, $middleware = null){
        return this->register('POST', $path, $resolve, $middleware);
    }

    public function middleware($middleware){
        self::$middleware = new $middleware;
    }

    public static function group($group){
        //resolve the middleware
        self::$middleware = new $group['middleware'];

    }

    private function callController($class, $function, $middleware, $args, $querystrings, $json, $data = null){
        $this->setRequestHeaders();

        $request = new Request();

        if($middleware !== null){
            call_user_func([$middleware, 'run'], $request);
        }

        $request->params         = $args;
        $request->querystrings   = $querystrings;
        $request->data           = $data;
        $request->json           = json_decode($json, true);

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

    public function handlePreflight(){
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            $this->setRequestHeaders();
            die(); 
        }
    }

    private function buildURI(){

        Routes::routes();

        $request_uri = $_SERVER['REQUEST_URI'];
        $querystrings = $this->getQueryStrings();
        $removed_querystrings = preg_replace('/\?.*/', '', $request_uri);
        $url = preg_split('@/@', $removed_querystrings, -1, PREG_SPLIT_NO_EMPTY);

        //check if its a preflight request [OPTIONS]
        $this->handlePreflight();
        
        foreach(Routes::$routes as $route => $declared_route){
            $path = preg_split('@/@', $declared_route['path'], -1, PREG_SPLIT_NO_EMPTY);
            if(sizeof($path) == sizeof($url)){
                if($url[0] === $path[0] && $_SERVER['REQUEST_METHOD'] === $declared_route['method']){
                    preg_match_all('!{.*?}+!', $declared_route['path'], $params);
                    $params = preg_replace("/[^a-zA-Z 0-9]+/", "", $params[0] );
                    $this->callController($declared_route['class'], $declared_route['function'], $declared_route['middleware'], $params, $querystrings, file_get_contents('php://input'), $_POST );
                    //controller found and executed, stop routing execution
                    die();
                }
            }
        }
        $this->setRequestHeaders();
        ControllerNotFound::throwError();

    }

    public function setRequestHeaders(){
        header("Content-Type: application/json");  
        $http_origin = $_SERVER['HTTP_ORIGIN']; 
        if (in_array($http_origin, CORS_ALLOWED_ORIGINS)){  
            $index = array_search($http_origin, CORS_ALLOWED_ORIGINS);
            header("Access-Control-Allow-Origin: ". CORS_ALLOWED_ORIGINS[$index]);
        }
        header('Access-Control-Allow-Credentials: true'); 
        header("Access-Control-Max-Age: 3600");    
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");  
        header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");  
    }
}
