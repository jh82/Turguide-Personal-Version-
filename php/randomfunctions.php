<?php
//retrieves 10 random artists and returns them all in a json array

include 'readfunctions.php';

function randomArtists($conn)
{


	$limits = $conn->query("
			SELECT MAX(Artists.artid),MIN(Artists.artid)
			FROM Artists	
			");
			
	//get limits for random generation
	$max = $limits->fetch_array()[0];
	$min = $limits->fetch_array()[1];

	$toreturn = array();

	for($i=0; $i<10;$i++)		//ADJUST AMOUNT OUTPUT HERE
	{
		
		//generate random artid - should check for dupes later
		$curartid = mt_rand($min,$max);
		
			//retrieve their info
		$toreturn[] = getArtistInfo($curartid,$conn);
		
	}
	header("Content-type: application/json");

	//print json_encode($toreturn);
	return json_encode($toreturn);
}

function randomEvents($conn)
{
		$limits = $conn->query("
			SELECT MAX(Events.evid),MIN(Events.evid)
			FROM Events
			");
			
	//get limits for random generation
	$max = $limits->fetch_array()[0];
	$min = $limits->fetch_array()[1];

	$toreturn = array();

	for($i=0; $i<10;$i++)		//ADJUST AMOUNT OUTPUT HERE
	{
		
		//generate random artid - should check for dupes later
		$curevid = mt_rand($min,$max);
		
			//retrieve their info
		$toreturn[] = getEventInfo($curevid,$conn);
		
	}
	header("Content-type: application/json");
	return json_encode($toreturn);
	
	
}

function randomVenues($conn)
{
	
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
	header("Content-type: application/json");
	return json_encode($toreturn);

}

?>