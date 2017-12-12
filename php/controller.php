<?php

include 'readfunctions.php';
include 'createfunctions.php';
include 'deletefunctions.php';

//Controller for the project - everything?
$path_components = explode('/', $_SERVER['PATH_INFO']);


if ($_SERVER['REQUEST_METHOD'] == "GET") {
  // GET means either instance look up, index generation, or deletion

  // Following matches instance URL in form
  // /todo.php/<id>
  /*CASES
	READ:
		Artist : artid
		Venue  : venid
		Event  : evid
		Account   : accid
		FavArtist - get all, no id
		FavVenue  - get all, no id
	DELETE:
		Artist
		Venue
		Event
		User
		FavArtist
		FavVenue
	*/
	
	//Check the parameter for either a read or delete
	//after, check 'type' for either account, artist, venue, event, favartist, search, etc
	
	if (isset($_REQUEST['read']))
	{
		
		
		
	}
	elseif (isset($_REQUEST['delete']))
	{
		
		
	}
	else
	{
		//fail it?
	}
	
	
  
  
	
  
}
else if ($_SERVER['REQUEST_METHOD'] == "POST") {

  // Either creating or updating
  
  /*CASES
	UPDATE:
		TODO
		
	CREATE
  		Artist
		Venue
		Event
		User
		FavArtist
		FavVenue
	*/
  
}



header("HTTP/1.0 400 Bad Request");
print("Did not understand URL");

?>