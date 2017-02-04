<?php


	// $name = $_POST["name"];
	$goodsId = $_POST["goodsId"];

	//1. 连接数据库
	$con = mysqli_connect("localhost","admin","","test");


	mysqli_query($con,"set names utf8");

	$sql = "INSERT INTO `shopcar`( `goodsId`) VALUES ('$goodsId')";


	// //2.操作数据库
	$result = mysqli_query($con,$sql);


	if($result){
		echo $_POST["goodsId"];
		// $_SESSION["goodsId"] = $_POST["goodsId"];

	}else{
		echo 0;
	}

	// 查看一下数据错误提示
	var_dump(mysqli_error($con));

	//3.关闭数据库连接

	mysqli_close($con);
?>

