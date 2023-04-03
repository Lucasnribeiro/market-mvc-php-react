<?php
require 'vendor/autoload.php';
use Framework\Router;

// set a constant that holds the project's folder path, like "/var/www/".
// DIRECTORY_SEPARATOR adds a slash to the end of the path
define('ROOT', __DIR__ . DIRECTORY_SEPARATOR);
// set a constant that holds the project's "application" folder, like "/var/www/application".
define('APP', ROOT . 'app' . DIRECTORY_SEPARATOR);
define('FRAMEWORK', ROOT . 'framework' . DIRECTORY_SEPARATOR);


// load application config (error reporting etc.)
require APP . '/config/config.php';

// start the application
$router = new Router();

