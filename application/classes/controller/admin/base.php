<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Admin_Base extends Controller_Template
{
    protected $auth;
    protected $user;

    public $auto_render = TRUE; 
    public $template = 'admin/template';
	
    // Jquery Version
    protected $jqversion = '1.5.1';
    
    // ExtJS Version
    protected $extversion = '3.3.2';
    
    public function __construct(Request $request)
    {
	if (Request::$is_ajax)
	{
	    $this->profiler = NULL;
	    $this->auto_render = FALSE;
	}

	$this->session = Session::instance();
	
	parent::__construct($request);
    }
    
    
    public function before()
    {
	parent::before();

	$this->session = Session::instance();
	$this->auth = rAuth::instance('auth_user');
	$this->user = $this->auth->get_user();

	if ($this->auto_render)
	{
	    $this->template->extversion = $this->extversion;
	    $this->template->title = '';
	    $this->template->content = '';
	    $this->template->styles = array();
	    $this->template->scripts = array();
	}
    }
    
    public function after()
    {
	if ($this->auto_render)
	{
	    $styles = array(
		'js/ext-' . $this->extversion . '/resources/css/ext-all.css',
	    );
	    
	    $scripts = array(
		'js/jquery/jquery-' . $this->jqversion .'.js',
		'js/ext-' . $this->extversion . '/adapter/jquery/ext-jquery-adapter'. (IN_PRODUCTION ? '' : '-debug') . '.js',
		'js/ext-' . $this->extversion . '/ext-all' . (IN_PRODUCTION ? '' : '-debug') . '.js',
		'js/app/locale/en.js',
	    );

	    $this->template->styles = array_merge($styles, $this->template->styles);
	    $this->template->scripts = array_merge($scripts, $this->template->scripts);

	    $this->template->styles = Minify::factory('css')->minify($this->template->styles);
	    $this->template->scripts = Minify::factory('js')->minify($this->template->scripts);
	}
	
	parent::after();
    }
 

}