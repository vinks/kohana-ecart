<html>
    <head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<title><?php echo $title ?></title>
	<script type="text/javascript">
	    var base_url = '<?php echo URL::base(); ?>';
	    var ext_version = '<?php echo $extversion; ?>';
	</script>
	<?php foreach ($styles as $file) echo HTML::style($file), "\n" ?>
	<?php foreach ($scripts as $file) echo HTML::script($file), "\n" ?>
    </head>
    <body><?php echo $content ?></body>
</html>