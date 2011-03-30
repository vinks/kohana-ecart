<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Admin_Auth extends Controller_Admin_Base
{
	
    public function action_index()
    {
	if ( $this->auth->logged_in()) {
	    Request::instance()->redirect('admin');
	}

	$this->template->styles = array(
	    'css/admin_login.css'
	);

	$this->template->scripts = array(
	    'js/ext-ux/Ext.ux.PasswordField.js',
	    'js/app/login.js'
	);
    }
    
    public function action_login()
    {
	if ($this->user)
        {
            Request::instance()->redirect('admin');
        }
	
	if ($_POST and $username = Arr::get($_POST, 'username', NULL) and $password = Arr::get($_POST, 'password', NULL))
        {
	    try {
		$remember = (bool) Arr::get($_POST, 'remember', FALSE);

		if ($this->auth->login($username, $password, $remember))
		    $this->request->response = Json::send_success();
		else
		    $this->request->response = Json::send_failure(array('errormsg' => __('login.password')));

	    } catch (Exception $e) {
		$this->request->response = Json::send_failure(array('errormsg' => $e->getMessage()));
	    }
        }
    }
    
    public function action_logout()
    {
	$this->auth->logout();
	$this->request->response = Json::send_success();
    }

}