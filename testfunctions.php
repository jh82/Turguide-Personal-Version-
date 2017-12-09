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

$testartid = 5;
header("Access-Control-Allow-Origin: *;Content-type: application/json");
print getArtistInfo($testartid,$conn);
/*
$testvid = 8;
		
print getVenueInfo($testvid,$conn);

$testeid = 14;
		
print getEventInfo($testeid,$conn);
*/

$conn->close();
?>