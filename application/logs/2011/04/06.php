<?php defined('SYSPATH') or die('No direct script access.'); ?>

2011-04-06 06:04:49 --- ERROR: Kohana_Exception [ 0 ]: The name property does not exist in the Model_Catalog_Category class ~ MODPATH/orm/classes/kohana/orm.php [ 379 ]
2011-04-06 06:24:12 --- ERROR: Database_Exception [ 0 ]: ERROR:  invalid input syntax for integer: "root"
LINE 1: ... "description"."category_id") WHERE "parent_id" = 'root' ORD...
                                                             ^
 [ SELECT "description"."id" AS "description:id", "description"."category_id" AS "description:category_id", "description"."language_id" AS "description:language_id", "description"."name" AS "description:name", "description"."description" AS "description:description", "description"."meta_title" AS "description:meta_title", "description"."meta_description" AS "description:meta_description", "description"."meta_keyword" AS "description:meta_keyword", "catalog_category".* FROM "catalog_category" LEFT JOIN "catalog_category_description" AS "description" ON ("catalog_category"."id" = "description"."category_id") WHERE "parent_id" = 'root' ORDER BY "catalog_category"."id" ASC ] ~ MODPATH/database/classes/kohana/database/postgresql.php [ 148 ]
2011-04-06 09:41:20 --- ERROR: ReflectionException [ 0 ]: Method action_get does not exist ~ SYSPATH/classes/kohana/request.php [ 1217 ]