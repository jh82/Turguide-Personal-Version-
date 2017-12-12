<?php
/*
	How to test:
	Use restful api tester
	base url: all artists
	base url/id: single artist
	base url?bname: search
	base url?random: random number
*/


include 'createfunctions.php';
include 'readfunctions.php';
include 'updateFunctions.php';
include 'deletefunctions.php';
include 'randomfunctions.php';

$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

/*

	POST: create
		brings you to landing page for making an artist (headers
	GET: read 
		If no extra path info	: return al artists
		if /idnum 				: return artist with that id
		if ?bname=... 			: return search results on that parameter
		if ?random=num			: return 
	PUT: update
		brings you to a similar landing page for updating info (last)
	DELETE: delete
		removes the artist from the based on id - only possible with ID
*/
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
//[0] should just be 'artist' and if [1] exists it's the id

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $request[0]==='artist')
{
	//bring you to the creating page, nothing additional
	//header('location: somepage.html');
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && $request[0]==='artist')
{
	header('Content-type: application/json');
	
	if ( count($request)==1) //only 1 item, return everything - will gets mess it up?
	{
		//get all artists and return
	}
	elseif ( count($request) > 1)//2 items can be id or GET params
	{
		//1) Check for id and 
		if ( count($_GET)==0)
		{
			$curid = (int) basename($_SERVER['PATH_INFO']);
			print getArtistInfo($curid,$conn);
		}
		else
		{
			//Now check to see if it's bname (search) or random (random number of ones)
			if( isset($_GET['bname']))
			{ //do search by bname
				print artistSearch($conn, mysqli_real_escape_string($_GET['bname']));
			}
			elseif ( isset($_GET['random']))
			{ //get random number of values
				print randomArtists($conn, (int) mysqli_real_escape_string($_GET['random']));
				
			}
		}
				
	}
	}
	else
	{
		//not the right amount in the path - check
	}
		
	
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT' && $request[0]==='artist')
{
	//redirect to update artist page - if it's ever made
}
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE' && $request[1]==='artist')
{
	//do path parsing and delete artist
}
else
{
	//failure, not valid http method
}

	
$conn->close();


?>