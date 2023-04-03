<?php

namespace Framework\Model;

/**
 * The abstract model class.
 *
 * This class allows connection to the database via PDO.
 *
 */
abstract class BaseModel {

    /**
     * It represents a PDO instance
     *
     * @var object
     */
    static $db = null;

    /**
     * The name of the table in the database that the model binds
     *
     * @var string
     */
    public $table;

    /**
     * The name of the table in the database that the model binds
     *
     * @var string
     */
    public $rows;

    /**
     * The model construct
     *
     */
    public function __construct() {

        if (static::$db === null) {
            
            // set the (optional) options of the PDO connection. in this case, we set the fetch mode to
            // "objects", which means all results will be objects, like this: $result->user_name !
            // For example, fetch mode FETCH_ASSOC would return results like this: $result["user_name] !
            $options = array(\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_OBJ, \PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING);

            // generate a database connection, using the PDO connector
            $db = new \PDO(DB_TYPE . ':host=' . DB_HOST . ';port=' . DB_PORT . ';dbname=' . DB_NAME, DB_USER, DB_PASS, $options);

            // Throw an Exception when an error occurs
            $db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            static::$db = $db;
        }
        
    }

    /**
     * Abstract method for getting all records from database.
     *
     */
    public function getAll(){
        return $this->DB()
                        ->query('SELECT '. implode(", ", $this->rows). ' FROM ' . $this->table)
                        ->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * The insert method.
     * 
     * This method makes it easy to insert data into the database 
     * in a quick and easy way. The data set must be associative. 
     * Index of array represents the field in the database.
     * 
     * For example: [ "fist_name" => "John" ]
     *
     * @param array $data A set of data to be added to the database.
     *
     * @return integer The last insert ID
     * @access  public
     * @since   Method available since Release 1.0.0
     */
    public function insert(array $data){

        if($this->table === ""){
            throw new \Exception("Attribute _table is empty string!");
        }
        
        // Question marks
        $marks = array_fill(0, count($data), '?');
        // Fields to be added.
        $fields = array_keys($data);
        // Fields values
        $values = array_values($data);

        // Prepare statement
        $stmt = $this->DB()->prepare("
            INSERT INTO " . $this->table . "(" . implode(",", $fields) . ")
            VALUES(" . implode(",", $marks) . ")
        ");

        // Execute statement with values
        $stmt->execute($values);

        // Return last inserted ID.
        return $this->DB()->lastInsertId();
    }

    /**
     * The method return a PDO database connection.
     *
     * @return object
     * @access  public
     * @since   Method available since Release 1.0.0
     */
    protected function DB(){

        return static::$db;
    }

}