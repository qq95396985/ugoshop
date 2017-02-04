<?php


	$username = $_POST["username"];
	$password = $_POST["password"];

	//1. 连接数据库
	$con = mysqli_connect("localhost","admin","","test");


	mysqli_query($con,"set names utf8");

	$sql = "INSERT INTO `userinfo`(`id`, `username`, `password`) VALUES ('','$username','$password')";
	

	//2.操作数据库
	$result = mysqli_query($con,$sql);


	if($result){
		echo 1;
	}else{
		echo 0;
	}

	//查看一下数据错误提示
	//var_dump(mysqli_error($con));

	//3.关闭数据库连接

	mysqli_close($con);
?>