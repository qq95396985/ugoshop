<?php
	$lifetime=1800;
  	session_set_cookie_params($lifetime);
	session_start();

	$name = $_POST["name"];
	$password = $_POST["password"];

	//连接数据库
	$con = mysqli_connect("localhost","admin","","test");
	mysqli_query($con,"set names utf8");
	
	$sql = "SELECT `id`, `name`, `password` FROM `userinfo` WHERE name = '$name' AND password = '$password'";
	// $sql = "SELECT `id`, `name`, `password` FROM `userinfo` WHERE name = '$name' AND password = '$password'";

	$result = mysqli_query($con,$sql);
	$rows = mysqli_num_rows($result);


	if($rows){
		echo $_POST["name"];
		$_SESSION["username"] = $_POST["name"];

	}else{
		echo 0;
	}

	mysqli_close($con);


?>
