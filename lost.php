<?php

session_start();

include("conn.php");
include("functions.php");


$user_data = check_login($con);
//error_reporting(0);



$highscore = $_POST["score"];
$player_id = $_SESSION["user_id"];
$sql = $conn->prepare("select * from users where user_id = :player");

$sql->execute(["player" => $player_id]);


foreach ($sql as $item) {
    $score = $item["score"];
    $name = $item["username"];
}
if (isset($score)) {
    if ($score < $highscore) {
        $add = $conn->prepare("update users set score = :newscore where user_id = :uid");
        $add->execute
        ([
            "newscore" => $highscore,
            "uid" => $player_id,
        ]);
    }else{
        echo "Your old score remain";
    }
} else{
    echo "Play the game first<br>";

}



?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>End of game</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<div class="container">
    <div class="u-lose"><img src="u-lose.png" alt="U lost"></div>
    <div class="navigation"><a href="index.php">Back to the menu</a></div>
</div>
</body>
</html>
