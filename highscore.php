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
    <title>Highscore</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<div class="containerHighscore">
    <div class="titleH1"><h1>Highscores</h1></div>
    <div class="highscores">
        <table>
            <tr><th>Position</th> <th>Username</th> <th>Score</th></tr>
        <?php

//        Call data from data base on descending order from scores
        $scores = $conn->prepare(" select * from users order by score DESC ");
        $scores->execute();

        //Position number defined
        $number = 1;

        //Foreach loop to place data in table
        foreach ($scores as $score) {
            $user = [$score["username"], $score["score"]];
            echo "<tr><th>".$number."</th><th>".$user[0]."</th><td>". $user[1]."</td></tr>";
            $number++;
        }

        ?>
        </table>
    </div>
</div>


</body>
</html>
