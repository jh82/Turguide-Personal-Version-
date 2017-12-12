<?php

include_once 'php/readfunctions.php';

$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


	$searchval = mysqli_real_escape_string($conn, $_GET['searchval']);
	//CHECK - artist will need to be modified to return more than 1 artist with same name
	$result = $conn->query("
		SELECT *
		FROM Artists
		WHERE Artists.bname='$searchval'
		LIMIT 1
		");
	if(!$result) //query failed b/c bad search term
	{
		print "QUERY FAILED. GIVE THEM SOME ERROR STUFF";
	}
	
	
	$rarr = $result->fetch_assoc();
	
	$artkey = $rarr['artid'];
	
	$eresult = $conn->query("
		SELECT Events.evid
		FROM Events
		WHERE Events.fk_artid=$artkey
		ORDER BY Events.edate
		LIMIT 5
		");
	if(!$eresult)
	{
		print "No upcoming events for $searchval";
	}
	else
	{
		$upcoming = array();
		while($row = $eresult->fetch_row())
		{
			$upcoming[] = getEventInfo($row[0],$conn);
		}
	}
	
	$info = getArtistInfo($artkey,$conn);
	//print $info;
	
	print json_encode(array('artistinfo' => $info, 'events' => $upcoming)); 
	//return json_encode(array('artistinfo' => $info, 'events' => $upcoming)); 
	//TODO check how to actually return all these json objects efficiently




?>