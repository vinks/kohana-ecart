<?php
class Model_Catalog_Category_Description extends ORM
{
    protected $_table_name = 'catalog_category_description';
	
	protected $_primary_key = 'id';
	
	protected $_belongs_to = array(
		'category' => array(
			'model' => 'catalog_category',
			'foreign_key' => 'category_id',
		),
	);
	
	protected $_rules = array(
        'name' => array(
            'not_empty'  => array(),
            'max_length' => array(255),
        ),
    );
}