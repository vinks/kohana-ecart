<?php defined('SYSPATH') OR die('No direct access allowed.');

return array
(
    'default' => array(
	'type'       => 'postgresql',
	'connection' => array(
	    'hostname'   => '192.168.1.10',
	    'username'   => 'postgres',
	    'password'   => 'postgres',
	    'persistent' => FALSE,
	    'database'   => 'ecart',
	    //'database'   => 'test_install',
	),
	'primary_key'	=> 'id',
	'schema'	=> 'public',
	'table_prefix'	=> '',
	'charset'	=> 'utf8',
	'caching'	=> FALSE,
	'profiling'	=> TRUE,
    ),
    'alternate' => array(
	'type'       => 'pdo',
	'connection' => array(
	    'dsn'        => 'postgresql:host=192.168.0.159;dbname=axis',
	    'username'   => 'postgres',
	    'password'   => 'postgres',
	    'persistent' => FALSE,
	),
	'table_prefix'	=> '',
	'charset'	=> 'utf8',
	'schema'	=> 'public',
	'caching'	=> FALSE,
	'profiling'	=> TRUE,
    ),
);