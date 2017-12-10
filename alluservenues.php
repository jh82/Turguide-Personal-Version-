<?php
//all of a users favorite artists

include 'functions.php';

function allUserArtists($conn,$accid)
{
	$result = $conn->query("
		SELECT FavVenues.fk_vid
		FROM FavVenues
		WHERE FavVenues.fk_accid=$accid
		");
		
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavvenues = $result->fetch_array()[0]; //CHECK
	print $allfavvenues;
	
	
	$allvenueinfo = array();
	
	foreach( $allfavvenues as $tempvenid)
	{
		
		$allvenueinfo[] = getVenueInfo($tempvenid,$conn);
	}
	
	header("Access-Control-Allow-Origin: *;Content-type: application/json");
	print json_encode($allvenueinfo);
}
?>
