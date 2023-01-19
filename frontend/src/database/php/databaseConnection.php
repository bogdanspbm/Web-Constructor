<?php

$host = "localhost:49153";
$user = "postgres";
$password = "postgrespw";
$dbname = "postgres";
$con = pg_connect("host=$host dbname=$dbname user=$user password=$password");

if (!$con) {
   die('Connection failed.');
}
?>