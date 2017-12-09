<?php

function getUserInfo($conn,$uname,$upword)
{
	$userinfo;
	
	$result = $conn->query("
		SELECT * 
		FROM Users
		WHERE Users.uname='$uname'
		AND Users.password='$upword'	
		LIMIT 1
		");
	if(!$result)
	{
		print 'User not exist\n';
	}
	else
	{
		$rarr = $result->fetch_assoc();
		$userinfo->uname = $rarr['uname'];
		$userinfo->fname = $rarr['fname'];
		$userinfo->lname = $rarr['lname'];
		$userinfo->home  = $rarr['home'];
		
	}
	
	return json_encode($userinfo);

}


?>