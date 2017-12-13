<?php
/*
	How to test:
	Use restful api tester
	base url: all artists
	base url/id: single artist
	base url?bname: search
	base url?random: random number
*/
session_start();



include_once 'createfunctions.php';
include_once 'readfunctions.php';
include_once 'updateFunctions.php';
include_once 'deletefunctions.php';
include_once 'randomfunctions.php';
include_once 'getAll.php';
include_once 'searchFunctions.php';
include_once 'userFavorites.php';

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


$lastitem = pathinfo($_SERVER['PATH_INFO']);
/*
print_r('pathinfo:'.$_SERVER['PATH_INFO']);
print '<br>';
print_r($lastitem);
print '<br> basename: ';
print_r(((int) basename($_SERVER['PATH_INFO'])));
print '<br> GET count: ';
print_r(count($_GET));
print '<br> GET vals';
print_r($_GET);
print '<br>';
print_r(isset($_GET['bname']));
print '<br>';
print_r( $_GET['bname']);
print '<br>';
//print 'HERE';
*/

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
	//singup / create user - and return successful
	
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET')
{
	require_once('authenticate.php'); //user must be logged in to continue
	
	header('Content-type: application/json');
	
	if ( empty($_SERVER['PATH_INFO'])) //only 1 item, return everything - will gets mess it up?
	{
		if( isset($_GET['bname']))
			{ //do search by bname
				//print 'HERE<br>';
				$searchthis = mysqli_real_escape_string($conn,$_GET['bname']);
				//print_r($searchthis);
				print artistSearch($conn,$searchthis);
			}
		elseif ( isset($_GET['random']))
			{ //get random number of values
				print randomArtists($conn, (int) mysqli_real_escape_string($conn,$_GET['random']));
				
			}
		else
		{
			print getAllArtists($conn); //get all artists and return
		}
		
	}
	elseif ( (basename($_SERVER['PATH_INFO'])) === 'venues' || (basename($_SERVER['PATH_INFO'])) === 'artists' )//asking for all favorite artists or venues
	{
		header('Content-type: application/json');
		
		$type = basename($_SERVER['PATH_INFO']);
		if($type==='venues')
		{
			//get venues
			print allUserVenues($conn,$_SESSION['accid']);
		}
		else
		{
			//get artists
			print allUserArtists($conn,$_SESSION['accid']);
		}
				
	}
	else
	{
		//not the right amount in the path - check
	}
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT')
{
	//update something user related
}
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE')
{
	//delete something
}
else
{
	//failure, not valid http method
}


$conn->close();


?>