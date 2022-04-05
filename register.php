<?php
session_start();

include("conn.php");
include("functions.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    //something was posted
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password) && !is_numeric($username)) {

        //save to database
        $sql_u = "select * from users where username = '$username'";
        $res_u = mysqli_query($con, $sql_u);

        if (mysqli_num_rows($res_u) > 0) {
            echo "Username is al in gebruik!";
        } else {

            $query = "insert into users (username,password) values ('$username','$password')";

            $sql = $conn->prepare("insert into users (username,password) values ('$username','$password')");
            $sql->execute();

            header("Location: login.php");
            die;
        }

    } else {
        echo "Please enter some valid information!";
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign-up</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<div class="login">
    <form method="post">
        <div><h2>Sign up</h2></div>
        <label for="username">Username</label>
        <input id="username" type="text" name="username"><br><br>
        <label for="password">Password</label>
        <input id="password" type="password" name="password"><br><br>

        <input id="button" type="submit" value="Signup"><br><br>

        <a href="login.php">Click to Login</a><br><br>
    </form>
</div>
</body>
</html>
