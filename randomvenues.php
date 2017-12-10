<?php
//retrieves 10 random artists and returns them all in a json array

include 'functions.php';

$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$limits = $conn->query("
		SELECT MAX(Venues.vid),MIN(Venues.vid)
		FROM Venues	
		");
		
//get limits for random generation
$max = $limits->fetch_array()[0];
$min = $limits->fetch_array()[1];

$toreturn = array();

for($i=0; $i<10;$i++)		//ADJUST AMOUNT OUTPUT HERE
{
	
	//generate random artid - should check for dupes later
	$curvenid = mt_rand($min,$max);
	
		//retrieve their info
	$toreturn[] = getVenueInfo($curvenid,$conn);
	
}
header("Access-Control-Allow-Origin: *;Content-type: application/json");
print json_encode($toreturn);
	


//output all info


?>