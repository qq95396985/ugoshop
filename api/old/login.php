<?php


	$username = $_POST["username"];
	$password = $_POST["password"];

	//1. 连接数据库
	$con = mysqli_connect("localhost","admin","","test");


	mysqli_query($con,"set names utf8");

	// $sql = "INSERT INTO `userinfo`(`id`, `username`, `password`) VALUES ('','$username','$password')";
	$sql = "SELECT `id`, `username`, `password` FROM `userinfo` WHERE username = '$username' AND password = '$password'";

	//2.操作数据库
	$result = mysqli_query($con,$sql);
	$rows=mysqli_num_rows($result); 


	if($rows){
		echo 1;
	}else{
		echo 0;
	}

	//3.关闭数据库连接

	mysqli_close($con);
?>