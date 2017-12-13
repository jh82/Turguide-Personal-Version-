<?php

include_once 'readfunctions.php';



function allUserVenues($conn,$accid)
{
	$result = $conn->query("
		SELECT FavVenues.fk_vid
		FROM FavVenues
		WHERE FavVenues.fk_accid=$accid
		");
		
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavvenues = $result->fetch_array(); //CHECK
	//print $allfavvenues;
	
	
	$allvenueinfo = array();
	
	while ($row = $result->fetch_assoc()) {
        $allvenueinfo[] = getVenueInfo($row["fk_vid"],$conn);
    }
	
	return json_encode($allvenueinfo);
}

function randomUserVenues($conn,$accid,$amount)
{
	
	//print "THIS";
	$result = $conn->query("
		SELECT DISTINCT FavVenues.fk_vid
		FROM FavVenues
		WHERE FavVenues.fk_accid=$accid
		ORDER BY RAND()
		LIMIT $amount
		");
	//print_r( count($result));
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavvenues = $result->fetch_array(); //CHECK
	//print $allfavvenues;
	
	
	$allvenueinfo = array();
	
	
	while ($row = $result->fetch_assoc()) {
        $allvenueinfo[] = getVenueInfo($row["fk_vid"],$conn);
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
	
	$allfavartists = $result->fetch_array(); //CHECK
	//print 'All fave artists: ';
	//print_r($allfavartists);
	
	
	$allartistinfo = array();
	
	while ($row = $result->fetch_assoc()) {
        $allartistinfo[] = getArtistInfo($row["fk_artid"],$conn);
    }
	
	
	return json_encode($allartistinfo);
}

function randomUserArtists($conn,$accid,$amount)
{
	$result = $conn->query("
		SELECT FavArtists.fk_artid
		FROM FavArtists
		WHERE FavArtists.fk_accid=$accid
		ORDER BY RAND()
		LIMIT $amount
		");
		
		//TODO for random values, use LIMIT 10 and ORDER BY NEWID()
	
	$allfavartists = $result->fetch_array(); //CHECK
	//print $allfavartists;
	
	
	$allartistinfo = array();
	
	while ($row = $result->fetch_assoc()) {
        $allartistinfo[] = getArtistInfo($row["fk_artid"],$conn);
    }
	
	
	return json_encode($allartistinfo);
}


?>
