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


<body class="body1">
<canvas id="game-area" width="1520" height="740" style="border:1px solid black;"></canvas>
<div class="Lbutton"><button><a href="logout.php">Log uit</a></button></div>
<div class="SinglePlayer"><button><a  href="main.html">SinglePlayer</a></button></div>
<div class="Mbutton"><button><a href="multiplayer.html">Multiplayer</a></button></div>
<div class="HS"><button><a href="highscore.php">Highscores</a></button></div>
<script src ="index.js"></script>


</body>
</html>