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
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
</head>
<body>
<div class="log-uit">
<a href="logout.php">Log Uit</a>
</div>
<button><a href="main.html">Singleplayer</a></button>
<button><a href="multiplayer.html">Multiplayer</a></button>
<button><a href="highscore.php">Highscore</a></button>


</body>
</html>