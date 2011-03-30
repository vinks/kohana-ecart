<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Admin_Main extends Controller_Admin_Base
{

    public function action_index()
    {
	if ( ! $this->user) {
		Request::instance()->redirect('admin/auth');
	}
	
	$this->template->styles = array(
	    'css/admin_base.css'
	);

	$this->template->scripts = array(
	    'js/ext-ux/Ext.ux.panel.DDTabPanel.js',
	    'js/ext-ux/Ext.ux.TabCloseMenu.js',
	    'js/ext-' . $this->extversion . '/examples/ux/TabScrollerMenu.js',
	    'js/app/components/toolbar.js',
	    'js/app/init.js'
	);
    }
}

