<?php
//all of a users favorite artists

include 'functions.php';

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
	
	header("Access-Control-Allow-Origin: *;Content-type: application/json");
	print json_encode($allartistinfo);
}


?>