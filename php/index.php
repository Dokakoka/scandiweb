<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: *');

require_once "request.php";
require_once "dvd.php";
require_once "furniture.php";
require_once "book.php";

$req = new request();

?>