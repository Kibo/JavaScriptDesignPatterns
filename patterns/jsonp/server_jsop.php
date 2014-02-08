/*
 * For JSON:
 * Content-Type: application/json
 * 
 * For JSON-P:
 * Content-Type: application/javascript
 */

<?php

$data = '{"name":"joe"}'; // json string

if(array_key_exists('callback', $_GET)){

    header('Content-Type: application/javascript; charset=utf8');   
    $callback = $_GET['callback'];
    echo $callback.'('.$data.');';

}else{
    // normal JSON string
    header('Content-Type: application/json; charset=utf8');
    echo $data;
}
?>