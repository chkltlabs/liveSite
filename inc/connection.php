<?php

$serverName = "rds-mysql-erikgratz-blogpostdb.ckzupzfywem1.us-west-1.rds.amazonaws.com";
$userName   = "erikg";
$password   = "13Characters!";

try {
    $db = new PDO("mysql:host=$serverName;dbname=BlogPostDB", $userName, $password);

    echo "Connection Success!";

}
catch (PDOException $e)
{
    echo "Connection Failed: " . $e->getMessage();
}




?>