<?php
session_start();
error_reporting(0);
include("conn.php");
include("functions.php");
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    //something was posted
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password) && !is_numeric($username)) {

        //read from database
        $query = "select * from users where username = '$username' limit 1";
        $result = mysqli_query($con, $query);

        if ($result) {
            if ($result && mysqli_num_rows($result) > 0) {

                $user_data = mysqli_fetch_assoc($result);

                if ($user_data['password'] === $password) {

                    $_SESSION['user_id'] = $user_data['user_id'];
                    header("Location: index.php");
                    die;
                }
            }
        }

        echo "wrong username or password!";
    } else {
        echo "wrong username or password!";
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
    <title>Login</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<div class="login">
    <div class="login-box">
        <form method="post">
            <div class="except"><h2>Login</h2></div>
            <label for="username">Username</label>
            <input id="username" type="text" name="username"><br><br>
            <label for="password">Password</label>
            <input id="password" type="password" name="password"><br><br>
            <input id="button" type="submit" value="Login"><br><br>
            <a href="register.php">Click to Signup</a><br><br>
        </form>
    </div>
</div>
</body>
</html>
