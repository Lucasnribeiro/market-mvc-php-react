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

    public function getBy($column, $value){
        
        $stmt = $this->DB()
                        ->prepare('SELECT '. implode(", ", $this->rows). ' FROM ' . $this->table . " WHERE $column = ? " );
        $stmt->execute([$value]);

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Very rudimentary join. Example:
     * model->getWithJoin('id', 1, ['table1.value', 'table1.name', 'table2.name as table2Name'], ['table' => 'table2', 'column' => 'id'])
     *
    */
    public function getWithJoin($column, $value, $rows, $join){

        $stmt = $this->DB()
                        ->prepare(
                        'SELECT '. implode(", ", $rows). 
                        ' FROM ' . $this->table . 
                        " JOIN " . $join['table'] . 
                            " ON " . $join['table'].".".$join['base_column'] . " = " . $this->table.".".$join['referenced_column'] .
                        " WHERE $this->table".".$column = ? " );
        $stmt->execute([$value]);

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function getWithInnerJoin($column, $value, $rows, $join){
        // die('SELECT '. implode(", ", $rows). 
        // ' FROM ' . $this->table . 
        // " INNER JOIN " . $join['table'] . 
        //     " ON " . $join['table'].".".$join['base_column'] . " = " . $this->table.".".$join['referenced_column'] .
        // " WHERE $this->table".".$column = ? " );
        $stmt = $this->DB()
                        ->prepare(
                        'SELECT '. implode(", ", $rows). 
                        ' FROM ' . $this->table . 
                        " INNER JOIN " . $join['table'] . 
                            " ON " . $join['table'].".".$join['base_column'] . " = " . $this->table.".".$join['referenced_column'] .
                        " WHERE $this->table".".$column = ? " );
        $stmt->execute([$value]);

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    /** 
     *for now, im not implementing a dynamic query, since this is just a proof of concept.
     *but it can be done "eloquent like" with some static variables.
    */
    public function where($column, $compare, $value){

    }

    public function deleteByID($id){

        return  $this->DB()
                        ->prepare('DELETE FROM ' . $this->table . ' WHERE id = ? ' )
                        ->execute([$id]);

    }

    /**
     * The insert method.
     * 
     * This method makes it easy to insert data into the database 
     * The data set must be associative. 
     * Index of array represents the field in the database.
     * 
     * For example: [ "fist_name" => "John" ]
     *
     * @param array $data A set of data to be added to the database.
     *
     * @return integer The last insert ID
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
     * The update method.
     * 
     * This method makes it easy to update data. The data set must be associative. 
     * Index of array represents the field in the database.
     * 
     * For example: [ "fist_name" => "John" ]
     *
     * @param array $data A set of data to be updatred to the database.
     *
     * @return integer The last insert ID
     */
    public function update(array $data, array $where){

        if($this->table === ""){
            throw new \Exception("Attribute _table is empty string!");
        }
        
        // Fields to be added.
        $fields = array_keys($data);
        // Fields values
        $values = array_values($data);

        // Prepare statement
        $stmt = $this->DB()->prepare("
        UPDATE " . $this->table . " SET ".  implode(', ', array_map(function($field){ return $field . ' = ? '; }, $fields)) ."
        WHERE " . $where['column']  . " = " . $where['value']);

        // Execute statement with values
        $stmt->execute($values);

        // Return last inserted ID.
        return $this->DB()->lastInsertId();
    }

    /**
     * The method return a PDO database connection.
     *
     */
    protected function DB(){

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

        return static::$db;
    }

}