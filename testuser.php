<?php

 include 'functions.php';
 //include 'parsingmain.php';
		
$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$testuname = 'USER U1';
$testpassword = 'password';
header("Access-Control-Allow-Origin: *;Content-type: application/json");
print getUserInfo($conn,$testuname,$testpassword);


$conn->close();
?>