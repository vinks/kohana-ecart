<?php
class Model_Catalog_Category extends ORM
{
	protected $_table_name = 'catalog_category';
	
	protected $_primary_key = 'id';
	
	protected $_has_one = array(
		'description' => array(
			'model'	=> 'catalog_category_description',
			'foreign_key' => 'category_id'
		)
	);

}