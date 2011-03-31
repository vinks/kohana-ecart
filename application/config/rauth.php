<?php defined('SYSPATH') OR die('No direct access allowed.');

return array
(
    'auth_user' => array(
        'model_name'	    => 'auth_user',
        'hash_method'	    => 'sha1',
        'salt_pattern'	    => '1, 3, 5, 9, 14, 15, 20, 21, 28, 30',
        'lifetime'	    => 1209600,
        'session_key'	    => 'auth_user',
        'autologin_cookie'  => 'auth_user_autologin',
        'strong_check'	    => FALSE,
    ),
    
    'auth_admin' => array(
        'model_name'	    => 'auth_admin',
        'hash_method'	    => 'sha1',
	'salt_pattern'	    => '1, 3, 5, 9, 14, 15, 20, 21, 28, 30',
        'lifetime'	    => 1209600,
        'session_key'	    => 'auth_admin',
        'autologin_cookie'  => 'auth_admin_autologin',
        'strong_check'	    => FALSE,
    ),
);