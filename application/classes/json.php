<?php defined('SYSPATH') OR die('No direct access allowed.');

class Json {

    /**
     * Base json send
     * @param array $data
     * @return string
     */
    public static function send(Array $data = array())
    {
	return json_encode($data);
    }

    /**
     * Send json grid data
     * @param array $data
     * @param integer $total
     * @return string
     */
    public static function send_grid(Array $data = array(), $total = 0)
    {
	$data = array_merge(array('data' => $data), array('total' => $total), array('success' => true));
	return json_encode($data);
    }

    /**
     * Send json data with success
     * @param array $data
     * @return string
     */
    public static function send_success(Array $data = array())
    {
	$data = array_merge(array('data' => $data), array('success' => true));
	return json_encode($data);
    }

    /**
     * Send json data with failure
     * @param array $data
     * @return string
     */
    public static function send_failure(Array $data = array())
    {
	$data = array_merge($data, array('success' => false));
	return json_encode($data);
    }

    /**
     * Send Database_Result as json grid
     * @param Database_Result $result
     * @param array $columns
     * @param integer $total
     * @return string
     */
    public static function db_result_to_json(Database_Result $result, Array $columns, $total) {
	$result = $result->as_array();
	$output = array();
	foreach ($result as $r) {
		foreach($columns as $col) {
			$temp[$col] = $r->$col;
		}
		$output[] = $temp;
	}

	$data = array_merge(array('data' => $output), array('total' => $total), array('success' => true));
	return json_encode($data);
    }
	
}