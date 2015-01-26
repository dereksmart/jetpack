<?php
// In PHP versions earlier than 4.1.0, $HTTP_POST_FILES should be used instead
// of $_FILES.

$filename = $_FILES['userfile'];

if ( isset( $_GET[ $filename ] ) ){
	error_log( 'it worked', 1, 'dsmartg@gmail.com' );
} else {
	error_log( 'it did not work', 1, 'dsmartg@gmail.com' );
}

$uploaddir = '/var/www/uploads/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo '<pre>';
if ( move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile ) ) {
	error_log( 'it worked', 1, 'dsmartg@gmail.com' );
	echo "File is valid, and was successfully uploaded.\n";
} else {
	error_log( 'it didnt work', 1, 'dsmartg@gmail.com' );
	echo "Possible file upload attack!\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);

print "</pre>";