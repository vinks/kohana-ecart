<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Admin_Catalog extends Controller_Admin_Base
{

    public function action_index()
    {
	if ($_POST) 
	{
	    $parent = Arr::get($_POST, 'node', 0);
	    
	    // Initial node
	    if ($parent == 'root')
		$parent = 0;
	    
	    try {
		// Load tree nodes
		$nodes = ORM::factory('catalog_category')
			->with('description')
			->where('parent_id','=', (int) $parent)
			->find_all();

		// Prepare nodes attributes
		$data = array();
		foreach ($nodes as $node){
		    $data[] = array(
			'text'	    => $node->description->name, 
			'id'	    => $node->id, 
			'cls'	    => $node->has_children == 't' ? 'folder' : 'file',
			'leaf'	    => $node->has_children == 't' ? FALSE : TRUE,
			'expanded'  => true
		    );
		}

		$this->request->response = Json::send ($data);
	    }
	    catch (Exception $e) {
		$this->request->response = Json::send_failure(array('errormsg' => $e->getMessage()));
	    }
	}
    }
    
    public function action_get()
    {
	if ($_POST and $id = Arr::get($_POST, 'id', NULL)) 
	{
	    try {
		$category = ORM::factory('catalog_category', $id)->with('description');

		$this->request->response = Json::send_success(array(
		    'id'	    => $category->id,
		    'parent_id'	    => $category->parent_id,
		    'name'	    => $category->description->name,
		    'description'   => $category->description->description,
		));
	    }
	    catch (Exception $e) {
		$this->request->response = Json::send_failure(array('errormsg' => $e->getMessage()));
	    }
	}
    }


    public function action_save()
    {
	if ($_POST) 
	{
	    $id = Arr::get($_POST, 'id', NULL);
	    $parent_id = Arr::get($_POST, 'parent_id', NULL);
	    
	    
	    try {
		// Edit Node
		if (is_numeric($id) and $id > 0) {
		    $category = ORM::factory('catalog_category', $id);
		    $category_description = $category->description;
		
		}
		// Add New Node
		else {
		    $category = ORM::factory('catalog_category');
		    $category->parent_id = $parent_id;
		    $category->save();
		    
		    // Update parent has_children
		    if ($parent_id > 0)
		    {
			$parent = ORM::factory('catalog_category', $parent_id);
			$parent->has_children = TRUE;
			$parent->save();
		    }
			
		    // Add New Description & Set category_id
		    $category_description = ORM::factory('catalog_category_description');
		    $category_description->category_id = $category->id;
		}    
		
		// Set Attributes
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