<?php

include_once 'readfunctions.php';

function getAllArtists($conn)
{
	$result = $conn->query("
		SELECT Artists.artid
		FROM Artists");
		
		
	if(!$result) //query failed b/c bad search term
	{
		print "QUERY FAILED. GIVE THEM SOME ERROR STUFF";
	}
	
	$allartists = array();
	
	while($row = $result->fetch_row())
	{
		$allartists[] = getArtistInfo($row[0],$conn);
	}
	
	return json_encode($allartists);
}

function getAllVenues($conn)
{
	$result = $conn->query("
		SELECT Venues.vid
		FROM Venues");
		
		
	if(!$result) //query failed b/c bad search term
	{
		print "QUERY FAILED. GIVE THEM SOME ERROR STUFF";
	}
	
	$allvenues = array();
	
	while($row = $result->fetch_row())
	{
		$allvenues[] = getVenueInfo($row[0],$conn);
	}
	
	return json_encode($allvenues);
}


?>