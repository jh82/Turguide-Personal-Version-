<?php

//Setting up server and connection
$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


session_start();

include_once 'createfunctions.php';
include_once 'readfunctions.php';
include_once 'updateFunctions.php';
include_once 'deletefunctions.php';
include_once 'randomfunctions.php';
include_once 'getAll.php';
include_once 'searchFunctions.php';
include_once 'userFavorites.php';

$accid = 1;//$_SESSION['accid'];

$result = $conn->query("
		SELECT FavVenues.fk_vid
		FROM FavVenues
		WHERE FavVenues.fk_accid=$accid
		");
		
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavvenues = array(); //CHECK
	//print_r($allfavvenues);
	
	while($row = $result->fetch_row())
		{
			$allfavvenues[] = $row[0];
		}
//	print_r($allfavvenues);
	
	$aresult = $conn->query("
		SELECT FavArtists.fk_artid
		FROM FavArtists
		WHERE FavArtists.fk_accid=$accid
		");
		
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavartists = array(); //CHECK
	//print_r($allfavvenues);
	
	while($row = $aresult->fetch_row())
		{
			$allfavartists[] = $row[0];
		}
//	print_r($allfavartists);
	
$current_date = '2017-12-13';
$end_date = '2017-12-27';

$allup = array();
for ( $i=0; $i<count($allfavartists);$i++)
{
	$current = $allfavartists[$i];
//	print $current;
//	print "  ";
	$tempresult = $conn->query("
			SELECT Events.evid
			FROM Events
			WHERE Events.edate BETWEEN '$current_date' AND '$end_date'
			AND Events.fk_artid=$current
			");
	if($tempresult) { $allup[] = $tempresult->fetch_row()[0];}
}
for ( $i=0; $i<count($allfavvenues);$i++)
{
	$current = $allfavvenues[$i];
	//print $current;
//	print "  ";
	$tempresult = $conn->query("
			SELECT Events.evid
			FROM Events
			WHERE Events.edate BETWEEN '$current_date' AND '$end_date'
			AND Events.fk_vid=$current
			");
	if($tempresult) { $allup[] = $tempresult->fetch_row()[0];}
}

/*
$upresult = $conn->query("
			SELECT Events.evid
			FROM Events
			WHERE Events.edate BETWEEN '$current_date' AND '$end_date'
			AND (Events.fk_artid IN $allfavartists
				OR Events.fk_vid IN $allfavvenues)
				");
*/
		//print "HERE\n";
		//print_r($allup);
$alljson = array();
//$allup = array_filter($allup);
for ( $i=0; $i<count($allup);$i++)	
{
	if ($allup[$i]!='') {$alljson[] = getEventInfo($allup[$i],$conn);}
}

//print_r($alljson);
//print_r(array_filter($alljson));
print json_encode($alljson);


	
	
	


?>