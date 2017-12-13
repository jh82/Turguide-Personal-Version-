<?php

function check_password($conn,$username, $password) {

  $result = $conn->query("
				SELECT Accounts.password
				FROM Accounts
				WHERE Accounts.uname='$username'
				LIMIT 1");
	if(!$result)
	{ 
		print "INVALID USERNAME";
		return false;
	}
	else
	{
		return ($result->fetch_array()[0] === md5($password));
	}

}

session_start();

$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



$username = $_POST['username'];
$password = $_POST['password'];
//print json_encode($username);
//print json_encode($password);
if (check_password($conn,$username, $password)) {
  header('Content-type: application/json');
  
  // Generate authorization cookie
  $_SESSION['username'] = $username;
  $_SESSION['authsalt'] = time();

  $auth_cookie_val = md5($_SESSION['username'] . $_SERVER['REMOTE_ADDR'] . $_SESSION['authsalt']);

  setcookie('LOGIN_AUTH', $auth_cookie_val, 0, '/', 'wwwp.cs.unc.edu', true);
  //print "Cookie set";
  //save accid in session state
  $hashedpass = md5($password);
  $result = $conn->query("
		SELECT * 
		FROM Accounts
		WHERE Accounts.uname='$username'
		AND Accounts.password='$hashedpass'	
		LIMIT 1
		");
		
  $_SESSION['accid'] = $result->fetch_assoc()['accid'];
  //print "accid session set";
  //print json_encode( var_dump($_SESSION));
  print(json_encode(true));

} else {
  unset($_SESSION['username']);
  unset($_SESSION['authsalt']);
  unset($_SESSION['accid']);

  header('HTTP/1.1 401 Unauthorized');
  header('Content-type: application/json');
  print(json_encode(false));
}

$conn->close();

?>