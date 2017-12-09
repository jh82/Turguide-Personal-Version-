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
?>