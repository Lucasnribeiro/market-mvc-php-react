<?php

/**
 * Configuration for: Error reporting
 * Useful to show every little problem during development, but only show hard errors in production
 */
error_reporting(E_ERROR);
ini_set("display_errors", 1);

/**
 * Configuration for: Database
 * This is the place where you define your database credentials, database type etc.
 */
define('DB_TYPE', 'pgsql');
define('DB_HOST', getenv('AWS_POSTGRES_HOST'));
define('DB_NAME', getenv('AWS_POSTGRES_DB_NAME'));
define('DB_USER', getenv('AWS_POSTGRES_DB_USER'));
define('DB_PORT', '5432');
define('DB_PASS', getenv('AWS_POSTGRES_DB_PASSWORD'));


/**
 * Define in here all your possible hosts, the CORS preflight will handle them and respond to 
 * any host configured here.
 */
define('CORS_ALLOWED_ORIGINS', ['http://localhost:5173', 'https://market.lucasnribeiro.com', 'http://market-react.s3-website-us-east-1.amazonaws.com']);


define('JWT_KEY', getenv('AWS_JWT_KEY'));
