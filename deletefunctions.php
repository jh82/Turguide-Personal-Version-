<?php

function deleteArtist($conn,$artid)
{
	$result = $conn->query("
		DELETE FROM Artists
		WHERE Artists.artid=$artid
		");
	if(!$result){print "Artist not deleted - failure";}
	
	return;
}

function deleteEvent($conn,$evid)
{
	$result = $conn->query("
		DELETE FROM Events
		WHERE Events.evid=$evid
		");
	if(!$result){print "Event not deleted - failure";}
	
	return;
}

function deleteVenue($conn,$venid)
{
	$result = $conn->query("
		DELETE FROM Venues
		WHERE Venues.vid=$venid
		");
	if(!$result){print "Venue not deleted - failure";}
	
	return;
}

function deleteUser($conn,$accid)
{
	$result = $conn->query("
		DELETE FROM Accounts
		WHERE Accounts.accid=$accid
		");
	if(!$result){print "Account not deleted - failure";}
	
	return;
	
}

//ADD IN FAVORITE FUNCTIONS

function deleteFavArtist($conn,$accid,$artid)
{
	$result = $conn->query("
		DELETE FROM FavArtists
		WHERE FavArtists.fk_accid=$accid
		AND FavArtists.fk_artid=$artid
		");
	if(!$result){print "Account not deleted - failure";}
}

function deleteFavVenue($conn,$accid,$venid)
{
	$result = $conn->query("
		DELETE FROM FavVenues
		WHERE FavVenues.fk_accid=$accid
		AND FavVenues.fk_vid=$venid
		");
	if(!$result){print "Account not deleted - failure";}
}


?>