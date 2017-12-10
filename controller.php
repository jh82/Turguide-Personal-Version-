<?php
//Controller for the project - everything?
$path_components = explode('/', $_SERVER['PATH_INFO']);


if ($_SERVER['REQUEST_METHOD'] == "GET") {
  // GET means either instance look up, index generation, or deletion

  // Following matches instance URL in form
  // /todo.php/<id>
  /*CASES
	READ:
		Artist
		Venue
		Event
		User
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
	
	//Check the 'type' parameter for either a read or delete
	
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