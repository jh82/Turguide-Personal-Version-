<?php

include 'readfunctions.php'

function allUserVenues($conn,$accid)
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
	
	
	return json_encode($allvenueinfo);
}

function allUserArtists($conn,$accid)
{
	$result = $conn->query("
		SELECT FavArtists.fk_artid
		FROM FavArtists
		WHERE FavArtists.fk_accid=$accid
		");
		
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavartists = $result->fetch_array()[0]; //CHECK
	print $allfavartists;
	
	
	$allartistinfo = array();
	
	foreach( $allfavartists as $tempartid)
	{
		
		$allartistinfo[] = getArtistInfo($tempartid,$conn);
	}
	
	
	return json_encode($allartistinfo);
}


?>
