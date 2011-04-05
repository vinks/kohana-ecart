<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Admin_Catalog extends Controller_Admin_Base
{

    public function action_index()
    {
	
    }
    
    public function action_save()
    {
	if ($_POST) 
	{
	    $id = Arr::get($_POST, 'id', NULL);
	    $parent_id = Arr::get($_POST, 'parent_id', NULL);
	    
	    
	    try {
		if (is_numeric($id) and $id > 0) {
		    $category = ORM::factory('catalog_category', $id);
		    $category_description = $category->description;
		} else {
		    $category = ORM::factory('catalog_category');
		    $category->parent_id = $parent_id;
		    $category->save();
		    
		    $category_description = ORM::factory('catalog_category_description');
		    $category_description->category_id = $category->id;
		}    
		
		$category_description->name = Arr::get($_POST, 'name', NULL);
		$category_description->description = Arr::get($_POST, 'description', '');
		$category_description->meta_title = Arr::get($_POST, 'meta_title', '');
		$category_description->meta_description = Arr::get($_POST, 'meta_description', '');
		$category_description->meta_keyword = Arr::get($_POST, 'meta_keyword', '');
		$category_description->language_id = 1;
		$category_description->save();
		
		$this->request->response = Json::send_success(array(
		    'id'	=> $category->id,
		    'parent_id'	=> $category->parent_id,
		    'name'	=> $category_description->name
		));
		
	    }
	    catch (Exception $e) {
		$this->request->response = Json::send_failure(array('errormsg' => $e->getMessage()));
	    }
	}
    }
}