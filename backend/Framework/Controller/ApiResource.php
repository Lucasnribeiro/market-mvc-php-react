<?php

namespace Framework\Controller;

use Framework\Request;

/**
 * This is the "base controller class". All other "real" controllers extend this class.
 */
class ApiResource extends BaseController
{
    public function index(Request $request){

    }

    public function show(Request $request){
        
    }

    public function list(Request $request){


    }

    public function create(Request $request){


    }

    public function destroy(Request $request){


    }

    public function response($data){
        header('Content-type: application/json');
        echo json_encode( $data );
        die();
    }
}
