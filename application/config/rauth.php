<?php defined('SYSPATH') OR die('No direct access allowed.');

return array
(
    'auth_user' => array(
        // не забыть создать Model_Admin_Token
        'model_name'	    =>  'auth_user',
        'hash_method'	    =>  'sha1',
        // немного изменим паттерн, хотя это похоже на overkill
		'salt_pattern'	    => '1, 3, 5, 9, 14, 15, 20, 21, 28, 30',
        'lifetime'	    =>  1209600,
        // другой ключ сессии, чтобы не перепутать
        'session_key'	    =>  'auth_user',
        // куки для автологина
        'autologin_cookie'  =>  'rauthautologin_user',
        // проверять валидность пользователя при каждом действии
		// -- вдруг он уже забанен или удален, хотя в сессии все ОК?
        'strong_check'	    =>  FALSE,
    ),
);