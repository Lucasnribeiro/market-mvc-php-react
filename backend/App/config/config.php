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



define('JWT_KEY', getenv('AWS_JWT_KEY'));
