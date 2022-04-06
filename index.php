<?php
session_start();

include("conn.php");
include("functions.php");


$user_data = check_login($con);
error_reporting(0);
?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<a href="logout.php">Log Uit</a>
<button><a href="main.html">Singleplayer</a></button>
</body>
</html>