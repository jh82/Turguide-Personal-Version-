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

header("Access-Control-Allow-Origin: *;Content-type: application/json");

//test artist

/*
$testartid = $_GET['artid'];

print getArtistInfo($testartid,$conn);


$testvenid = $_GET['venid'];

print getVenueInfo($testvenid,$conn);


$testevid = $_GET['evid'];
print getEventInfo($testevid,$conn);
*/

$testuname = $_GET['uname'];
$testpassword = $_GET['password'];

print getUserInfo($conn,$testuname,$testpassword);

?>