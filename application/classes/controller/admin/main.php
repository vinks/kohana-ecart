<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Admin_Main extends Controller_Admin_Base
{

	public function action_index()
	{
		$this->request->response = 'hello, world!';
	}

}