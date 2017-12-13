<?php

function deleteArtist($conn,$artid)
{
	$result = $conn->query("
		DELETE FROM Artists
		WHERE Artists.artid=$artid
		");
	if(!$result){return json_encode(false);}
	
	return json_encode(true);
}

function deleteEvent($conn,$evid)
{
	$result = $conn->query("
		DELETE FROM Events
		WHERE Events.evid=$evid
		");
	if(!$result){return json_encode(false);}
	
	return json_encode(true);
}

function deleteVenue($conn,$venid)
{
	$result = $conn->query("
		DELETE FROM Venues
		WHERE Venues.vid=$venid
		");
	if(!$result){return json_encode(false);}
	
	return json_encode(true);
}

function deleteUser($conn,$accid)
{
	$result = $conn->query("
		DELETE FROM Accounts
		WHERE Accounts.accid=$accid
		");
	if(!$result){return json_encode(false);}
	
	return json_encode(true);
	
}

//ADD IN FAVORITE FUNCTIONS

function deleteFavArtist($conn,$accid,$artid)
{
	$conn->query("
		DELETE FROM FavArtists
		WHERE FavArtists.fk_accid=$accid
		AND FavArtists.fk_artid=$artid
		");
	if($conn->affected_rows <=0){return json_encode(false);}
	else 
	{
		return json_encode(true);
	}
}

function deleteFavVenue($conn,$accid,$venid)
{
	$result = $conn->query("
		DELETE FROM FavVenues
		WHERE FavVenues.fk_accid=$accid
		AND FavVenues.fk_vid=$venid
		");
	if(!$result){return json_encode(true);}
	return json_encode(true);
}


?>